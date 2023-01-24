const Player = () => ({
  attackEnemyBoard(coordinates, attackFn) {
    return attackFn(coordinates);
  },
  randomAttackEnemyBoard(attackFn) {
    let attackIsLegal = false;

    while (!attackIsLegal) {
      const coordinates = [];

      coordinates.push(Math.floor(Math.random() * 10));
      coordinates.push(Math.floor(Math.random() * 10));

      attackIsLegal = attackFn(coordinates);
    }

    return attackIsLegal;
  },
});

export default Player;
