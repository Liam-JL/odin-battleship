import { Ship } from './ship.js';  // adjust path as needed

describe('Ship', () => {
  test('hit() should return 1 when called once', () => {
    const ship = new Ship(3);
    expect(ship.hit()).toBe(1);
  });

  test('hit() should increment times hit up to length', () => {
    const ship = new Ship(3);
    expect(ship.hit()).toBe(1);
    expect(ship.hit()).toBe(2);
    expect(ship.hit()).toBe(3);
  });

  test('hit() should not increment past length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    // Additional hits should return the length or stay capped
    expect(ship.hit()).toBe(3);
    expect(ship.hit()).toBe(3);
  });

  test('isSunk() returns false if hits are less than length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() returns true when hits equal length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
