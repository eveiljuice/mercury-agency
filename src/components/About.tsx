import { Box, Container, Heading, SimpleGrid, Text, VStack, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GradientText } from './GradientText'

const MotionHeading = motion(Heading)
const MotionBox = motion(Box)

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
]

export const About = () => {
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
            About <GradientText>Mercury Agency</GradientText>
          </MotionHeading>

          <Text
            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
            color="text.secondary"
            textAlign="center"
            maxW="3xl"
            lineHeight="tall"
            px={{ base: 2, md: 0 }}
          >
            We're a team of passionate developers, designers, and AI specialists 
            dedicated to building the future of web applications. Our mission is to 
            transform innovative ideas into powerful digital solutions that drive real results.
          </Text>

          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="text.muted"
            textAlign="center"
            maxW="2xl"
            lineHeight="tall"
            px={{ base: 2, md: 0 }}
          >
            With expertise spanning from modern frontend frameworks to cutting-edge AI integration, 
            we bring together the best of technology and design to create applications that are 
            not just functional, but exceptional.
          </Text>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 6, md: 8 }} w="full" pt={{ base: 4, md: 8 }}>
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Stat textAlign="center">
                  <StatNumber
                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                    fontWeight="extrabold"
                    bgGradient="linear(to-r, brand.700, brand.500)"
                    bgClip="text"
                  >
                    {stat.number}
                  </StatNumber>
                  <StatLabel
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    color="text.muted"
                    mt={2}
                  >
                    {stat.label}
                  </StatLabel>
                </Stat>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

