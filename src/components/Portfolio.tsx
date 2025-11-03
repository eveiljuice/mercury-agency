import { Box, Container, Heading, SimpleGrid, Text, VStack, HStack, Tag, Link, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimatedCard } from './AnimatedCard'
import { GradientText } from './GradientText'
import { SwipeablePortfolio } from './SwipeablePortfolio'

const MotionHeading = motion(Heading) as any

export const Portfolio = () => {
  const { t } = useTranslation()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const projects = [
    {
      title: 'TrendXL 2.0',
      description: t('portfolio.projects.trendxl.description'),
      tech: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Chakra UI'],
      link: '#',
    },
    {
      title: 'Donein5',
      description: t('portfolio.projects.donein5.description'),
      tech: ['React', 'TypeScript', 'Node.js', 'AI Agents', 'API'],
      link: '#',
    },
    {
      title: 'MathGPT',
      description: t('portfolio.projects.mathgpt.description'),
      tech: ['Python', 'OpenAI', 'Google Sheets API', 'MathJax'],
      link: '#',
    },
    {
      title: 'EdTech Parser',
      description: t('portfolio.projects.edtech.description'),
      tech: ['Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Web Scraping'],
      link: '#',
    },
    {
      title: 'AI-Producer',
      description: t('portfolio.projects.aiproducer.description'),
      tech: ['Python', 'OpenAI', 'D-ID', 'FFmpeg', 'React'],
      link: '#',
    },
  ]

  return (
    <Box id="portfolio" py={{ base: 12, md: 20 }} bg="background.secondary">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 8, md: 12 }}>
          <MotionHeading
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            textAlign="center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('portfolio.title')} <GradientText>{t('portfolio.titleHighlight')}</GradientText>
          </MotionHeading>

          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="text.muted"
            textAlign="center"
            maxW="2xl"
            px={{ base: 2, md: 0 }}
          >
            {t('portfolio.description')}
          </Text>

          {isMobile ? (
            <SwipeablePortfolio projects={projects} />
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }} w="full">
              {projects.map((project, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <VStack align="start" spacing={4} h="full">
                    <Heading size={{ base: 'sm', md: 'md' }} color="brand.500">
                      {project.title}
                    </Heading>
                    <Text color="text.muted" lineHeight="tall" flex="1" fontSize={{ base: 'sm', md: 'md' }}>
                      {project.description}
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.tech.map((tech, i) => (
                        <Tag
                          key={i}
                          size="sm"
                          bg="brand.900"
                          color="brand.500"
                          borderRadius="full"
                          px={3}
                          py={1}
                          fontSize="xs"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                    <Link
                      color="brand.500"
                      fontWeight="semibold"
                      fontSize={{ base: 'sm', md: 'md' }}
                      _hover={{ color: 'brand.400', textDecoration: 'underline' }}
                    >
                      {t('portfolio.viewProject')}
                    </Link>
                  </VStack>
                </AnimatedCard>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

