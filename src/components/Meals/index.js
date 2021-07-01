import { Container } from './styles';

import { MealsSummary } from './MealsSummary';
import { AvailableMeals } from './AvailableMeals';

export function Meals() {
  return (
    <Container>
      <MealsSummary />
      <AvailableMeals />
    </Container>
  );
};