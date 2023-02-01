/* eslint-disable no-undef */
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
  const result = gameBoard.placeShip({ length: 3, coordinates: [2, 4] });

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

  const result = gameBoard.receiveAttack([2, 1]);

  expect(result).toBe(true);
});

test('invalid shot. shot two time at the same node', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 1] });
  gameBoard.receiveAttack([1, 1]);

  const result = gameBoard.receiveAttack([1, 1]);

  expect(result).toBe('Invalid shot');
});

test('invalid shot. shot outside the board', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.receiveAttack([10, 10]);

  expect(result).toBe('Invalid shot');
});

test('sunk all ships', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [1, 5] });
  gameBoard.placeShip({ length: 3, coordinates: [3, 7] });
  gameBoard.receiveAttack([1, 5]);
  gameBoard.receiveAttack([2, 5]);
  gameBoard.receiveAttack([3, 7]);
  gameBoard.receiveAttack([4, 7]);
  gameBoard.receiveAttack([5, 7]);

  const result = gameBoard.allShipsHaveBeenSunk();

  expect(result).toBe(true);
});

test('board info', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [0, 0], axis: 'horizontal' });
  gameBoard.receiveAttack([0, 0]);
  gameBoard.receiveAttack([1, 0]);
  gameBoard.receiveAttack([0, 3]);

  const info = gameBoard.getBoardInfo();

  expect(info).toStrictEqual({
    ships: [{
      length: 2,
      coordinates: '0, 0',
      axis: 'horizontal',
    }],
    miss: ['0, 3'],
    hit: ['0, 0', '1, 0'],
  });
});

test('rotate ship', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [0, 0], axis: 'horizontal' });
  gameBoard.placeShip({ length: 2, coordinates: [3, 3], axis: 'vertical' });
  gameBoard.rotateShip([0, 0]);
  gameBoard.rotateShip([3, 3]);

  const info = gameBoard.getBoardInfo();
  const correctInfo = [
    {
      length: 2,
      coordinates: '0, 0',
      axis: 'vertical',
    },
    {
      length: 2,
      coordinates: '3, 3',
      axis: 'horizontal',
    }];

  expect(info.ships).toStrictEqual(correctInfo);
});

test('move ship', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [0, 0] });
  const result = gameBoard.moveShip({ oldCoordinates: [0, 0], newCoordinates: [3, 3] });

  expect(result).toStrictEqual({ length: 2, coordinates: '3, 3', axis: 'horizontal' });
});

test('move ship to an invalid coordinates', () => {
  const gameBoard = GameBoard();

  gameBoard.placeShip({ length: 2, coordinates: [0, 0] });
  gameBoard.placeShip({ length: 2, coordinates: [4, 4] });

  const result = gameBoard.moveShip({ oldCoordinates: [0, 0], newCoordinates: [4, 4] });

  expect(result).toStrictEqual({ length: 2, coordinates: '0, 0', axis: 'horizontal' });
});
