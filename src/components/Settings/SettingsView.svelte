<script lang="ts">
  import type { Ai } from "../../lib/ai";

  export let view: string;
  export let name: string;
  export let boardSize: number;
  export let ai: Ai;
  export let aiOptions: Ai[];
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
    <input type="radio" bind:group={ai} value={aiOption} />
  {/each}
</form>

<button
  on:click={() => {
    view = "game";
  }}>Start game</button
>

<style>
</style>
