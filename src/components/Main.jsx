import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import {getRecipeFromMistral} from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [response, setResponse] = React.useState(null);
  const recipeSection = React.useRef(null)
  

  React.useEffect(() => {
    if (response !=="" &&  recipeSection.current !==null) {
      recipeSection.current.scrollIntoView({behavior:"smooth"})
    }
  }, [response])
 
  function IngredientsFormSubmission(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((previngredients) => [...previngredients, newIngredient]);
  }
  async function showRecipe() {
    setResponse(await getRecipeFromMistral(ingredients));
  }
  
  return (
    <main>
      <form className="add-ingredient-form" action={IngredientsFormSubmission}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList ref={recipeSection} showRecipe={showRecipe} ingredientsListFull={ingredients} />
      ) : null}
      {response && <ClaudeRecipe finalrecipe={response}/>}
    </main>
  );
}
