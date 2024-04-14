import { heroes } from "../data/heroes"

export const getHeorebyId = ( id ) => {
  return heroes.find( heroe => heroe.id === id);
}
