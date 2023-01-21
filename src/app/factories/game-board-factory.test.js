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

test('shot hits a ship', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });

  const result = gameBoard.receiveAttack([1, 2]);

  expect(result).toBe('Shot hits.');
});

test('shot misses', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });

  const result = gameBoard.receiveAttack([1, 3]);

  expect(result).toBe('Shot missed.');
});

test('shot hit two times at the same coordinates', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });
  gameBoard.receiveAttack([1, 1]);

  const result = gameBoard.receiveAttack([1, 1]);

  expect(result).toBe('Shot already recorded: Hit.');
});

test('shot misses two times at the same coordinates', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });
  gameBoard.receiveAttack([1, 3]);

  const result = gameBoard.receiveAttack([1, 3]);

  expect(result).toBe('Shot already recorded: Miss.');
});

test('shot outside the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.receiveAttack([10, 10]);

  expect(result).toBe('Coordinates goes outside the board.');
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
