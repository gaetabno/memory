<script>
  import { onMount } from "svelte";
  import { cards } from "./lib/cards";

  // creo doppioni della card

  // --

  
  $: cardsToShuffle = [...cards, ...cards];

  const shuffleCards = () => {

    let currentIndex = cardsToShuffle.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cardsToShuffle[currentIndex], cardsToShuffle[randomIndex]] = [
        cardsToShuffle[randomIndex],
        cardsToShuffle[currentIndex],
      ];
    }

    return cardsToShuffle;
  };

  onMount(() => {
    shuffleCards();
  });
</script>

<div class="bg-blue-700">
  <div class="grid grid-cols-6 gap-5">
    {#each cardsToShuffle as card (card.id)}
      <div
        class="card__item grid place-content-center"
        style={"background:" + card.item}
      >
        {card.id}
      </div>
    {/each}
  </div>
</div>

<style>
</style>
