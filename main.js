// function getRecipesEfrain() {
//     fetch('https://api.spoonacular.com/recipes/search?apiKey=dc8e41c1201340a2859d97bdd5470f01&includeNutrition=true', {
//     method: 'GET'
//   })
//   .then((res) => res.json())
//   .then(function(foods) {
//     // console.log(foods.results[0].title)
//   foods.results.forEach(function(result) {
//     // console.log("Efrain", result.title);
//   });
//     return foods;
//   })
// }
// getRecipesEfrain();

function getRecipeTitle(){
    fetch('https://api.spoonacular.com/recipes/search?apiKey=dc8e41c1201340a2859d97bdd5470f01&includeNutrition=true', {
    method: 'GET'
  })
  .then((res) => res.json())
  .then(function(foods) {
  foods.results.forEach(function(result) {

    // Start of Column
    // creates column
    let recipeID = result.id;
    var recipeIDCol = document.createElement('div');
    recipeIDCol.className = "col-md-4 id-col mt-5 mb-5";

    // creates heading element
    let recipeTitle = result.title;
    var recipeHeading = document.createElement('h3');
    recipeHeading.className = "recipe-title";
    recipeHeading.innerHTML = recipeTitle;
    // end of heading element

    // start of servings element
    let servingsTitle = result.servings;
    var servingsTitleEl = document.createElement('div');
    servingsTitleEl.innerHTML = "Servings: " + servingsTitle;
    // end of servings element

    // start of readyInMinutes
    let readyMinutes = result.readyInMinutes;
    var readyMinutesEl = document.createElement('div');
    readyMinutesEl.className = "";
    readyMinutesEl.innerHTML = "Ready in Minutes: " + readyMinutes;
    // end of readyInMinutes

    // Start of SourceURL
    let sourceURL = result.sourceUrl;
    var sourceURLEl = document.createElement('a');
    sourceURLEl.className = "btn btn-primary text-white mt-4";
    sourceURLEl.href = sourceURL;
    var sourceURLElAtt = document.createAttribute('target');
    sourceURLElAtt.value = "_blank";
    sourceURLEl.setAttributeNode(sourceURLElAtt);
    sourceURLEl.innerHTML = "Read Recipe";
    // End of SourceURL

    // let recipeRow = document.querySelector('#recipeRow');
    // let RecipeIDCols = recipeRow.append(recipeIDCol);
    // return RecipeIDCols;
    // RecipeIDCols.append(recipeHeading);
    // recipeRow.append(recipeHeading);
    document.querySelector('#recipeRow').appendChild(recipeIDCol).append(recipeHeading);
    document.querySelector('#recipeRow').appendChild(recipeIDCol).append(servingsTitleEl);
    document.querySelector('#recipeRow').appendChild(recipeIDCol).append(readyMinutesEl);
    document.querySelector('#recipeRow').appendChild(recipeIDCol).append(sourceURLEl);
    // End of Column
  });
    return foods;
  })
}
getRecipeTitle();