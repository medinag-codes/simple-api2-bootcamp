document.querySelector('button').addEventListener('click', getMealPlan)

function getMealPlan(){
    // const timeframe = document.querySelector('.timeframe').value
    const calories = document.querySelector('#calories').value
    const diet = document.querySelector('#diet').value
    const exclusions = document.querySelector('.exclusions').innerText
        
    const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${exclusions}&apiKey=2682bc1884f2454a8c70436c4f38705c`
   
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const breakfastPic = data.meals[0].id
            document.querySelector('#breakfastImg').src =`https://img.spoonacular.com/recipes/${breakfastPic}-312x231.jpg`
            document.querySelector('#breakfastTitle').innerText = data.meals[0].title

            const lunchPic = data.meals[1].id
            document.querySelector('#lunchImg').src =`https://img.spoonacular.com/recipes/${lunchPic}-312x231.jpg`
            document.querySelector('#lunchTitle').innerText = data.meals[1].title

            const dinnerPic = data.meals[2].id
            document.querySelector('#dinnerImg').src =`https://img.spoonacular.com/recipes/${dinnerPic}-312x231.jpg`
            document.querySelector('#dinnerTitle').innerText = data.meals[2].title

            document.querySelector('#calorias').innerText = data.nutrients.calories
            document.querySelector('#protein').innerText = data.nutrients.protein
            document.querySelector('#fat').innerText = data.nutrients.fat
            document.querySelector('#carbohydrates').innerText = data.nutrients.carbohydrates
        
            // $.ajax({
            //     method: 'GET',
            //     url: 'https://api.calorieninjas.com/v1/recipe?query=' + query,
            //     headers: { 'X-Api-Key': 'RcKu3H+c0Apx9DTcsqW5Yw==WHmujClLqMzvmWwf'}
            //     .then(res => res.json())
            //     .then(dataTwo => {
            //         console.log(dataTwo)
            //     })
            //     .catch(err => {
            //         console.log(`error ${err}`)
            //     })

            // })
            // const dinnerRecipe = data.meals[2].title.replace(/"/g, '')
            // const finalDinnerRecipe = dinnerRecipe.replace(/\s+/g, '')

            // console.log(finalDinnerRecipe)
            
            // fetch(`https://platform.fatsecret.com/v2/search/item=${finalDinnerRecipe}`)
            //     .then(res => res.json())
            //     .then(dataTwo => {
            //         console.log(dataTwo)
                    
            //     })
            
            // .catch(err => {
            //     console.log(`error ${err}`)
            // });

        })
        .catch(err => {
            console.log(`error ${err}`)
        
    });


}

// (www.themealdb.com/api/json/v1/1/search.php?s=