import { useState } from 'react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function createPhotoFromFilename(filename, idPrefix) {
  const src = `${baseUrl}fotos/${filename}`

  const withoutExt = filename.replace(/\.[^.]+$/, '')
  const lastDashIndex = withoutExt.lastIndexOf('-')

  let rawTitle = withoutExt
  let rawDate = ''

  if (lastDashIndex !== -1) {
    rawTitle = withoutExt.slice(0, lastDashIndex)
    rawDate = withoutExt.slice(lastDashIndex + 1)
  }

  const title = rawTitle.replace(/-/g, ' ').trim()

  const cleanDatePart = rawDate.replace(/\.jpe?g$/i, '')
  const description = cleanDatePart ? cleanDatePart.replace(/\./g, '/') : ''

  return {
    id: `${idPrefix}-${withoutExt}`,
    src,
    title,
    description,
  }
}

function parseDescriptionToDate(description) {
  if (!description) return null

  const parts = description.split('/')
  if (parts.length !== 3) return null

  let [day, month, year] = parts

  if (year.length === 2) {
    year = `20${year}`
  }

  const iso = `${year}-${month}-${day}`
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d
}

const galleryPhotos = [
  {
    id: 'pedido-1',
    src: `${baseUrl}fotos/pedido-namoro-1.jpg.jpeg`,
    
    title: 'Pedido de namoro',
    description: '27/01/2024',
  },
  {
    id: 'pedido-2',
    src: `${baseUrl}fotos/pedido-namoro-2.jpg.jpeg`,
    title: 'Pedido de namoro',
    description: '27/01/2024',
  },
  {
    id: 'pedido-3',
    src: `${baseUrl}fotos/pedido-namoro-3.jpg.jpeg`,
    title: 'Pedido de namoro',
    description: '27/01/2024',
  },
  {
    id: 'buque-1',
    src: `${baseUrl}fotos/buque-cinema-1.jpg.jpeg`,
    title: 'Buquê de cetim e cinema',
    description: '16/06/2024',
  },
  {
    id: 'buque-2',
    src: `${baseUrl}fotos/buque-cinema-2.jpg.jpeg`,
    title: 'Buquê de cetim e cinema',
    description: '16/06/2024',
  },
  {
    id: 'aniversario-1',
    src: `${baseUrl}fotos/aniversario-1.jpg.jpeg`,
    title: 'Meu aniversário',
    description: '10/06/2025',
  },
  createPhotoFromFilename(
    'comemoramos-seu-anivesário-na-sua-casa,-nesse-dia-você-estava-muito-linda-09.12.2023.jpg.jpeg',
    'extra',
  ),
  createPhotoFromFilename('exposição-van-gogh-17.12.2023.jpg.jpeg', 'extra'),
  createPhotoFromFilename(
    'você-linda-na-exposição,-nesse-dia-eu-fui-seu-fotografo-17.12.2023.jpg.jpeg',
    'extra',
  ),
  createPhotoFromFilename(
    'você-por-algum-motivo-ama-essa-foto-que-eu-estou-com-cara-de-doente-31.08.2024.jpg.jpeg',
    'extra',
  ),
  createPhotoFromFilename('inaugurando-meu-celular-novo-com-você-06.09.2025.jpg.jpeg', 'extra'),
  createPhotoFromFilename('mais-uma-foto-sua,-você-é-linda-sempre-03.09.24.jpg.jpeg', 'extra'),
  createPhotoFromFilename('mais-uma-foto-sua-distraida-06.06.23.jpg.jpeg', 'extra'),
  createPhotoFromFilename('sempre-gostei-de-tirar-fotos-suas-23.07.23.jpg.jpeg', 'extra'),
  createPhotoFromFilename('tomando-sorvete-juntos-23.09.23.jpg.jpeg', 'extra'),
  createPhotoFromFilename(
    'trocamos-presentes-e-eu-fiquei-ali-do-seu-lado-enquanto-você-lia-16.05.23.jpg.jpeg',
    'extra',
  ),
]

const sortedGalleryPhotos = [...galleryPhotos].sort((a, b) => {
  const da = parseDescriptionToDate(a.description)
  const db = parseDescriptionToDate(b.description)

  if (!da && !db) return 0
  if (!da) return 1
  if (!db) return -1

  return da.getTime() - db.getTime()
})

