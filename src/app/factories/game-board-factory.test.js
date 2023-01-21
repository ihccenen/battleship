import GameBoard from './game-board-factory';

test('empty coordinates', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.placeShip({ length: 2, coordinates: [3, 3] });

  expect(result).toBe(true);
});

test('same coordinates', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });
  const result = gameBoard.placeShip({ length: 2, coordinates: [4, 4] });

  expect(result).toBe(false);
});

test('side by side', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });
  const result = gameBoard.placeShip({ length: 3, coordinates: [4, 1] });

  expect(result).toBe(true);
});

test('different coordinates but length makes it to overlap with another ship', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });
  const result = gameBoard.placeShip({ length: 3, coordinates: [4, 2] });

  expect(result).toBe(false);
});

test('off the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.placeShip({ length: 2, coordinates: [10, 10] });

  expect(result).toBe(false);
});

test('last coordinates but the length makes it to go off the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.placeShip({ length: 2, coordinates: [9, 9] });

  expect(result).toBe(false);
});
