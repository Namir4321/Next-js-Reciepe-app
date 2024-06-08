import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealDetails = ({ params }) => {
  const Meal = getMeal(params.mealSlug);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={Meal.image} alt={Meal.title} fill />
        </div>
        <div className={classes.headerText}></div>
        <h1>{Meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${Meal.creator_email}`}>{Meal.creator}</a>
        </p>
        <p className={classes.summary}>{Meal.summary}</p>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: Meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;
