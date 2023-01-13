import styled from 'styled-components';

export const Container = styled.header`
  display:  flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 2rem 10rem;
  max-width: 1440px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  border: 0;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  gap: 0.25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;


  cursor: pointer;
`;

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  width: 9rem;
  height: 2.375rem;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
`;
