/* eslint-disable no-undef */
import Player from './player-factory';

test('player legal move', () => {
  const p1 = Player();
  const enemy = Player();

  enemy.placeShip({ length: 2, coordinates: [1, 1] });

  const result = p1.attackEnemyBoard([1, 1], enemy.receiveEnemyAttack);

  expect(result).toBe(true);
});

test('AI random legal move', () => {
  const enemy = Player();
  const ai = Player();

  const result = ai.randomAttackEnemyBoard(enemy.receiveEnemyAttack);

  expect(result).toBe(true);
});

test('AI sunk the only ship on the board with random moves', () => {
  const enemy = Player();
  const ai = Player();
  let result = false;

  enemy.placeShip({ length: 2, coordinates: [1, 1] });

  while (!result) {
    ai.randomAttackEnemyBoard(enemy.receiveEnemyAttack);

    result = enemy.allShipsHaveBeenSunk();
  }

  expect(result).toBe(true);
});
