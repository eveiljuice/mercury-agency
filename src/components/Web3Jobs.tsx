import { useState, useEffect } from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Button, 
  Badge,
  Grid,
  Spinner,
  Link,
  Tabs,
  TabList,
  Tab,
  useBreakpointValue
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fetchWeb3Jobs, Web3Job } from '../services/web3Jobs'
import { GradientText } from './GradientText'

const MotionBox = motion(Box) as any

export const Web3Jobs = () => {
  const { t } = useTranslation()
  const [jobs, setJobs] = useState<Web3Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Web3Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'remote'>('all')
  
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 })

  useEffect(() => {
    loadJobs()
  }, [])

  useEffect(() => {
    if (selectedFilter === 'remote') {
      setFilteredJobs(jobs.filter(job => job.location.toLowerCase().includes('remote')))
    } else {
      setFilteredJobs(jobs)
    }
  }, [selectedFilter, jobs])

  const loadJobs = async () => {
    setIsLoading(true)
    const data = await fetchWeb3Jobs({ limit: 50, show_description: false })
    setJobs(data)
    setFilteredJobs(data)
    setIsLoading(false)
  }

  const formatDate = (dateEpoch: number) => {
    const date = new Date(dateEpoch * 1000)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return t('jobs.today')
    if (diffDays === 1) return t('jobs.yesterday')
    if (diffDays < 7) return `${diffDays} ${t('jobs.daysAgo')}`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} ${t('jobs.weeksAgo')}`
    return date.toLocaleDateString()
  }

  return (
    <Box 
      id="jobs"
      minH="100vh" 
      py={{ base: 20, md: 32 }} 
      bg="background.primary"
      position="relative"
      overflow="hidden"
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        top="20%"
        right="-10%"
        w="600px"
        h="600px"
        bg="brand.500"
        filter="blur(150px)"
        opacity={0.1}
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12} align="stretch">
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              {t('jobs.title')}{' '}
              <GradientText>{t('jobs.titleHighlight')}</GradientText>
            </Heading>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }}
              color="text.secondary"
              maxW="2xl"
            >
              {t('jobs.description')}
            </Text>
          </VStack>

          {/* Filters */}
          <Tabs 
            variant="soft-rounded" 
            colorScheme="orange"
            onChange={(index) => setSelectedFilter(index === 0 ? 'all' : 'remote')}
            display="flex"
            justifyContent="center"
          >
            <TabList 
              bg="background.secondary" 
              p={1} 
              borderRadius="full"
              border="1px solid"
              borderColor="brand.900"
            >
              <Tab 
                _selected={{ 
                  bg: 'brand.500', 
                  color: 'background.primary',
                  fontWeight: 'bold' 
                }}
                borderRadius="full"
                px={8}
              >
                {t('jobs.all')} ({jobs.length})
              </Tab>
              <Tab 
                _selected={{ 
                  bg: 'brand.500', 
                  color: 'background.primary',
                  fontWeight: 'bold' 
                }}
                borderRadius="full"
                px={8}
              >
                {t('jobs.remote')} ({jobs.filter(j => j.location.toLowerCase().includes('remote')).length})
              </Tab>
            </TabList>
          </Tabs>

          {/* Jobs Grid */}
          {isLoading ? (
            <VStack py={20}>
              <Spinner size="xl" color="brand.500" thickness="4px" />
              <Text color="text.secondary">{t('jobs.loading')}</Text>
            </VStack>
          ) : (
            <AnimatePresence mode="wait">
              <Grid
                templateColumns={`repeat(${columns}, 1fr)`}
                gap={6}
              >
                {filteredJobs.map((job, index) => (
                  <MotionBox
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Box
                      bg="background.secondary"
                      border="1px solid"
                      borderColor="brand.900"
                      borderRadius="xl"
                      p={6}
                      h="100%"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(205, 127, 50, 0.15)',
                      }}
                      transition="all 0.3s ease"
                      display="flex"
                      flexDirection="column"
                    >
                      <VStack align="stretch" spacing={4} flex={1}>
                        {/* Company & Date */}
                        <HStack justify="space-between" align="start">
                          <Text 
                            fontSize="sm" 
                            fontWeight="bold" 
                            color="brand.500"
                          >
                            {job.company}
                          </Text>
                          <Text fontSize="xs" color="text.secondary">
                            {formatDate(job.date_epoch)}
                          </Text>
                        </HStack>

                        {/* Title */}
                        <Heading 
                          fontSize="lg" 
                          color="text.primary"
                          noOfLines={2}
                        >
                          {job.title}
                        </Heading>

                        {/* Location */}
                        <Text fontSize="sm" color="text.secondary">
                          📍 {job.location}
                        </Text>

                        {/* Tags */}
                        <HStack wrap="wrap" spacing={2} flex={1}>
                          {job.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              bg="brand.900"
                              color="brand.500"
                              px={2}
                              py={1}
                              borderRadius="md"
                              fontSize="xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {job.tags.length > 3 && (
                            <Badge
                              bg="brand.900"
                              color="text.secondary"
                              px={2}
                              py={1}
                              borderRadius="md"
                              fontSize="xs"
                            >
                              +{job.tags.length - 3}
                            </Badge>
                          )}
                        </HStack>

                        {/* Apply Button - ВАЖНО: rel="follow" без utm параметров */}
                        <Link
                          href={job.apply_url}
                          isExternal
                          rel="follow"
                          _hover={{ textDecoration: 'none' }}
                          w="100%"
                        >
                          <Button
                            variant="bronze"
                            w="100%"
                            borderRadius="full"
                            size="sm"
                          >
                            {t('jobs.apply')} →
                          </Button>
                        </Link>
                      </VStack>
                    </Box>
                  </MotionBox>
                ))}
              </Grid>
            </AnimatePresence>
          )}

          {/* Footer note */}
          <Text 
            textAlign="center" 
            fontSize="sm" 
            color="text.secondary"
            pt={8}
          >
            {t('jobs.powered')}{' '}
            <Link 
              href="https://web3.career" 
              isExternal 
              rel="follow"
              color="brand.500"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline' }}
            >
              Web3.Career
            </Link>
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

