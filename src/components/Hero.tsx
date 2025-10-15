import { Box, Container, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GradientText } from './GradientText'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export const Hero = () => {
  return (
    <Box 
      minH={{ base: '90vh', md: '100vh' }}
      pt={{ base: '60px', md: '0' }}
      position="relative" 
      display="flex" 
      alignItems="center"
      overflow="hidden"
    >
      {/* Animated Background */}
      <MotionBox
        position="absolute"
        top="-50%"
        left="-50%"
        right="-50%"
        bottom="-50%"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(205, 127, 50, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 140, 66, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(205, 127, 50, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(205, 127, 50, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Particle effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.3"
        backgroundImage="radial-gradient(circle, #cd7f32 1px, transparent 1px)"
        backgroundSize="50px 50px"
      />

      <Container maxW="container.xl" position="relative" zIndex={1} px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 6, md: 8 }} align="center" textAlign="center">
          <MotionHeading
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl', lg: '7xl' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            lineHeight={{ base: '1.2', md: '1.1' }}
          >
            <GradientText>Mercury Agency</GradientText>
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl' }}
            color="text.secondary"
            maxW="3xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            fontWeight="medium"
            px={{ base: 2, md: 0 }}
          >
            We build{' '}
            <Text as="span" color="brand.500" fontWeight="bold">
              AI-powered
            </Text>{' '}
            full-stack applications that transform your business
          </MotionText>

          <MotionText
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="text.muted"
            maxW="2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            px={{ base: 4, md: 0 }}
          >
            From concept to deployment, we craft cutting-edge solutions 
            that leverage the latest in artificial intelligence and modern web technologies
          </MotionText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Flex 
              gap={4} 
              flexDirection={{ base: 'column', sm: 'row' }}
              justify="center"
              w={{ base: 'full', sm: 'auto' }}
              px={{ base: 4, sm: 0 }}
            >
              <Button 
                variant="bronze" 
                size={{ base: 'md', md: 'lg' }}
                w={{ base: 'full', sm: 'auto' }}
                minH={{ base: '48px', md: '56px' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              <Button 
                variant="bronzeOutline" 
                size={{ base: 'md', md: 'lg' }}
                w={{ base: 'full', sm: 'auto' }}
                minH={{ base: '48px', md: '56px' }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
            </Flex>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  )
}

