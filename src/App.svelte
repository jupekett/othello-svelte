<script lang="ts">
  import Header from './components/Header.svelte'
  import GameView from "./components/Game/GameView.svelte";
  import SettingsView from "./components/Settings/SettingsView.svelte";

  let view = "settings";
</script>

<main>
  <Header />
  {#if view === "settings"}
    <SettingsView />
  {:else if view === "game"}
    <GameView />
  {/if}
</main>

<style>
</style>
