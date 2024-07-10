<script>
  export let card;
  export let parentCard;
  export let checkTouch = (card) => {}; 
  $: hide = card.hide
 

  const handleClick = () => { 
    hide = false
    checkTouch(card); 
  }
</script>

<button
  class="w-100 h-28 grid place-content-center rounded text-lg font-bold"
  style="background: {hide ? '#cac500' : parentCard.item}"
  on:click={() => handleClick()}
>
  {#if !hide}
    {parentCard.id}
  {/if}
</button>
