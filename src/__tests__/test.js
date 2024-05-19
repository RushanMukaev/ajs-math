import Daemon from "../js/daemon";
import Magician from "../js/magician";

test.each([
	[100, 1, true, 100],
	[100, 2, true, 85],
	[100, 1, false, 100],
	[100, 2, false, 90],
  ])('test', (attack, distance, stoned, expected) => {
	const magician = new Magician('Player', 'Magician');
	magician.attack = attack;
	magician.distance = distance;
	magician.stoned = stoned;
	expect(magician.attack).toBe(expected);
  });

  test.each([
	[100, 1, true, 100],
	[100, 2, true, 85],
	[100, 1, false, 100],
	[100, 2, false, 90],
  ])('test', (attack, distance, stoned, expected) => {
	const daemon = new Daemon('Player', 'Daemon');
		daemon.attack = attack;
		daemon.distance = distance;
		daemon.stoned = stoned;
	expect(daemon.attack).toBe(expected);
  });

 
  test('Magician stoned', () => {
	const magician = new Magician('Player', 'Magician');
    magician.stoned = false;
    expect(magician.stoned).toBeFalsy();
  });
  test('Daemon stoned', () => {
	const daemon = new Daemon('Player', 'Daemon');
    daemon.stoned = false;
    expect(daemon.stoned).toBeFalsy();
  });
  