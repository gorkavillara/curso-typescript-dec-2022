import Character from "../models/characters";

export const castCharacter = (data: any): Character => {
  const { name, gender, height, mass, films, homeworld } = data;

  const tempCharacter: Character = { name, gender, films, homeworld };

  const returnCharacter: Character = {
    ...tempCharacter,
    height: Number(height),
    mass: Number(mass),
  };

  return returnCharacter;
};
