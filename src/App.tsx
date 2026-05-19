import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        {/* sections coming soon */}
      </main>
    </ThemeProvider>
  )
}

export default App
