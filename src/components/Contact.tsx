import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Link,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GradientText } from './GradientText'
import { useState } from 'react'

const MotionHeading = motion(Heading)

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Box id="contact" py={{ base: 12, md: 20 }} bg="background.secondary">
      <Container maxW="container.md" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 8, md: 12 }}>
          <MotionHeading
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            textAlign="center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In <GradientText>Touch</GradientText>
          </MotionHeading>

          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="text.muted"
            textAlign="center"
            maxW="2xl"
            px={{ base: 2, md: 0 }}
          >
            Ready to start your next project? Have a question? 
            We'd love to hear from you. Drop us a message and we'll respond as soon as possible.
          </Text>

          <Box
            as="form"
            onSubmit={handleSubmit}
            w="full"
            bg="background.primary"
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            border="1px solid"
            borderColor="brand.900"
          >
            <VStack spacing={{ base: 4, md: 6 }}>
              <FormControl isRequired>
                <FormLabel color="text.secondary" fontSize={{ base: 'sm', md: 'md' }}>
                  Name
                </FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  bg="background.secondary"
                  border="1px solid"
                  borderColor="brand.900"
                  minH="48px"
                  fontSize={{ base: 'md', md: 'md' }}
                  _hover={{ borderColor: 'brand.700' }}
                  _focus={{ 
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px rgba(255, 140, 66, 0.5)'
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="text.secondary" fontSize={{ base: 'sm', md: 'md' }}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  bg="background.secondary"
                  border="1px solid"
                  borderColor="brand.900"
                  minH="48px"
                  fontSize={{ base: 'md', md: 'md' }}
                  _hover={{ borderColor: 'brand.700' }}
                  _focus={{ 
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px rgba(255, 140, 66, 0.5)'
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="text.secondary" fontSize={{ base: 'sm', md: 'md' }}>
                  Message
                </FormLabel>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={6}
                  bg="background.secondary"
                  border="1px solid"
                  borderColor="brand.900"
                  fontSize={{ base: 'md', md: 'md' }}
                  _hover={{ borderColor: 'brand.700' }}
                  _focus={{ 
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px rgba(255, 140, 66, 0.5)'
                  }}
                />
              </FormControl>

              <Button
                type="submit"
                variant="bronze"
                size="lg"
                w="full"
                minH="56px"
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          <VStack spacing={4} pt={{ base: 4, md: 8 }}>
            <Text color="text.muted" fontSize={{ base: 'sm', md: 'md' }}>
              Or reach us directly:
            </Text>
            <VStack spacing={3} display={{ base: 'flex', sm: 'none' }}>
              <Link
                href="mailto:contact@mercuryagency.com"
                color="brand.500"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ color: 'brand.400' }}
              >
                📧 contact@mercuryagency.com
              </Link>
              <Link
                href="https://twitter.com/mercuryagency"
                color="brand.500"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ color: 'brand.400' }}
                isExternal
              >
                🐦 Twitter
              </Link>
              <Link
                href="https://github.com/mercuryagency"
                color="brand.500"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ color: 'brand.400' }}
                isExternal
              >
                💻 GitHub
              </Link>
            </VStack>
            <HStack spacing={6} flexWrap="wrap" justify="center" display={{ base: 'none', sm: 'flex' }}>
              <Link
                href="mailto:contact@mercuryagency.com"
                color="brand.500"
                fontWeight="semibold"
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{ color: 'brand.400' }}
              >
                📧 contact@mercuryagency.com
              </Link>
              <Link
                href="https://twitter.com/mercuryagency"
                color="brand.500"
                fontWeight="semibold"
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{ color: 'brand.400' }}
                isExternal
              >
                🐦 Twitter
              </Link>
              <Link
                href="https://github.com/mercuryagency"
                color="brand.500"
                fontWeight="semibold"
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{ color: 'brand.400' }}
                isExternal
              >
                💻 GitHub
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box mt={{ base: 12, md: 20 }} pt={{ base: 6, md: 8 }} borderTop="1px solid" borderColor="brand.900">
        <Text textAlign="center" color="text.muted" fontSize={{ base: 'xs', md: 'sm' }}>
          © {new Date().getFullYear()} Mercury Agency. Built with ❤️ and AI.
        </Text>
      </Box>
    </Box>
  )
}

