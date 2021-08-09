import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


export default function AvailableMeals() {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)


  useEffect(() => {
    const fetchMeals = async () => {
      try{
        const response = await fetch('https://foodapp-86e5b-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
        const responseData = await response.json();
        const loadedMeals = [];
        for (const id in responseData) {
          loadedMeals.push({ id, name: responseData[id].name, description: responseData[id].description, price: responseData[id].price})
        }
        setAllMeals(loadedMeals);
        setIsLoading(false)
      }catch{
        setError(true)
      }
    }
    fetchMeals();

  }, []);
  
  if(error){
    return(
      <section className={styles.MealsLoading}>
        <p>Something went wrong...</p>
      </section>
    )
  }

  if(isLoading){
    return(
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  const mealsList = allMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
