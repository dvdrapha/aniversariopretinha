import { useState } from 'react'
import './App.css'

const galleryPhotos = [
  {
    id: 'pedido-1',
    src: '/fotos/pedido-namoro-1.jpg.jpeg',
    title: 'Pedido de namoro',
    description: '27/01/2024',
  },
  {
    id: 'pedido-2',
    src: '/fotos/pedido-namoro-2.jpg.jpeg',
    title: 'Pedido de namoro',
    description: '27/01/2024',
  },
  {
    id: 'pedido-3',
    src: '/fotos/pedido-namoro-3.jpg.jpeg',
    title: 'Pedido de namoro',
    description: '27/01/2024',
  },
  {
    id: 'buque-1',
    src: '/fotos/buque-cinema-1.jpg.jpeg',
    title: 'Buquê de cetim e cinema',
    description: '16/06/2024',
  },
  {
    id: 'buque-2',
    src: '/fotos/buque-cinema-2.jpg.jpeg',
    title: 'Buquê de cetim e cinema',
    description: '16/06/2024',
  },
  {
    id: 'aniversario-1',
    src: '/fotos/aniversario-1.jpg.jpeg',
    title: 'Seu aniversário',
    description: '10/06/2025',
  },
]

const timelineMoments = [
  {
    id: 'momento-1',
    date: '27/01/2024',
    title: 'Pedido de namoro',
    text:
      'O dia em que tudo ganhou um novo sentido e eu tive a certeza de que queria caminhar ao seu lado.',
  },
  {
    id: 'momento-2',
    date: '16/06/2024',
    title: 'Buquê de cetim e cinema',
    text:
      'Entre risos, filmes e um buquê feito com todo carinho, eu percebi ainda mais o quanto te amo.',
  },
  {
    id: 'momento-3',
    date: '10/06/2025',
    title: 'Seu aniversário',
    text:
      'Celebrar a sua vida é celebrar o maior presente que eu poderia ter recebido: você.',
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
            {galleryPhotos.map((photo) => (
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
            (Você pode rolar a tela para ver todas as fotos. Depois é só trocar pelas nossas
            favoritas.)
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
            Um segredinho só seu
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
