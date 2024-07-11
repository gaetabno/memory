<script>
  import Card from "./components/Card.svelte";
  import { cards, handleShuffle } from "./lib/cards";

  $: shuffledCards = handleShuffle([...cards]);

  $: firstTouch = null;
  $: secondTouch = null;
  $: secondTouch, checkTwins();
  $: timer = 60;
  $: timer, endGame();

  let overlay = false;
  let newGame = false;
  let textInfo = "Click the button to start the game.";
 
  const startGame = () => { 
    shuffledCards = shuffledCards.map(card => card.checked = false)
    shuffledCards = handleShuffle([...cards])
    newGame = true;
    timer = 60;
    setInterval(() => {
      if (timer >= 0) timer--;
    }, 1000);
  };

  const endGame = () => {
    if (timer === 0) {
      textInfo = "Game over.";
      newGame = false;
      
    }
  };

  const checkTouch = (id) => {
    if (!firstTouch) {
      firstTouch = id;
    } else if (!secondTouch && firstTouch) {
      if (firstTouch !== id) secondTouch = id;
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
        }, 1000);
      }
    }
    if (shuffledCards.every((e) => e.checked)) {
      textInfo = "You Win.";
      shuffledCards = handleShuffle([...cards])
      shuffledCards = [...shuffledCards]
      newGame = false;
    }

    overlay = true;
  };
 
</script>

<div class="bg-blue-700 h-dvh grid place-content-center relative gap-5">
  {#if newGame}
    <div
      class="bg-neutral rounded-box text-neutral-content flex p-2 justify-center w-48 mx-auto"
    >
      <span class="countdown font-mono text-5xl">
        {timer}
      </span>
    </div>
    <div class="grid grid-cols-4 gap-5 p-4 w-screen max-w-screen-md">
      {#each shuffledCards as card}
        {#if card.checked}
          <div
            class="w-100 h-28 grid place-content-center rounded text-lg font-bold"
          ></div>
        {:else}
          <Card
            {card}
            parentCard={cards[card.parentId - 1]}
            {checkTouch}
          />{/if}
      {/each}
    </div>
    <div
      class="c-grid--overlay absolute w-full h-full left-0 top-0"
      class:hidden={secondTouch === null}
    ></div>
  {:else}
    <div
      role="alert"
      class="alert flex justify-center"
      class:alert-success={textInfo === "You Win."}
      class:alert-error={textInfo === "Game over."}
    >
      {textInfo}
    </div>
    <button class="btn btn-info" on:click={() => startGame()}>New Game</button
    >
  {/if}
</div>
