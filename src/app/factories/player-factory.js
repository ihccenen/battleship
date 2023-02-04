const Player = () => {
  const shots = new Set();
  let adjacentCoordinates = [];

  const addAdjacent = (coordinates, a, b) => {
    const x = coordinates[0] + a;
    const y = coordinates[1] + b;

    if (x > -1 && x < 10 && !shots.has(`${x}, ${y}`)) adjacentCoordinates.push([x, y]);
  };

  return {
    attackEnemyBoard(coordinates, attackFn) {
      return attackFn(coordinates);
    },
    randomAttackEnemyBoard(attackFn) {
      let coordinates = [];
      let attack = 'Invalid shot';

      while (attack === 'Invalid shot') {
        if (adjacentCoordinates.length > 0) {
          [coordinates] = adjacentCoordinates.splice(0, 1);
        } else {
          coordinates[0] = Math.floor(Math.random() * 10);
          coordinates[1] = Math.floor(Math.random() * 10);
        }

        attack = attackFn(coordinates);
      }

      if (attack === 'Sunk') {
        adjacentCoordinates = [];
      } else if (attack === 'Hit') {
        addAdjacent(coordinates, -1, 0);
        addAdjacent(coordinates, 1, 0);
        addAdjacent(coordinates, 0, -1);
        addAdjacent(coordinates, 0, 1);
      }

      if (attack === 'Hit' && adjacentCoordinates.length > 1) {
        adjacentCoordinates = adjacentCoordinates
          .filter((coord) => coord[0] === coordinates[0] || coord[1] === coordinates[1]);
      }

      shots.add(coordinates.join(', '));

      return attack !== 'Invalid shot';
    },
  };
};

export default Player;
