import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Stacks } from './components/Stacks/Stacks'
import { ProjectsIntro } from './components/ProjectsIntro/ProjectsIntro'
import { ProjectEmbed } from './components/ProjectEmbed/ProjectEmbed'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stacks />
        <ProjectsIntro />
        <ProjectEmbed />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
