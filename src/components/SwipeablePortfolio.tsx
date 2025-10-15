import { Box, VStack, Heading, Text, HStack, Tag } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)

interface Project {
  title: string
  description: string
  tech: string[]
}

interface SwipeablePortfolioProps {
  projects: Project[]
}

export const SwipeablePortfolio = ({ projects }: SwipeablePortfolioProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection
    if (nextIndex >= 0 && nextIndex < projects.length) {
      setDirection(newDirection)
      setCurrentIndex(nextIndex)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <Box position="relative" w="full" minH="400px">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <MotionBox
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x
            if (swipe > 10000) {
              paginate(-1)
            } else if (swipe < -10000) {
              paginate(1)
            }
          }}
          bg="background.secondary"
          borderRadius="xl"
          border="1px solid"
          borderColor="brand.900"
          p={6}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            bgGradient: 'linear(to-r, brand.700, brand.500)',
          }}
        >
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.500">
              {projects[currentIndex].title}
            </Heading>
            <Text color="text.muted" lineHeight="tall" fontSize="sm">
              {projects[currentIndex].description}
            </Text>
            <HStack spacing={2} flexWrap="wrap">
              {projects[currentIndex].tech.map((tech, i) => (
                <Tag
                  key={i}
                  size="sm"
                  bg="brand.900"
                  color="brand.500"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {tech}
                </Tag>
              ))}
            </HStack>
          </VStack>
        </MotionBox>
      </AnimatePresence>

      {/* Dots indicator */}
      <HStack justify="center" spacing={2} mt={6}>
        {projects.map((_, index) => (
          <Box
            key={index}
            w={index === currentIndex ? '24px' : '8px'}
            h="8px"
            borderRadius="full"
            bg={index === currentIndex ? 'brand.500' : 'brand.900'}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          />
        ))}
      </HStack>

      {/* Navigation hint */}
      <Text
        textAlign="center"
        fontSize="xs"
        color="text.muted"
        mt={4}
      >
        👆 Swipe or tap dots to navigate
      </Text>
    </Box>
  )
}

