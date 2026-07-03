import React from 'react'
import {useParams} from "react-router-dom"
import { useFetch, API_URL } from "./useFetch";
import { Clock, Loader, ChevronLeft, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}/lookup.php?i=${id}`);
  const meal = data?.meals?.[0];
  // const ingredients=[];
  // for(let i=1; i<=20; i++){
  //   const ingredient = meal[`strIngredient${i}`]
  //   const measure = meal[`strMeasure${i}`];
  //   if(ingredient && ingredient.trim()){
  //     ingredients.push({
  //       ingredient:ingredient.trim(), 
  //       measure:measure ? measure.trim():""
  //     })
  //   }
  // }
  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Preparing Your Recipe Card...
      </div>
    );
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to={"/"}
          className="text-yellow-400 hover:text-yellow-300 flex items-center mb-6 font-medium transition text-lg group">
          <ChevronLeft className="w-6 h-6 mr-1 transition" />
          Back to Dashboard
        </Link>
        <div className="bg-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl shadow-black/70 border border-gray-800">
          <div className="lg:flex lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-black text-gray-100 mb-6 leading-tight">
                {meal?.strMeal}
              </h1>
              <img src={meal?.strMealThumb} className="w-[400px] h-[400px] rounded-xl shadow-2xl shadow-black/50 object-cover border-4 border-gray-800 ring-2 ring-blue-500/50 mx-5"/>
            </div>
            <div className="lg:w-1/2 bg-gray-800 rounded-xl shadow-inner shadow-black/30 border border-gray-700 pb-3">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center border-b border-gray-700 pb-3 p-3"><Utensils className="w-7 h-7 mr-3 text-blue-500"/>Key Ingredients</h2>
            
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecipeDetailView