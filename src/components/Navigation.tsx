import { Box, Container, HStack, Button, IconButton, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { useIsMobile } from '../hooks/useIsMobile'
import { MobileMenu } from './MobileMenu'

const MotionBox = motion(Box)

const menuItems = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const scrollDirection = useScrollDirection()
  const isMobile = useIsMobile()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <MotionBox
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={100}
        bg="rgba(10, 6, 4, 0.8)"
        backdropFilter="blur(10px)"
        borderBottom="1px solid"
        borderColor="brand.900"
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' ? '-100%' : 0 }}
        transition={{ duration: 0.3 }}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.3)"
      >
        <Container maxW="container.xl">
          <HStack justify="space-between" py={4}>
            {/* Logo */}
            <Box
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              _hover={{ transform: 'scale(1.05)', filter: 'drop-shadow(0 0 20px rgba(205, 127, 50, 0.5))' }}
              transition="all 0.3s ease"
              display="flex"
              alignItems="center"
            >
              <Image 
                src="/mercury-logo.png" 
                alt="Mercury Agency" 
                h={{ base: '40px', md: '50px' }}
                w="auto"
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <HStack spacing={1}>
                {menuItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    color="text.secondary"
                    fontWeight="medium"
                    _hover={{
                      bg: 'brand.900',
                      color: 'brand.500',
                    }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="bronze"
                  size="sm"
                  ml={2}
                  onClick={() => handleNavClick('#contact')}
                >
                  Get Started
                </Button>
              </HStack>
            )}

            {/* Mobile Burger */}
            {isMobile && (
              <IconButton
                aria-label="Open menu"
                icon={
                  <Box>
                    <Box w="24px" h="2px" bg="brand.500" mb="6px" borderRadius="full" />
                    <Box w="24px" h="2px" bg="brand.500" mb="6px" borderRadius="full" />
                    <Box w="24px" h="2px" bg="brand.500" borderRadius="full" />
                  </Box>
                }
                variant="ghost"
                _hover={{ bg: 'brand.900' }}
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </HStack>
        </Container>
      </MotionBox>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

