import MealsGrid from "@/Components/Meals/MealsGrid";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import classes from "./mealpage.module.css";
import { Suspense } from "react";


export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meal shared by our vibrient community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const Mealspage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious melas,created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe aand cook it yourself, It is easy and fun
          !
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default Mealspage;