const timelineMoments = [
  {
    id: 'momento-1',
    date: '16/05/2023',
    title: 'Presentes e leitura',
    text:
      'Trocamos presentes e eu fiquei do seu lado enquanto você lia, feliz só de ver o brilho nos seus olhos.',
  },
  {
    id: 'momento-2',
    date: '06/06/2023',
    title: 'Você distraída',
    text:
      'Mais uma foto sua distraída, daquelas que eu amo porque mostram você sendo você mesma.',
  },
  {
    id: 'momento-3',
    date: '23/07/2023',
    title: 'Sempre gostei de te fotografar',
    text:
      'Percebi o quanto eu amo registrar cada detalhe seu, como se quisesse guardar você em todos os ângulos.',
  },
  {
    id: 'momento-4',
    date: '23/09/2023',
    title: 'Tomando sorvete juntos',
    text:
      'Um simples sorvete virou mais um daqueles momentos em que tudo fica leve só por estar ao seu lado.',
  },
  {
    id: 'momento-5',
    date: '09/12/2023',
    title: 'Comemorando seu aniversário',
    text:
      'Comemoramos seu aniversário na sua casa e eu só conseguia pensar em como você estava linda naquele dia.',
  },
  {
    id: 'momento-6',
    date: '17/12/2023',
    title: 'Exposição Van Gogh',
    text:
      'Na exposição Van Gogh, entre luzes e cores, eu tive ainda mais certeza de como amo viver momentos novos com você.',
  },
  {
    id: 'momento-7',
    date: '27/01/2024',
    title: 'Pedido de namoro',
    text:
      'O dia em que tudo ganhou um novo sentido e eu tive a certeza de que queria caminhar ao seu lado.',
  },
  {
    id: 'momento-8',
    date: '16/06/2024',
    title: 'Buquê de cetim e cinema',
    text:
      'Entre risos, filmes e um buquê feito com todo carinho, eu percebi ainda mais o quanto te amo.',
  },
  {
    id: 'momento-9',
    date: '31/08/2024',
    title: 'A foto que você ama',
    text:
      'Mesmo eu achando que estou com cara de doente, é uma das suas fotos favoritas — e isso já torna ela especial pra mim.',
  },
  {
    id: 'momento-10',
    date: '03/09/2024',
    title: 'Mais uma foto sua',
    text:
      'Mais uma foto sua pra coleção, porque você consegue ser linda em todos os dias e jeitos possíveis.',
  },
  {
    id: 'momento-11',
    date: '10/06/2025',
    title: 'Seu aniversário',
    text:
      'Celebrar a sua vida é celebrar o maior presente que eu poderia ter recebido: você.',
  },
  {
    id: 'momento-12',
    date: '06/09/2025',
    title: 'Inaugurando a câmera do meu celular novo',
    text:
      'Inaugurar meu o celular novo com você foi ótimo, eu fiquei muito feliz por estar perto de você e aproveitando algo que conquistei.',
  },
]

function App() {
  const [showSurprise, setShowSurprise] = useState(false)

  const handleToggleSurprise = () => {
    setShowSurprise((prev) => !prev)
  }

  return (
    <div className="app-root">
      <div className="confetti-layer confetti-layer--one" aria-hidden="true" />
      <div className="confetti-layer confetti-layer--two" aria-hidden="true" />

      <main className="app-container">
        <header className="hero">
          <p className="hero-eyebrow">Hoje o dia é todo seu</p>
          <h1 className="hero-title">Feliz aniversário, minha pretinha</h1>
          <p className="hero-subtitle">
            Um cantinho feito com carinho só para celebrar a pessoa incrível que você é.
          </p>
        </header>

        <section className="section" aria-labelledby="mensagem-title">
          <h2 id="mensagem-title" className="section-title">
            Uma carta pra você
          </h2>
          <p className="section-text">
            Bom dia meu amor, hoje é um dia muito especial pra você e pra mim também. Eu posso
            encher a boca e falar que eu te vi crescer e estive com você por todos esses anos. Eu
            sou muito grato por ter você na minha vida, eu quero muito que tudo continue de forma
            pacífica, que você seja muito feliz e consiga aproveitar seu dia. Eu tenho muito orgulho
            e fico muito feliz vendo a pessoa que você é, vendo como você cresceu, mudou e ainda
            assim continua sendo uma linda gartoinha cheia de sonhos e vontades. Eu te amo, meu amor!
          </p>
        </section>

        <section className="section" aria-labelledby="galeria-title">
          <h2 id="galeria-title" className="section-title">
            Nossa galeria de momentos
          </h2>
          <p className="section-description">
            Algumas das lembranças que eu mais amo guardar com você. Cada foto aqui carrega um
            pedaço da nossa história.
          </p>
          <div className="gallery-grid">
            {sortedGalleryPhotos.map((photo) => (
              <figure key={photo.id} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img src={photo.src} alt={photo.title} className="gallery-image" />
                </div>
                <figcaption className="gallery-caption">
                  <span className="gallery-caption-title">{photo.title}</span>
                  <span className="gallery-caption-date">{photo.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="section-hint">
            
          </p>
        </section>

        <section className="section" aria-labelledby="timeline-title">
          <h2 id="timeline-title" className="section-title">
            Nossa linha do tempo
          </h2>
          <ol className="timeline" aria-label="Linha do tempo dos nossos momentos">
            {timelineMoments.map((moment) => (
              <li key={moment.id} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <p className="timeline-date">{moment.date}</p>
                  <p className="timeline-title">{moment.title}</p>
                  <p className="timeline-text">{moment.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section--surprise" aria-labelledby="surpresa-title">
          <h2 id="surpresa-title" className="section-title">
            Uma mensagem para você, minha pretinha.
          </h2>
          <p className="section-description">
            Clica no botão abaixo para revelar uma mensagem especial que é só sua.
          </p>
          <button type="button" className="surprise-button" onClick={handleToggleSurprise}>
            {showSurprise ? 'Esconder mensagem' : 'Ver mensagem secreta'}
          </button>

          <div
            className={`surprise-message-wrapper ${
              showSurprise ? 'surprise-message-wrapper--visible' : ''
            }`}
            aria-live="polite"
          >
            {showSurprise && (
              <div className="surprise-message-card">
                <p className="surprise-message-text">
                  Você é o meu lugar favorito no mundo inteiro. Obrigado por dividir a vida, os
                  sonhos e até os dias difíceis comigo. Hoje eu não comemoro só o seu aniversário,
                  eu comemoro o privilégio de poder te amar mais a cada dia. Eu te amo, minha
                  pretinha, e quero estar ao seu lado em todos os próximos capítulos da sua
                  história.
                </p>
              </div>
            )}
          </div>
        </section>

        <footer className="footer">
          <p className="footer-text">
            Feito com muito carinho, paciência e amor, só para você. ❤️
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
