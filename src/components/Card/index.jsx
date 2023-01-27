import { Container } from './styles'
import sofaImg from '../../assets/sofa-img.png'
import sofaGif from '../../assets/sofa-gif.gif'

export function Card() {

  function handleClick(event) {
    event.target.classList.toggle("hide")
  }

  return (
    <Container>
      <div className='product'>
        <button>
          X
        </button>

        <div>
          <img width={450} src={sofaGif} alt="" />
        </div>
      </div>

      <div className='description'>
        <div>
          <span>Código: 42404</span>
          <h1>Sofá Margot II - Rosé</h1>
          <span>R$ 4.000</span>
        </div>

        <button>Adicionar à cesta</button>
      </div>
    </Container>
  )
}

