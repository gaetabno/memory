<script>
  import Card from "./components/Card.svelte";
  import { onMount } from "svelte";
  import { cards, handleShuffle } from "./lib/cards";

  $: shuffledCards = handleShuffle(cards);

  $: firstTouch = null;
  $: secondTouch = null;
  $: secondTouch, checkTwins();

  let overlay = false;

  $: console.log(secondTouch);

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

    shuffledCards = [...shuffledCards];
  };

  const wrongTwins = () => {
    shuffledCards.map((card) => (card.hide = true));
    shuffledCards = [...shuffledCards];
  };

  const checkTwins = () => {
    if (secondTouch) {
      if (firstTouch.parentId === secondTouch.parentId) {
        setTimeout(() => {
          rightTwins(secondTouch.parentId);
          firstTouch = null;
          secondTouch = null;
        }, 500);
      } else {
        setTimeout(() => {
          wrongTwins();
          firstTouch = null;
          secondTouch = null;
        }, 1500);
      }
    }

    overlay = true;
  };

  onMount(() => {
    handleShuffle(cards);
  });
</script>

<div class="bg-blue-700 h-dvh grid place-content-center relative">
  <div class="grid grid-cols-4 gap-5 p-4 w-screen max-w-screen-md">
    {#each shuffledCards as card}
      {#if card.checked}
        <div
          class="w-100 h-28 grid place-content-center rounded text-lg font-bold"
        ></div>
      {:else}
        <Card {card} parentCard={cards[card.parentId - 1]} {checkTouch} />{/if}
    {/each}
  </div>
  <div
    class="c-grid--overlay absolute w-full h-full left-0 top-0"
    class:hidden={secondTouch === null}
  ></div>
</div>
