import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemonImage";

export default component$(() => {
  // !Dos formas de mantener estado las useSignal solomanejan un valor y useStore maneja un obketo y/o arreglo

  const pokemonId = useSignal<number>(1); // *Solo usar datos primitivos numeros , string , boolean
  const showImage = useSignal<boolean>(true);
  // ! para solo mostrar el valor <span class="text-9xl">{pokemonId}</span>
  // ! para poder cambiar el valor <span class="text-9xl">{pokemonId.value+1}</span>
  // ! para serializar la funcion se pone $( funcion  )
  const changePokemonId = $((value: number) => {
    pokemonId.value = pokemonId.value + value;
  });

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>
      {/* !para obtener el valor del usesignal que es pokemonId siempre se       utiliza el value ejemplo: pokemonId.value */}
      <PokemonImage id={pokemonId.value} backImage={showImage.value} />
      {/* para mutar del usesignal que es pokemonId siempre se utiliza el value   ejemplo: pokemonId.value++ 'ó' pokemonId.value-- */}
      <div class="mt-2">
        <button
          class={"btn btn-primary mr-2"}
          disabled={pokemonId.value < 1 ? true : false}
          onClick$={() => changePokemonId(-1)}
        >
          Anterior
        </button>

        <button
          class=" btn btn-primary mr-2"
          onClick$={() => changePokemonId(+1)}
        >
          Siguiente
        </button>

        <button
          class=" btn btn-primary"
          onClick$={() => (showImage.value = !showImage.value)}
        >
          voltear
        </button>
      </div>
      ´
    </>
  );
});

export const head: DocumentHead = {
  title: "Poke Qwik",
  meta: [
    {
      name: "description",
      content: "Esta es mi primera aplicación con qwik",
    },
  ],
};
