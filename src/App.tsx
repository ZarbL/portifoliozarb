import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  )
}

export default App
