import { 
  ShoppingCart, 
  Package, 
  Timer,
  Coffee,
} from 'phosphor-react';

import { Header } from '../../components/Header';
import { Container, DifferentialsSection, HeroPage } from './styles';

import heroImage from '../../assets/hero-image.png';

function Home() {
  return (
    <Container>
      <Header />
      <HeroPage>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <DifferentialsSection>
            <div>
              <span>
                <ShoppingCart weight='fill' size={16}/>
              </span>
              <p>Compra simpels e segura</p>
            </div>
            <div>
              <span>
                <Package weight='fill' size={16}/>
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <span>
                <Timer weight='fill' size={16}/>
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <span>
                <Coffee weight='fill' size={16}/>
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </DifferentialsSection>
        </div>
        <img src={heroImage} />
      </HeroPage>
    </Container>
  );
}

export { Home }
