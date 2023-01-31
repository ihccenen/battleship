import Ship from './ship-factory';

const GameBoard = () => {
  const board = new Map();
  const shipsCoordinates = new Map();
  const missesList = new Set();
  const hitsList = new Set();
  let remainingShips = 0;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      board.set(`${i}, ${j}`);
    }
  }

  return {
    placeShip({ length, coordinates, axis = 'horizontal' } = {}) {
      const j = axis === 'horizontal' ? coordinates[0] : coordinates[1];

      for (let i = j; i < j + length; i += 1) {
        let node = null;
        if (axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
        else node = `${coordinates[0]}, ${i}`;

        if (!board.has(node) || board.get(node) != null) return false;
      }

      const ship = Ship(length);
      shipsCoordinates.set(coordinates.join(', '), { length, coordinates: coordinates.join(', '), axis });
      remainingShips += 1;

      for (let i = j; i < j + length; i += 1) {
        let node = null;
        if (axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
        else node = `${coordinates[0]}, ${i}`;

        board.set(node, ship);
      }

      return true;
    },
    randomPlaceShip() {
      const shipsLength = [5, 4, 3, 3, 2];

      for (let i = 0; i < shipsLength.length; i += 1) {
        let validPlaceShip = false;

        while (!validPlaceShip) {
          const coordinates = [];

          coordinates.push(Math.floor(Math.random() * 10));
          coordinates.push(Math.floor(Math.random() * 10));

          validPlaceShip = this.placeShip({
            length: shipsLength[i],
            coordinates,
          });
        }
      }
    },
    moveShip({ oldCoordinates, newCoordinates }) {
      const ship = shipsCoordinates.get(oldCoordinates.join(', '));

      const j = ship.axis === 'horizontal' ? oldCoordinates[0] : oldCoordinates[1];

      shipsCoordinates.delete(oldCoordinates.join(', '));

      for (let i = j; i < j + ship.length; i += 1) {
        let node = null;
        if (ship.axis === 'horizontal') node = `${i}, ${oldCoordinates[1]}`;
        else node = `${oldCoordinates[0]}, ${i}`;

        board.set(node);
      }

      const valid = this.placeShip({ ...ship, coordinates: newCoordinates });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates: oldCoordinates });

        return ship;
      }

      return shipsCoordinates.get(newCoordinates.join(', '));
    },
    rotateShip(coordinates) {
      const ship = shipsCoordinates.get(coordinates.join(', '));

      const j = ship.axis === 'horizontal' ? coordinates[0] : coordinates[1];

      for (let i = j; i < j + ship.length; i += 1) {
        let node = null;
        if (ship.axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
        else node = `${coordinates[0]}, ${i}`;

        board.set(node);
      }

      const valid = this.placeShip({ ...ship, coordinates, axis: ship.axis === 'horizontal' ? 'vertical' : 'horizontal' });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates });

        return false;
      }

      return shipsCoordinates.get(coordinates.join(', '));
    },
    receiveAttack(coordinates) {
      const coord = coordinates.join(', ');

      if (!board.has(coord)) return 'Invalid shot';

      if (hitsList.has(coord)) return 'Invalid shot';

      if (missesList.has(coord)) return 'Invalid shot';

      const ship = board.get(coord);

      if (ship == null) {
        missesList.add(coord);
        return false;
      }

      ship.hit();
      hitsList.add(coord);

      if (ship.isSunk()) remainingShips -= 1;

      return true;
    },
    allShipsHaveBeenSunk() {
      return remainingShips < 1;
    },
    getBoardInfo() {
      const info = {};

      info.ship = Array.from(shipsCoordinates.values());

      info.miss = Array.from(missesList);
      info.hit = Array.from(hitsList);

      return info;
    },
  };
};

export default GameBoard;
