import GameBoard from './game-board-factory';

const Player = () => {
  const board = GameBoard();

  return {
    ...board,
    attackEnemyBoard: (coordinates, attackFn) => attackFn(coordinates),
    randomAttackEnemyBoard: (attackFn) => {
      let attackIsLegal = false;

      while (!attackIsLegal) {
        const coordinates = [];

        coordinates.push(Math.floor(Math.random() * 10));
        coordinates.push(Math.floor(Math.random() * 10));

        attackIsLegal = attackFn(coordinates);
      }

      return attackIsLegal;
    },
    receiveEnemyAttack: (coordinates) => board.receiveAttack(coordinates),
  };
};

export default Player;
