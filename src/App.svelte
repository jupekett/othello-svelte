<script lang="ts">
  import { RandomAi, GreedyAi } from "./lib/ai";

  import Header from "./components/Header.svelte";
  import GameView from "./components/Game/GameView.svelte";
  import SettingsView from "./components/Settings/SettingsView.svelte";

  let view = "settings";
  let name = "your name here";
  let boardSize = 8;
  let aiOptions = [new RandomAi(), new GreedyAi()];
  let ai = aiOptions[0];
</script>

<main>
  <Header />
  {#if view === "settings"}
    <SettingsView bind:view bind:name bind:boardSize bind:ai {aiOptions} />
  {:else if view === "game"}
    <GameView bind:view {name} {boardSize} {ai} />
  {/if}
</main>

<style>
</style>
