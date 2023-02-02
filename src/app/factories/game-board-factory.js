import Ship from './ship-factory';

const GameBoard = () => {
  const board = new Map();
  const shipsCoordinates = new Map();
  const missesList = new Set();
  const hitsList = new Set();
  let sunkShips = [];
  let remainingShips = 0;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      board.set(`${i}, ${j}`);
    }
  }

  const setCoordinatesInfo = ({ length, coordinates, axis }) => (fn) => {
    const j = axis === 'horizontal' ? coordinates[0] : coordinates[1];

    for (let i = j; i < j + length; i += 1) {
      let node = null;
      if (axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
      else node = `${coordinates[0]}, ${i}`;

      fn(node);
    }
  };

  return {
    placeShip({ length, coordinates, axis = 'horizontal' } = {}) {
      const applyFnToCoordinates = setCoordinatesInfo({ length, coordinates, axis });

      let valid = true;

      applyFnToCoordinates((node) => {
        if (!board.has(node) || board.get(node) != null) valid = false;
      });

      if (valid === false) return false;

      const ship = Ship(length);

      shipsCoordinates.set(coordinates.join(', '), {
        length, coordinates: coordinates.join(', '), axis, list: [],
      });
      remainingShips += 1;

      applyFnToCoordinates((node) => {
        board.set(node, ship);
        shipsCoordinates.get(coordinates.join(', ')).list.push(node);
      });

      return true;
    },
    randomPlaceShip() {
      const shipsLength = [5, 4, 3, 3, 2];
      const axisArr = ['horizontal', 'vertical'];

      for (let i = 0; i < shipsLength.length; i += 1) {
        let validPlaceShip = false;

        while (!validPlaceShip) {
          const coordinates = [];
          const axis = axisArr[Math.floor(Math.random() * axisArr.length)];

          coordinates.push(Math.floor(Math.random() * 10));
          coordinates.push(Math.floor(Math.random() * 10));

          validPlaceShip = this.placeShip({
            length: shipsLength[i],
            coordinates,
            axis,
          });
        }
      }
    },
    moveShip({ oldCoordinates, newCoordinates }) {
      const ship = shipsCoordinates.get(oldCoordinates.join(', '));

      shipsCoordinates.delete(oldCoordinates.join(', '));

      const applyFnToCoordinates = setCoordinatesInfo({ ...ship, coordinates: oldCoordinates });

      applyFnToCoordinates((node) => board.set(node));

      const valid = this.placeShip({ ...ship, coordinates: newCoordinates });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates: oldCoordinates });

        return ship;
      }

      return shipsCoordinates.get(newCoordinates.join(', '));
    },
    rotateShip(coordinates) {
      const ship = shipsCoordinates.get(coordinates.join(', '));
      const applyFnToCoordinates = setCoordinatesInfo({ ...ship, coordinates });

      applyFnToCoordinates((node) => board.set(node));

      const valid = this.placeShip({ ...ship, coordinates, axis: ship.axis === 'horizontal' ? 'vertical' : 'horizontal' });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates });

        return false;
      }

      return shipsCoordinates.get(coordinates.join(', '));
    },
    receiveAttack(coordinates) {
      const coord = coordinates.join(', ');

      if (!board.has(coord)
      || hitsList.has(coord)
      || missesList.has(coord)) {
        return 'Invalid shot';
      }

      const ship = board.get(coord);

      if (ship == null) {
        missesList.add(coord);
        return 'Miss';
      }

      ship.hit();
      hitsList.add(coord);

      if (ship.isSunk()) {
        remainingShips -= 1;
        const headCoordinates = Array.from(shipsCoordinates.keys())
          .filter((key) => shipsCoordinates.get(key).list.includes(coord)).toString();

        sunkShips = sunkShips.concat(shipsCoordinates.get(headCoordinates).list);

        return 'Sunk';
      }

      return 'Hit';
    },
    allShipsHaveBeenSunk() {
      return remainingShips < 1;
    },
    getBoardInfo() {
      const info = {};

      info.ships = Array.from(shipsCoordinates.values());

      info.miss = Array.from(missesList);
      info.hit = Array.from(hitsList);
      info.sunkShips = sunkShips;

      return info;
    },
  };
};

export default GameBoard;
