import { Box, VStack, Text, IconButton, HStack, Button } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const MotionBox = motion(Box) as any

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t, i18n } = useTranslation()

  const menuItems = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.jobs'), href: '#jobs' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(10, 6, 4, 0.95)"
            backdropFilter="blur(10px)"
            zIndex={998}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu */}
          <MotionBox
            position="fixed"
            top="0"
            right="0"
            bottom="0"
            width="80%"
            maxW="300px"
            bg="background.secondary"
            borderLeft="1px solid"
            borderColor="brand.900"
            zIndex={999}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            boxShadow="-10px 0 50px rgba(205, 127, 50, 0.2)"
          >
            {/* Close button */}
            <Box p={6} display="flex" justifyContent="flex-end">
              <IconButton
                aria-label="Close menu"
                icon={<Text fontSize="2xl">✕</Text>}
                variant="ghost"
                color="brand.500"
                _hover={{ bg: 'brand.900' }}
                onClick={onClose}
              />
            </Box>

            {/* Menu items */}
            <VStack spacing={2} px={6} pt={4}>
              {menuItems.map((item, index) => (
                <MotionBox
                  key={item.href}
                  w="full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    as="button"
                    w="full"
                    textAlign="center"
                    py={4}
                    px={6}
                    borderRadius="full"
                    fontSize="lg"
                    fontWeight="semibold"
                    color="text.secondary"
                    border="1px solid"
                    borderColor="brand.900"
                    _hover={{
                      bg: 'brand.900',
                      color: 'brand.500',
                      transform: 'scale(1.05)',
                    }}
                    transition="all 0.3s ease"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.label}
                  </Box>
                </MotionBox>
              ))}
              
              {/* Language Switcher */}
              <MotionBox
                w="full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                pt={4}
              >
                <HStack spacing={2} w="full">
                  <Button
                    flex={1}
                    variant={i18n.language === 'ru' ? 'bronze' : 'ghost'}
                    borderRadius="full"
                    onClick={() => changeLanguage('ru')}
                    size="sm"
                  >
                    🇷🇺 RU
                  </Button>
                  <Button
                    flex={1}
                    variant={i18n.language === 'en' ? 'bronze' : 'ghost'}
                    borderRadius="full"
                    onClick={() => changeLanguage('en')}
                    size="sm"
                  >
                    🇬🇧 EN
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>

            {/* Footer */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p={6}
              borderTop="1px solid"
              borderColor="brand.900"
            >
              <Text fontSize="sm" color="text.muted" textAlign="center">
                Mercury Agency
              </Text>
              <Text fontSize="xs" color="text.muted" textAlign="center" mt={1}>
                AI-Powered Solutions
              </Text>
            </Box>
          </MotionBox>
        </>
      )}
    </AnimatePresence>
  )
}

