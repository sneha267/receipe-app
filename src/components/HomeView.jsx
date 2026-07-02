//import React from 'react'
import TrendingRecipe from "./TrendingRecipe.jsx";
import RecipeSlider from './RecipeSlider.jsx';
import CategorySelection from './CategorySelection.jsx';
import {API_URL} from "./usefetch.js"
const HomeView = () => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
        <TrendingRecipe
          title="Quick & Easy Meal"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />
        <CategorySelection />
      </main>
    </>
  );
}

export default HomeView