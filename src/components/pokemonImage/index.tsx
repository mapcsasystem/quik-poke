import { component$ } from "@builder.io/qwik";

interface PropsImage {
  id: number;
}

export const PokemonImage = component$(({ id }: PropsImage) => {
  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon default"
        class="w-52"
      />
    </>
  );
});
