import GameBoard from './factories/game-board-factory';
import Player from './factories/player-factory';
import parseIntStr from './parseIntStr';

const Game = () => {
  let player1 = Player();
  let player2 = Player();
  let player1Board = GameBoard();
  let player2Board = GameBoard();
  let currPlayer = player1;
  let currEnemyBoard = player2Board;
  const player2AutoPlay = true;

  player1Board.randomPlaceShip();
  player2Board.randomPlaceShip();

  return {
    checkGameEnd() {
      if (player1Board.allShipsHaveBeenSunk()) return 'player2';
      if (player2Board.allShipsHaveBeenSunk()) return 'player1';

      return false;
    },
    restart() {
      player1 = Player();
      player2 = Player();

      player1Board = GameBoard();
      player2Board = GameBoard();

      player1Board.randomPlaceShip();
      player2Board.randomPlaceShip();

      currPlayer = player1;
      currEnemyBoard = player2Board;
    },
    swapTurn() {
      if (currPlayer === player1) {
        currPlayer = player2;
        currEnemyBoard = player1Board;
      } else {
        currPlayer = player1;
        currEnemyBoard = player2Board;
      }
    },
    getBoardsInfo() {
      return {
        player1: player1Board.getBoardInfo(),
        player2: player2Board.getBoardInfo(),
      };
    },
    autoTurn() {
      if (this.checkGameEnd() !== false) return;

      currPlayer.randomAttackEnemyBoard(currEnemyBoard.receiveAttack);
      this.swapTurn();
    },
    takeTurn(coordinates) {
      const arr = coordinates.split(', ');
      const attack = currPlayer.attackEnemyBoard(arr, currEnemyBoard.receiveAttack);

      if (attack === 'Invalid shot') return false;

      this.swapTurn();

      if (player2AutoPlay) this.autoTurn();

      return attack;
    },
    moveShip(oldCoordinates, newCoordinates) {
      const info = {
        oldCoordinates: parseIntStr(oldCoordinates),
        newCoordinates: parseIntStr(newCoordinates),
      };

      if (currPlayer === player1) {
        return player1Board.moveShip(info);
      }

      return player2Board.moveShip(info);
    },
    rotateShip(coordinates, player) {
      if (player === 'player1') {
        return player1Board.rotateShip(parseIntStr(coordinates, 10));
      }

      return player2Board.rotateShip(parseIntStr(coordinates, 10));
    },
  };
};

export default Game;
