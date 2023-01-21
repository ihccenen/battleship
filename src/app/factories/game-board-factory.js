import Ship from './ship-factory';

const GameBoard = () => {
  const board = new Map();

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      board.set(`${i}, ${j}`);
    }
  }

  return {
    placeShip: ({ length, coordinates }) => {
      for (let i = coordinates[1]; i < coordinates[1] + length; i += 1) {
        const node = `${coordinates[0]}, ${i}`;

        if (!board.has(node) || board.get(node) != null) return false;
      }

      const ship = Ship();
      for (let i = coordinates[1]; i < coordinates[1] + length; i += 1) {
        board.set(`${coordinates[0]}, ${i}`, ship);
      }

      return true;
    },
  };
};

export default GameBoard;
