<script lang="ts">
  import Header from "./components/Header.svelte";
  import GameView from "./components/Game/GameView.svelte";
  import SettingsView from "./components/Settings/SettingsView.svelte";

  import type { Ai } from "./lib/ai";

  let view = "settings";
  let name = "your name here";
  let boardSize = 8;
  let ai: Ai;
</script>

<main>
  <Header />
  {#if view === "settings"}
    <SettingsView bind:view bind:name bind:boardSize bind:ai />
  {:else if view === "game"}
    <GameView bind:view {name} {boardSize} {ai} />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
