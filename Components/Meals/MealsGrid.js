import classes from "./MealsGrid.module.css"
import MealsItem from "./MealsItem"
const MealsGrid = ({meals}) => {
  return <ul className={classes.meals}>
    {meals.map(meal=><li key={meal.id}>
<MealsItem {...meal} />
    </li>)}
</ul>

}

export default MealsGrid