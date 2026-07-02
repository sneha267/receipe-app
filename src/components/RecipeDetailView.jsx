import React from 'react'
import {useParams} from "react-router-dom"
import { useFetch, API_URL } from "./useFetch";
import { Clock, Loader } from "lucide-react";
const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}/lookup.php?i=${id}`);
  const meal = data?.meals[0]?.[0];
  const ingredients=[];
  for(let i=1; i<=20; i++){
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`];
    if(ingredient && ingredient.trim()){
      ingredients.push({
        ingredient:ingredient.trim(), 
        measure:measure ? measure.trim():""
      })
    }
  }
  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Preparing Your Recipe Card...
      </div>
    );
  return <div>{id}</div>;
};

export default RecipeDetailView