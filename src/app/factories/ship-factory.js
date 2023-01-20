const Ship = (length) => {
  const ship = {
    length,
    hits: 0,
    sunk: false,
  };

  return {
    hit() {
      ship.hits += 1;
    },
    isSunk() {
      ship.sunk = ship.hits === ship.length;
      return ship.sunk;
    },
  };
};

export default Ship;
