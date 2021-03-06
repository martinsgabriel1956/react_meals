import { useEffect, useState } from 'react'
import { Card } from '../../UI/Card'
import { Loading } from '../../UI/Loading'
import { MealItem } from '../../Meals/MealItem'

import { Container } from './styles'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await fetch(
          `https://react-meals-bf77a-default-rtdb.firebaseio.com/meals.json`
        )

        if (!res.ok) toast.error('Something went wrong')

        const data = await res.json()
        console.log(data)

        const loadedMeals = []

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          })
        }

        setMeals(loadedMeals)
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setHttpError(toast.error(`${e.message}`))
      }
    }
    fetchMeals()
  }, [])

  return (
    <>
      {httpError && <ToastContainer />}
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <Card>
            <ul>
              {meals.map((meal) => (
                <MealItem
                  id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              ))}
            </ul>
          </Card>
        )}
      </Container>
    </>
  )
}
