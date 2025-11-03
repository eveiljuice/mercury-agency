import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GradientText } from './GradientText'
import { AnimatedCard } from './AnimatedCard'

const MotionHeading = motion(Heading) as any

export const About = () => {
  const { t } = useTranslation()

  return (
    <Box id="about" py={{ base: 12, md: 20 }} bg="background.primary">
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
            {t('about.title')} <GradientText>{t('about.titleHighlight')}</GradientText>
          </MotionHeading>

          <Text
            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
            color="text.secondary"
            textAlign="center"
            maxW="3xl"
            lineHeight="tall"
            px={{ base: 2, md: 0 }}
          >
            {t('about.description')}
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} w="full" pt={{ base: 4, md: 8 }}>
            <AnimatedCard delay={0}>
              <VStack align="start" spacing={4}>
                <Heading size={{ base: 'sm', md: 'md' }} color="brand.500">
                  {t('about.mission.title')}
                </Heading>
                <Text color="text.muted" lineHeight="tall" fontSize={{ base: 'sm', md: 'md' }}>
                  {t('about.mission.description')}
                </Text>
              </VStack>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <VStack align="start" spacing={4}>
                <Heading size={{ base: 'sm', md: 'md' }} color="brand.500">
                  {t('about.approach.title')}
                </Heading>
                <Text color="text.muted" lineHeight="tall" fontSize={{ base: 'sm', md: 'md' }}>
                  {t('about.approach.description')}
                </Text>
              </VStack>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <VStack align="start" spacing={4}>
                <Heading size={{ base: 'sm', md: 'md' }} color="brand.500">
                  {t('about.expertise.title')}
                </Heading>
                <Text color="text.muted" lineHeight="tall" fontSize={{ base: 'sm', md: 'md' }}>
                  {t('about.expertise.description')}
                </Text>
              </VStack>
            </AnimatedCard>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

