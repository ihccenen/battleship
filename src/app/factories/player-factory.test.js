/* eslint-disable no-undef */
import GameBoard from './game-board-factory';
import Player from './player-factory';

test('player legal move', () => {
  const p1 = Player();
  const enemyBoard = GameBoard();

  enemyBoard.placeShip({ length: 2, coordinates: [1, 1] });

  const result = p1.attackEnemyBoard([1, 1], enemyBoard.receiveAttack);

  expect(result).toBe('Hit');
});

test('AI random legal move', () => {
  const ai = Player();
  const enemyBoard = GameBoard();

  const result = ai.randomAttackEnemyBoard(enemyBoard.receiveAttack);

  expect(result).toBe(true);
});

test('AI sunk the only ship on the board with random moves', () => {
  const ai = Player();
  const enemyBoard = GameBoard();
  let result = false;

  enemyBoard.placeShip({ length: 2, coordinates: [1, 1] });

  while (!result) {
    ai.randomAttackEnemyBoard(enemyBoard.receiveAttack);

    result = enemyBoard.allShipsHaveBeenSunk();
  }

  expect(result).toBe(true);
});
