import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface PropsImage {
  id: number;
  backImage: boolean;
}

export const PokemonImage = component$(
  ({ id, backImage = false }: PropsImage) => {
    const imageLoader = useSignal<boolean>(false);
    useTask$(({ track }) => {
      // * el track funciona si cambia un props en este caso id y podemos hacer una accion en este caso imageLoader.value = false;
      track(() => id);
      imageLoader.value = false;
    });

    let urlBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    if (backImage) {
      urlBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    }
    return (
      <div class={"flex items-center justify-center w-52 h-52"}>
        {!imageLoader.value && <span>Cargando..</span>}
        <img
          src={urlBack}
          alt="Pokemon default"
          style={"w-52"}
          class={{ hidden: !imageLoader.value }}
          onLoad$={() => {
            // setTimeout(() => {
            imageLoader.value = true;
            // }, 2000);
          }}
        />
      </div>
    );
  }
);
