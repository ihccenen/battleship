import '../style/style.css';
import Game from './game';

const game = Game();

function render(selector, info, className = '') {
  const boardContainer = document.querySelector(selector);

  if (className === 'ship') {
    const div = document.createElement('div');

    div.classList.add('test');

    const cell = boardContainer.querySelector(`[data-coordinates="${info[0]}"]`);

    cell.appendChild(div);
  }

  for (let i = 0; i < info.length; i += 1) {
    const cell = boardContainer.querySelector(`[data-coordinates="${info[i]}"]`);

    cell.className = `cell ${className}`;
  }
}

function renderSunkShips(selector, info) {
  if (info.length < 1) return;

  const board = document.querySelector(selector);

  for (let i = 0; i < info.length; i += 1) {
    const ship = board.querySelector(`[data-coordinates="${info[i]}"]`);

    ship.className = 'cell sunk';
  }
}

function createCells() {
  const cellArr = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      cell.dataset.coordinates = `${j}, ${i}`;
      cellArr.push(cell);
    }
  }

  return cellArr;
}

function populateGameBoard(selector) {
  const container = document.querySelector(selector);
  const cells = createCells();

  container.replaceChildren(...cells);
}

function addShipDiv({
  coordinates, axis, length, player, callbacks,
} = {}) {
  const board = document.querySelector(`[data-board="${player}"]`);
  const cell = board.querySelector(`[data-coordinates="${coordinates}"]`);
  const ship = document.createElement('div');

  ship.classList.add('ship', 'drag', `length-${length}`, axis);
  ship.dataset.ship = coordinates;
  ship.draggable = true;

  callbacks.forEach(({ type, fn }) => ship.addEventListener(type, fn));

  cell.appendChild(ship);
}

function rotateShip(e) {
  const { coordinates } = e.target.parentElement.dataset;
  const board = e.target.closest('[data-board]');
  const player = board.dataset.board;
  const info = game.rotateShip(coordinates, player);

  if (info === false) return;

  const { length, axis } = info;

  e.target.className = `ship drag length-${length} ${axis}`;
}

function handleDragStart(e) {
  const { ship } = e.target.dataset;
  const shiftX = e.clientX - e.target.getBoundingClientRect().left;
  const shiftY = e.clientY - e.target.getBoundingClientRect().top;

  e.dataTransfer.setData('text/coord', ship);
  e.dataTransfer.setData('text/plain', `${shiftX}, ${shiftY}`);

  return false;
}

function handleDragOver(e) {
  e.preventDefault();

  return false;
}

function handleDrop(e) {
  const board = e.target.closest('[data-board]');
  const coord = e.dataTransfer.getData('text/coord');
  const ship = document.querySelector(`[data-ship="${coord}"]`);
  const [shiftX, shiftY] = e.dataTransfer.getData('text/plain').split(', ');
  const left = e.clientX - shiftX;
  const top = e.clientY - shiftY;

  board.append(ship);

  ship.style.left = `${left + 16}px`;
  ship.style.top = `${top + 16}px`;
  ship.classList.add('drop');

  const { x, y } = ship.getBoundingClientRect();

  const node = document.elementFromPoint(x, y);

  if (node?.dataset?.coordinates == null) {
    const cell = board.querySelector(`[data-coordinates="${coord}"]`);

    ship.style.left = '';
    ship.style.top = '';
    ship.classList.remove('drop');
    cell.append(ship);

    return;
  }

  const { coordinates } = node.dataset;
  const player = board.dataset.board;
  const newShip = game.moveShip(coord, coordinates);

  ship.remove();

  addShipDiv({
    ...newShip,
    player,
    callbacks: [{ type: 'click', fn: rotateShip },
      { type: 'dragstart', fn: handleDragStart }],
  });

  e.preventDefault();
}

function attackBoard(e) {
  const { coordinates } = e.target.dataset;

  if (coordinates == null) return;

  const turn = game.takeTurn(coordinates);

  if (turn === false) return;

  const { player1, player2 } = game.getBoardsInfo();

  render('[data-board="player1"]', player1.hit, 'hit');
  render('[data-board="player1"]', player1.miss, 'miss');
  renderSunkShips('[data-board="player1"]', player1.sunkShips);

  render('[data-board="player2"]', player2.hit, 'hit');
  render('[data-board="player2"]', player2.miss, 'miss');
  renderSunkShips('[data-board="player2"]', player2.sunkShips);

  const winner = game.checkGameEnd();

  if (winner !== false) {
    const player = document.querySelector('[data-player="winner"]');
    const enemyBoard = document.querySelector('[data-board="player2"]');

    player.textContent = winner;
    enemyBoard.removeEventListener('click', attackBoard);
  }
}

function startGame(e) {
  const board = document.querySelector('[data-board="player1"]');
  const { ships } = game.getBoardsInfo().player1;
  const restartBtn = document.querySelector('[data-btn="restart"]');

  e.target.classList.add('hidden');
  restartBtn.classList.remove('hidden');

  ships.forEach(({ coordinates }) => {
    const ship = board.querySelector(`[data-ship="${coordinates}"]`);

    ship.removeEventListener('click', rotateShip);
    ship.removeEventListener('dragstart', handleDragStart);
    ship.draggable = false;
    ship.classList.remove('drag');
  });

  board.removeEventListener('dragover', handleDragOver);
  board.removeEventListener('drop', handleDrop);

  const enemyBoard = document.querySelector('[data-board="player2"]');

  enemyBoard.addEventListener('click', attackBoard);
}

function initialBoard() {
  game.getBoardsInfo().player1.ships.forEach((ship) => {
    addShipDiv({
      ...ship,
      callbacks: [{ type: 'click', fn: rotateShip },
        { type: 'dragstart', fn: handleDragStart }],
      player: 'player1',
    });
  });

  const btn = document.querySelector('[data-btn="start"]');
  const board = document.querySelector('[data-board="player1"]');

  board.addEventListener('dragover', handleDragOver);
  board.addEventListener('drop', handleDrop);
  btn.addEventListener('click', startGame);
}

function restartGame(e) {
  const startBtn = document.querySelector('[data-btn="start"]');

  game.restart();

  const enemyBoard = document.querySelector('[data-board="player2"]');

  enemyBoard.removeEventListener('click', attackBoard);

  populateGameBoard('[data-board="player1"]');
  populateGameBoard('[data-board="player2"]');

  initialBoard();

  e.target.classList.add('hidden');
  startBtn.classList.remove('hidden');
}

const restartBtn = document.querySelector('[data-btn="restart"]');

restartBtn.addEventListener('click', restartGame);

populateGameBoard('[data-board="player1"]');
populateGameBoard('[data-board="player2"]');

initialBoard();
