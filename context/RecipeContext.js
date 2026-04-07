import { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  
  const [receitas, setReceitas] = useState([]);

  const getReceitas = async () => {
    try{
      const resposta = await fetch('https://dummyjson.com/recipes')
      const dadosJson = await resposta.json();
      setReceitas(dadosJson.recipes)
    }catch(e){
      console.log(`Erro: ${e}`)
    }
  }

  useEffect(() => {
    getReceitas();
  }, [])

  return (
    <RecipeContext.Provider
      value={{
        receitas
      }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
