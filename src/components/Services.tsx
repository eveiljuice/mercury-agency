import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimatedCard } from './AnimatedCard'
import { GradientText } from './GradientText'

const MotionHeading = motion(Heading) as any

export const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: '🚀',
      title: t('services.fullStack.title'),
      description: t('services.fullStack.description'),
    },
    {
      icon: '🤖',
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: '⚡',
      title: t('services.custom.title'),
      description: t('services.custom.description'),
    },
    {
      icon: '🎨',
      title: t('services.design.title'),
      description: t('services.design.description'),
    },
    {
      icon: '☁️',
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
    },
    {
      icon: '📊',
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
    },
  ]

  return (
    <Box id="services" py={{ base: 12, md: 20 }} bg="background.primary">
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
            {t('services.title')} <GradientText>{t('services.titleHighlight')}</GradientText>
          </MotionHeading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }} w="full">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1} minH={{ base: 'auto', md: '280px' }}>
                <VStack align="start" spacing={4} h="full">
                  <Text fontSize={{ base: '3xl', md: '4xl' }} role="img" aria-label={service.title}>
                    {service.icon}
                  </Text>
                  <Heading size={{ base: 'sm', md: 'md' }} color="brand.500">
                    {service.title}
                  </Heading>
                  <Text color="text.muted" lineHeight="tall" fontSize={{ base: 'sm', md: 'md' }}>
                    {service.description}
                  </Text>
                </VStack>
              </AnimatedCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

