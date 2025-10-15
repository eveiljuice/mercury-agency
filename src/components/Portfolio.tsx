import { Box, Container, Heading, SimpleGrid, Text, VStack, HStack, Tag, Link, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AnimatedCard } from './AnimatedCard'
import { GradientText } from './GradientText'
import { SwipeablePortfolio } from './SwipeablePortfolio'

const MotionHeading = motion(Heading)

const projects = [
  {
    title: 'TrendXL 2.0',
    description: 'AI-powered TikTok trend analysis platform. Analyzes profiles using Ensemble API and GPT-4o to identify trending content and hashtags.',
    tech: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Chakra UI'],
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with AI-powered product recommendations, inventory management, and real-time analytics.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'TensorFlow'],
    link: '#',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'HIPAA-compliant patient management system with AI diagnostics assistance and appointment scheduling.',
    tech: ['React', 'Python', 'FastAPI', 'ML', 'AWS'],
    link: '#',
  },
  {
    title: 'Smart Analytics Tool',
    description: 'Business intelligence platform with automated reporting, predictive analytics, and custom visualizations.',
    tech: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable messaging platform with AI moderation, end-to-end encryption, and multimedia support.',
    tech: ['React Native', 'WebSocket', 'Redis', 'Firebase'],
    link: '#',
  },
  {
    title: 'Financial SaaS',
    description: 'Automated invoicing and expense tracking system with AI-powered categorization and fraud detection.',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Plaid'],
    link: '#',
  },
]

export const Portfolio = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

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
            Our <GradientText>Portfolio</GradientText>
          </MotionHeading>

          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="text.muted"
            textAlign="center"
            maxW="2xl"
            px={{ base: 2, md: 0 }}
          >
            We've delivered exceptional solutions across various industries. 
            Here are some of our recent projects.
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
                      View Project →
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

