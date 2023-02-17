const loadMeal=(search) => {
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}
const displayMeals= meals => {
     console.log(meals);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML= ``;
    meals.forEach(meal => {
         console.log(meal);
        const mealdiv= document.createElement('div');
        mealdiv.classList.add('col');
        mealdiv.innerHTML=`
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0,200)  })</p>
                    </div>
                </div>
        `;
        mealContainer.appendChild(mealdiv);

    });
}

const searchFood=( ) => {
    const searchField= document.getElementById('searh-field');
    const searchText= searchField.value;
    loadMeal(searchText);
    searchField.value='';


    // console.log('searching' , searchText);
}


// loadMeal('burger');