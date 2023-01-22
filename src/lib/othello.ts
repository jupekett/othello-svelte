// rules and related calculations

export enum CellStatus {
  Empty,
  PlayerDisk,
  AiDisk,
  LegalMove,
}

export type Position = {
  i: number;
  j: number;
};

export type Cell = {
  position: Position;
  status: CellStatus;
};

export type Move = {
  position: Position;
  flippables: Cell[];
};

export type Board = Cell[][];

export type Flippables = Cell[];
