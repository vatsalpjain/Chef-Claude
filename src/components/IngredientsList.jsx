export default function IngredientsList(props) {
 let ingredientsList = props.ingredientsListFull.map((item) => <li key={item}>{item}</li>);
    
  return (
    <section>
      <h2>Ingredients on Hand:</h2>
      <ul className="ingredients-list">{ingredientsList}</ul>
      {props.ingredientsListFull.length > 3 ? (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for your recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.showRecipe}>Get a recipe!</button>
        </div>
      ) : null}
    </section>
  );
}
