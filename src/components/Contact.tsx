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
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GradientText } from './GradientText'
import { useState } from 'react'

const MotionHeading = motion(Heading) as any

export const Contact = () => {
  const { t, i18n } = useTranslation()
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Валидация telegram username
    if (!formData.telegram.startsWith('@')) {
      toast({
        title: i18n.language === 'ru' ? 'Ошибка' : 'Error',
        description: i18n.language === 'ru' 
          ? 'Telegram никнейм должен начинаться с @' 
          : 'Telegram username must start with @',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: i18n.language === 'ru' ? 'Успешно!' : 'Success!',
          description: t('contact.form.success'),
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setFormData({ name: '', telegram: '', message: '' })
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      toast({
        title: i18n.language === 'ru' ? 'Ошибка' : 'Error',
        description: t('contact.form.error'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
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
            {t('contact.title')} <GradientText>{t('contact.titleHighlight')}</GradientText>
          </MotionHeading>

          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="text.muted"
            textAlign="center"
            maxW="2xl"
            px={{ base: 2, md: 0 }}
          >
            {t('contact.description')}
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
                  {t('contact.form.name')}
                </FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.form.namePlaceholder')}
                  bg="background.secondary"
                  border="1px solid"
                  borderColor="brand.900"
                  borderRadius="lg"
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
                  {t('contact.form.telegram')}
                </FormLabel>
                <Input
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  placeholder={t('contact.form.telegramPlaceholder')}
                  bg="background.secondary"
                  border="1px solid"
                  borderColor="brand.900"
                  borderRadius="lg"
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
                  {t('contact.form.message')}
                </FormLabel>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={6}
                  bg="background.secondary"
                  border="1px solid"
                  borderColor="brand.900"
                  borderRadius="lg"
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
                borderRadius="full"
                isLoading={isSubmitting}
                loadingText={t('contact.form.sending')}
              >
                {t('contact.form.send')}
              </Button>
            </VStack>
          </Box>

          <VStack spacing={4} pt={{ base: 4, md: 8 }}>
            <Text color="text.muted" fontSize={{ base: 'sm', md: 'md' }}>
              {t('contact.direct')}
            </Text>
            <VStack spacing={3} display={{ base: 'flex', sm: 'none' }}>
              <Link
                href="mailto:doorto338@gmail.com"
                color="brand.500"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ color: 'brand.400' }}
              >
                📧 doorto338@gmail.com
              </Link>
              <Link
                href="https://t.me/mercurydotagency"
                color="brand.500"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ color: 'brand.400' }}
                isExternal
              >
                💬 @mercurydotagency
              </Link>
            </VStack>
            <HStack spacing={6} flexWrap="wrap" justify="center" display={{ base: 'none', sm: 'flex' }}>
              <Link
                href="mailto:doorto338@gmail.com"
                color="brand.500"
                fontWeight="semibold"
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{ color: 'brand.400' }}
              >
                📧 doorto338@gmail.com
              </Link>
              <Link
                href="https://t.me/mercurydotagency"
                color="brand.500"
                fontWeight="semibold"
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{ color: 'brand.400' }}
                isExternal
              >
                💬 @mercurydotagency
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box mt={{ base: 12, md: 20 }} pt={{ base: 6, md: 8 }} borderTop="1px solid" borderColor="brand.900">
        <Text textAlign="center" color="text.muted" fontSize={{ base: 'xs', md: 'sm' }}>
          © {new Date().getFullYear()} Mercury Agency. {t('contact.footer')}
        </Text>
      </Box>
    </Box>
  )
}




