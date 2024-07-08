<script>
  import { onMount } from "svelte";
  import { cards, handleShuffle } from "./lib/cards";

  $: shuffledCards = handleShuffle(cards);

  $: firstTouch = null;
  $: secondTouch = null;
  $: secondTouch, checkTwins();

  const checkTouch = (id) => {
    if (!firstTouch) {
      firstTouch = id;
    } else if (!secondTouch && firstTouch) {
      secondTouch = id;
    }
  };

  const rightTwins = (parentId) => {
    shuffledCards.map((card) => {
      if (card.parentId === parentId) {
        card.checked = true;
      }
    });

    shuffledCards = [...shuffledCards]
  };

  const checkTwins = () => {
    if (secondTouch) {
      if (firstTouch.parentId === secondTouch.parentId) {
        rightTwins(secondTouch.parentId);
        firstTouch = null;
        secondTouch = null;
      } else {
        console.log("coprire coppia", firstTouch, secondTouch);
        firstTouch = null;
        secondTouch = null;
      }
    }
  };

  onMount(() => {
    handleShuffle(cards);
  });
</script>

<div class="bg-blue-700 h-dvh grid place-content-center">
  <div class="grid grid-cols-6 gap-5 p-4 w-screen">
    {#each shuffledCards as card}
      {#if card.checked}
        <div
          class="w-100 h-28 grid place-content-center rounded text-lg font-bold"
        ></div>
      {:else}
        <button
          class="w-100 h-28 grid place-content-center rounded text-lg font-bold"
          style={"background:" + cards[card.parentId - 1].item}
          on:click={() => checkTouch(card)}
        >
          {cards[card.parentId - 1].id}
        </button>
      {/if}
    {/each}
  </div>
</div>

<style>
</style>
