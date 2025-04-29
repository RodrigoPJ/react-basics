export const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export const winningCombinations = [
  [
    { col: 0, row: 0 },
    { col: 0, row: 1 },
    { col: 0, row: 2 },
  ],
  [
    { col: 1, row: 0 },
    { col: 1, row: 1 },
    { col: 1, row: 2 },
  ],
  [
    { col: 2, row: 0 },
    { col: 2, row: 1 },
    { col: 2, row: 2 },
  ],
  [
    { col: 0, row: 0 },
    { col: 1, row: 0 },
    { col: 2, row: 0 },
  ],
  [
    { col: 0, row: 1 },
    { col: 1, row: 1 },
    { col: 2, row: 1 },
  ],
  [
    { col: 0, row: 2 },
    { col: 1, row: 2 },
    { col: 2, row: 2 },
  ],
  [
    { col: 0, row: 0 },
    { col: 1, row: 1 },
    { col: 2, row: 2 },
  ],
  [
    { col: 0, row: 2 },
    { col: 1, row: 1 },
    { col: 2, row: 0 },
  ],
]

export function isWinner(board) {
  for (let index = 0; index < winningCombinations.length; index++) {
    const [a, b, c] = winningCombinations[index];
    const firstValue = board[a.col][a.row];
    const secondValue = board[b.col][b.row];
    const thirdValue = board[c.col][c.row];
    if (
      firstValue &&
      firstValue === secondValue &&
      firstValue === thirdValue
    ) {
      return(firstValue);
    }
  }
}