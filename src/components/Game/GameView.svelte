<script lang="ts">
  import type { Ai } from "../../lib/ai";

  import InfoPanel from "./InfoPanel.svelte";
  import Board from "./Board.svelte";

  export let view: string;
  export let name: string;
  export let boardSize: number;
  export let ai: Ai;
</script>

<InfoPanel {name} {boardSize} {ai} />
<Board />

<button
  on:click={() => {
    view = "settings";
  }}>Settings</button
>

<style>
</style>
