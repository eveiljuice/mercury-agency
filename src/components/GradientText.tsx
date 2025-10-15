import { Text, TextProps } from '@chakra-ui/react'

interface GradientTextProps extends TextProps {
  children: React.ReactNode
}

export const GradientText = ({ children, ...props }: GradientTextProps) => {
  return (
    <Text
      as="span"
      bgGradient="linear(to-r, brand.700, brand.500)"
      bgClip="text"
      fontWeight="extrabold"
      {...props}
    >
      {children}
    </Text>
  )
}

