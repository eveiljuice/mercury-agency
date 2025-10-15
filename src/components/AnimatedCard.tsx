import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box) as any

interface AnimatedCardProps extends BoxProps {
  children: React.ReactNode
  delay?: number
}

export const AnimatedCard = ({ children, delay = 0, ...props }: AnimatedCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay } as any}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 40px rgba(205, 127, 50, 0.3)',
      }}
      bg="background.secondary"
      borderRadius="xl"
      border="1px solid"
      borderColor="brand.900"
      p={{ base: 6, md: 8 }}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        bgGradient: 'linear(to-r, brand.700, brand.500)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
      _hover={{
        _before: {
          opacity: 1,
        },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

