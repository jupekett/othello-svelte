<script lang="ts">
  import type { Ai } from "../../lib/ai";

  import InfoPanel from "./InfoPanel.svelte";
  import Board from "./Board.svelte";

  export let view: string;
  export let name: string;
  export let boardSize: number;
  export let ai: Ai;

  let playerScore = 0;
  let aiScore = 0;
  let emptyCells: number;
</script>

<InfoPanel {name} {boardSize} {ai} />
<Board {boardSize} />

<button
  on:click={() => {
    view = "settings";
  }}>Settings</button
>

<style>
</style>
