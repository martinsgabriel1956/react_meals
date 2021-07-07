import { Container } from './styles';
import ReactLoading from 'react-loading';

export function Loading() {
  return (
    <Container>
      <ReactLoading type={'spin'} color={'#8a2b06'} height={125} width={125} />
    </Container>
  );
};


