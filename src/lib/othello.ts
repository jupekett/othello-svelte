// rules and related calculations

export enum SquareStatus {
  Empty,
  PlayerDisk,
  AiDisk,
  LegalMove,
}

export type Position = {
  x: number;
  y: number;
};

export type Square = {
  position: Position;
  status: SquareStatus;
};

export type Move = {
  position: Position;
  flippables: Square[];
};

export type Board = Square[][];

export type Flippables = Square[];
