import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AnimatedCard } from './AnimatedCard'
import { GradientText } from './GradientText'

const MotionHeading = motion(Heading)

const services = [
  {
    icon: '🚀',
    title: 'Full-Stack Development',
    description: 'End-to-end application development using modern frameworks like React, Node.js, and TypeScript. We build scalable, performant solutions tailored to your needs.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your applications. From GPT-powered features to custom ML models, we make AI accessible and practical.',
  },
  {
    icon: '⚡',
    title: 'Custom Solutions',
    description: 'Bespoke software solutions designed around your unique challenges. We analyze, architect, and deliver systems that give you a competitive edge.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love. Modern design systems with smooth animations and pixel-perfect implementation.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Robust cloud infrastructure and CI/CD pipelines. We ensure your applications are reliable, scalable, and easy to maintain.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights. Custom dashboards, reporting systems, and data visualization solutions.',
  },
]

export const Services = () => {
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
            Our <GradientText>Services</GradientText>
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

