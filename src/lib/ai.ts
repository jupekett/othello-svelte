/* rudimentary AI opponent */

import type { Move } from "./othello";

// Ideas
// random: what is says on the tin
// greedy: moves that maximize flipped disks
// defensive: chooses squares that have most sides blocked -> difficult to flip back
// hybrid: some heuristic to combine the two
// Pro: steal logic from actual human players

export interface Ai {
  name: string;
  selectMove(moves: Move[]): Move;
}

// Chooses move randomly
export class RandomAi implements Ai {
  name: string;
  constructor() {
    this.name = "Random";
  }
  selectMove(moves: Move[]): Move {
    const index = Math.random() * moves.length;
    return moves[index];
  }
}

// Chooses move that flips most opponent disks
export class GreedyAi implements Ai {
  name: string;
  constructor() {
    this.name = "Greedy";
  }
  selectMove(moves: Move[]): Move {
    let mostFlips = 0;
    let bestMove = moves[0];

    for (let move of moves) {
      if (mostFlips < move.flippables.length) {
        mostFlips = move.flippables.length;
        bestMove = move;
      }
    }
    return bestMove;
  }
}
