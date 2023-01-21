<script lang="ts">
  import type { Ai } from "../../lib/ai";

  export let name: string;
  export let boardSize: number;
  export let ai: Ai;
</script>

<h2>info panel</h2>
<p>name: {name}</p>
<p>board size: {boardSize}x{boardSize}</p>
<p>ai type: {ai.name}</p>

<style>
</style>
