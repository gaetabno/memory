<script>
  export let card;
  export let parentCard;
  export let checkTouch = (card) => {};
  export let isFreeze;
  $: hide = card.hide;

  const handleClick = (e) => {
    if (!isFreeze) {
      hide = false;
      checkTouch(card);
    }
  };
</script>

<button
  class="js-card w-100 h-48 grid place-content-center rounded text-lg font-bold"
  style="background: {hide ? '#cac500' : parentCard.item}"
  on:click={(e) => handleClick(e)}
  class:cursor-default={isFreeze}
>
  {#if !hide}
    {parentCard.id}
  {/if}
</button>
