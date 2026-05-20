import { FiExternalLink } from 'react-icons/fi'
import senaiOne from '../../assets/senai1.webp'
import senaiTwo from '../../assets/senai2.webp'
import styles from './ProjectEmbed.module.css'

type Project = {
  id: string
  eyebrow: string
  title: string[]
  description: string
  impact: string[]
  url?: string
  embedAllowed?: boolean
  previewSide?: 'left' | 'right'
  featureCards?: Array<{
    image?: string
    imageAlt?: string
  }>
}

const projects: Project[] = [
  {
    id: 'featured-project',
    eyebrow: 'Projeto publicado',
    title: ['Ideia', 'Space'],
    description:
      'Startup brasileira de educação espacial que leva estudantes da sala de aula ao desenvolvimento de missões reais, conectando STEAM, engenharia, programação, eletrônica e satélites.',
    impact: [
      'Capacita alunos do ensino básico a projetar, construir, testar e preparar satélites reais para lançamento.',
      'Transforma o fascínio pelo espaço em aprendizagem mão na massa, com trabalho em equipe, pensamento crítico e resolução de problemas.',
      'Nascida em Brasília, ajuda a formar uma nova geração brasileira de cientistas, engenheiros e inovadores para o setor espacial.',
    ],
    url: 'https://www.ideiaspace.com.br/en',
    embedAllowed: true,
  },
  {
    id: 'tle-spaceview',
    eyebrow: 'Monitoramento orbital',
    title: ['TLE SPACEVIEW'],
    description:
      'O TLE SpaceView é uma interface para acompanhar satélites em órbita em tempo real, transformando dados orbitais em uma experiência visual clara para análise, ensino e exploração.',
    impact: [
      'Permite visualizar satélites ativos em órbita e consultar informações relevantes de cada objeto monitorado.',
      'Ajuda a identificar possíveis passagens sobre regiões de interesse, aproximando dados espaciais de decisões práticas.',
      'Torna o acompanhamento orbital mais acessível para estudantes, educadores e equipes envolvidas em missões espaciais.',
    ],
    url: 'https://tleideiaspaceview.vercel.app',
    embedAllowed: true,
    previewSide: 'left',
  },
  {
    id: 'space-to-web',
    eyebrow: 'Programação em blocos',
    title: ['PROGRAMMING', 'TO BLOCKS'],
    description:
      'Uma plataforma educacional de programação em blocos que aproxima estudantes da lógica de software embarcado, permitindo criar experiências reais com sensores e eletrônica espacial.',
    impact: [
      'Converte blocos visuais em código compatível com ESP32, reduzindo a barreira de entrada para alunos que estão começando a programar.',
      'Na versão completa, usa Arduino CLI para compilar e enviar códigos para placas ESP32 em atividades práticas.',
      'Permite trabalhar com sensores conectados a um satélite real, transformando programação, eletrônica e dados espaciais em uma experiência de sala de aula.',
    ],
    url: 'https://ideia-spacetoweb.vercel.app/app.html',
    embedAllowed: true,
  },
  {
    id: 'senai-blocks',
    eyebrow: 'Aplicativo desktop',
    title: ['SENAI', 'BLOCKS'],
    description:
      'O SENAI Blocks é uma plataforma Windows desenvolvida em Electron em parceria com a IdeiaSpace, pensada para levar programação embarcada a um nível mais robusto que a versão web.',
    impact: [
      'Permite programar manualmente soluções completas para ESP32, indo da ativação de sensores ao controle de módulos embarcados.',
      'Aproxima alunos de fluxos reais de desenvolvimento, compilação e teste em hardware físico.',
      'Suporta experiências avançadas, como páginas web locais para intercomunicação entre dispositivos e sistemas conectados.',
      'Oferece um ambiente desktop robusto para atividades presenciais, laboratórios e uso contínuo com hardware conectado.',
    ],
    previewSide: 'left',
    featureCards: [
      {
        image: senaiOne,
        imageAlt: 'Interface do SENAI Blocks em ambiente desktop',
      },
      {
        image: senaiTwo,
        imageAlt: 'Tela do SENAI Blocks com recursos para ESP32 e sensores',
      },
    ],
  },
]

export function ProjectEmbed() {
  return (
    <>
      {projects.map(project => (
        <section
          id={project.id}
          className={`${styles.projectEmbed} ${
            project.previewSide === 'left' ? styles.previewLeft : ''
          }`}
          key={project.id}
        >
          <div className={styles.copy}>
            <p className={styles.kicker}>{project.eyebrow}</p>
            <h2
              className={
                project.title.some(line => line.length > 10)
                  ? styles.compactTitle
                  : undefined
              }
            >
              {project.title.map(line => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p>{project.description}</p>
            <ul className={styles.impactList}>
              {project.impact.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className={styles.openLink}
              href={project.url ?? '#projects'}
              target="_blank"
              rel="noreferrer"
            >
              {project.url ? 'Abrir site' : 'Projeto desktop'}
              <FiExternalLink aria-hidden="true" />
            </a>
          </div>

          <div className={styles.previewShell}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
              <p>{project.url?.replace(/^https?:\/\//, '') ?? 'senai-blocks.exe'}</p>
            </div>
            {project.featureCards ? (
              <div className={styles.featurePreview}>
                {project.featureCards.map(card => (
                  <article className={styles.featureCard} key={card.imageAlt}>
                    {card.image && (
                      <img
                        className={styles.featureImage}
                        src={card.image}
                        alt={card.imageAlt ?? ''}
                        loading="lazy"
                      />
                    )}
                  </article>
                ))}
              </div>
            ) : project.embedAllowed && project.url ? (
              <iframe
                className={styles.preview}
                src={project.url}
                title={`Preview do projeto ${project.title.join(' ')}`}
                loading="lazy"
              />
            ) : (
              <a
                className={styles.fallbackPreview}
                href={project.url ?? '#projects'}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${project.title.join(' ')} em nova aba`}
              >
                <p>{project.title.join(' ')}</p>
                <span>Este site bloqueia preview embutido.</span>
                <strong>Abrir projeto</strong>
              </a>
            )}
          </div>
        </section>
      ))}
    </>
  )
}
