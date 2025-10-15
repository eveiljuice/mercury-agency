import { Box, Image, VStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

interface LoadingScreenProps {
  isLoading: boolean
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <MotionBox
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="background.primary"
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <VStack spacing={6}>
            <MotionImage
              src="/mercury-logo.png"
              alt="Mercury Agency"
              boxSize={{ base: '120px', md: '160px' }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
              animate={{
                opacity: [0, 1, 1, 1],
                scale: [0.8, 1.1, 1, 1],
                rotateY: [0, 0, 360, 360],
              }}
              transition={{
                duration: 2,
                times: [0, 0.3, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: 'easeInOut',
              }}
              style={{
                filter: 'drop-shadow(0 0 40px rgba(205, 127, 50, 0.6))',
              }}
            />
            
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Box
                display="flex"
                gap={2}
              >
                {[0, 1, 2].map((index) => (
                  <Box
                    key={index}
                    w="10px"
                    h="10px"
                    borderRadius="full"
                    bg="brand.500"
                    as={motion.div}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: 'easeInOut',
                    } as any}
                  />
                ))}
              </Box>
            </MotionBox>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

