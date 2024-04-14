import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  // Corrige la cadena: primero quita espacios y luego convierte a minúsculas
  name = name.trim().toLocaleLowerCase();

  // Si no hay nombre proporcionado, retorna un arreglo vacío
  if (name.length === 0) return [];

  // Filtra los héroes cuyo nombre incluya la cadena buscada
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
