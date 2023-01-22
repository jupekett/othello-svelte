<script lang="ts">
  import { CellStatus } from "../../lib/othello";
  import type { Cell, Board } from "../../lib/othello";

  function createEmptyBoard(size: number): Board {
    const board: Board = [];

    for (let i = 0; i < size; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < size; j++) {
        const square: Cell = {
          position: { i, j },
          status: CellStatus.Empty,
        };
        row.push(square);
      }
      board.push(row);
    }
    return board;
  }

  function createStartingBoard(boardSizeInSquares: number): Board {
    const board = createEmptyBoard(boardSizeInSquares);
    const halfway = Math.floor(board[0].length / 2);
    const indicesForDisks = [halfway - 1, halfway];

    for (let i of indicesForDisks) {
      for (let j of indicesForDisks) {
        let diskType = i === j ? CellStatus.AiDisk : CellStatus.PlayerDisk;
        board[i][j] = {
          position: { i, j },
          status: diskType,
        };
      }
    }
    return board;
  }

  export let boardSize = 8;
  let board = createStartingBoard(boardSize);
  let cellSizePixels = 40;
</script>

<div
  id="board"
  style:grid-template-columns="repeat({boardSize}, {cellSizePixels}px)"
>
  {#each board as row, i}
    {#each row as cell, j}
      <div
        id="i{i}j{j}"
        class="cell {cell.status === CellStatus.LegalMove ? 'legal' : ''}"
        style:height="{cellSizePixels}px"
        style:width="{cellSizePixels}px"
      >
        {#if cell.status === CellStatus.PlayerDisk}
          <div class="disk player" />
        {:else if cell.status === CellStatus.AiDisk}
          <div class="disk ai" />
        {/if}
      </div>
    {/each}
  {/each}
</div>

<style>
  #board {
    display: grid;
  }
  .cell {
    border: 1px solid rgb(173, 255, 126);
    background-color: #43c043;
  }

  .disk {
    margin: auto;
    border-radius: 50px;
    height: 100%;
    width: 100%;
  }

  .player {
    background-color: black;
  }

  .ai {
    border: 1px solid black;
    background-color: white;
  }

  .legal {
    background-color: #57ff57;
    border: 2px dashed white;
  }
</style>
