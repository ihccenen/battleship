import Ship from './ship-factory';

test('isSunk if 0 hits and length 2', () => {
  const ship = Ship(2);

  expect(ship.isSunk()).toBe(false);
});

test('isSunk if 1 hit and length 2', () => {
  const ship = Ship(2);

  ship.hit();

  expect(ship.isSunk()).toBe(false);
});

test('isSunk if number of hits is the same as length', () => {
  const ship = Ship(2);

  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
