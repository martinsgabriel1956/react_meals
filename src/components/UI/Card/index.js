import { Container } from './styles';

export function Card({children, ...props}) {
  return (
    <Container>
      {children}
    </Container>
  );
};