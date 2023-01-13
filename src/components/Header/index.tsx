import { MapPin, ShoppingCart } from 'phosphor-react';

import { 
  Container,
  MenuContainer,
  LocationContainer,
  CartButton,
} from './styles';

import logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <img src={logo} />
      <MenuContainer>
        <LocationContainer>
          <MapPin color='#8047F8' weight="fill" size={19} />
          São Paulo, SP
        </LocationContainer>
        <CartButton>
          <ShoppingCart color='#C47F17' weight="fill" size={22}/>
        </CartButton>
      </MenuContainer>
    </Container>
  );
}

export { Header }
