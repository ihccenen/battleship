import GameBoard from './game-board-factory';

test('place a ship at empty coordinates', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.placeShip({ length: 2, coordinates: [3, 3] });

  expect(result).toBe(true);
});

test('place a ship at the same coordinates', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });
  const result = gameBoard.placeShip({ length: 2, coordinates: [4, 4] });

  expect(result).toBe(false);
});

test('place ships side by side', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });
  const result = gameBoard.placeShip({ length: 3, coordinates: [4, 1] });

  expect(result).toBe(true);
});

test('place a ship at different coordinates but length makes it to overlap with another ship', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });
  const result = gameBoard.placeShip({ length: 3, coordinates: [4, 2] });

  expect(result).toBe(false);
});

test('place a ship off the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.placeShip({ length: 2, coordinates: [10, 10] });

  expect(result).toBe(false);
});

test('place a ship at last coordinates but the length makes it to go off the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.placeShip({ length: 2, coordinates: [9, 9] });

  expect(result).toBe(false);
});

test('valid shot', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });

  const result = gameBoard.receiveAttack([1, 2]);

  expect(result).toBe(true);
});

test('invalid shot. shot two time at the same node', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });
  gameBoard.receiveAttack([1, 1]);

  const result = gameBoard.receiveAttack([1, 1]);

  expect(result).toBe(false);
});

test('invalid shot. shot outside the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.receiveAttack([10, 10]);

  expect(result).toBe(false);
});

test('sunk one ship but one remains', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 5] });
  gameBoard.placeShip({ length: 3, coordinates: [3, 7] });
  gameBoard.placeShip({ length: 3, coordinates: [4, 3] });
  gameBoard.receiveAttack([1, 5]);
  gameBoard.receiveAttack([1, 6]);

  const result = gameBoard.allShipsHaveBeenSunk();

  expect(result).toBe(false);
});

test('sunk all ships', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 5] });
  gameBoard.placeShip({ length: 3, coordinates: [3, 7] });
  gameBoard.receiveAttack([1, 5]);
  gameBoard.receiveAttack([1, 6]);
  gameBoard.receiveAttack([3, 7]);
  gameBoard.receiveAttack([3, 8]);
  gameBoard.receiveAttack([3, 9]);

  const result = gameBoard.allShipsHaveBeenSunk();

  expect(result).toBe(true);
});
