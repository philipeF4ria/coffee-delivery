import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroPage = styled.main`
  margin-top: 5.875rem;
  padding: 0 10rem;

  display: flex;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    color: ${props => props.theme['base-title']};
    line-height: 130%;
  
    max-width: 36.75rem;
  }

  p {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    margin-top: 1rem;
    max-width: 36.75rem;
  }
`;

export const DifferentialsSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 35.438rem;
  margin-top: 4.125rem;
  gap: 2.5rem;

  div {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    p {
      font-size: 1rem;
      margin: auto 0;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.theme['yellow-dark']};
    border-radius: 50%;

    svg {
      color: ${props => props.theme.white};
    }
  }
`;
