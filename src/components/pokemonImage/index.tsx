import { component$, useSignal } from "@builder.io/qwik";

interface PropsImage {
  id: number;
  backImage: boolean;
}

export const PokemonImage = component$(
  ({ id, backImage = false }: PropsImage) => {
    let urlBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    if (backImage) {
      urlBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    }
    return (
      <>
        <img
          src={urlBack}
          // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png
          alt="Pokemon default"
          class="w-52"
        />
      </>
    );
  }
);
