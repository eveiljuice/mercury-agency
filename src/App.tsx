import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Box>
        <Navigation />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </Box>
    </>
  )
}

export default App

