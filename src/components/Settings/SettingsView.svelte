<script lang="ts">
  import { RandomAi, GreedyAi } from "../../lib/ai";
  import type { Ai } from "../../lib/ai";

  const aiOptions: Ai[] = [new RandomAi(), new GreedyAi()];

  export let view: string;
  export let name: string;
  export let boardSize: number;
  export let ai: Ai = aiOptions[0];
</script>

<form>
  <label for="name">Your name</label>
  <input type="text" name="name" id="name" bind:value={name} required />

  <label for="size">Board size</label>
  <input
    id="size"
    type="range"
    bind:value={boardSize}
    min="4"
    max="12"
    step="2"
  />
  <p>{boardSize}x{boardSize}</p>

  {#each aiOptions as aiOption}
    <label for={aiOption.name}>{aiOption.name}</label>
    <input
      type="radio"
      bind:group={ai}
      value={aiOption}
      id={aiOption.name}
      checked={ai.name === aiOption.name}
    />
  {/each}
</form>

<button
  on:click={() => {
    view = "game";
  }}>Start game</button
>

<style>
</style>
