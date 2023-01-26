const Player = () => ({
  attackEnemyBoard(coordinates, attackFn) {
    return attackFn(coordinates);
  },
  randomAttackEnemyBoard(attackFn) {
    let attack = 'Invalid shot';

    while (attack === 'Invalid shot') {
      const coordinates = [];

      coordinates.push(Math.floor(Math.random() * 10));
      coordinates.push(Math.floor(Math.random() * 10));

      attack = attackFn(coordinates);
    }

    return attack !== 'Invalid shot';
  },
});

export default Player;
