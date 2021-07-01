import { Container } from './styles';

import { Input } from '../../../UI/Input';

export function MealItemForm(props) {
  return (
    <Container>
      <Input label="Amount" input={{
        id: `amount_${props.id}`,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
    </Container>
  );
};