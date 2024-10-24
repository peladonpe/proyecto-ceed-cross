import "../styles/styles.css";
import "../lib/fontawesome";
import { Game } from "../lib/Game";
import center from "../lib/center";

const id = 3;

const game = new Game(id);
const wordPositions = game.wordPositions;
let maxColumn = 0;
let maxRow = 0;
for (const wordPosition of wordPositions) {
  const { origin } = wordPosition;
  const [column, row] = origin;
  if (column > maxColumn) {
    maxColumn = column;
  }
  if (row > maxRow) {
    maxRow = row;
  }
}

const [despColumn, despRow] = center(maxColumn, maxRow, 10, 10);

function init() {
  const grid = document.getElementById("grid");

  function crearCasilla(row, column) {
    let casilla = `<div class="letter" style="grid-area:${row}/${column}"></div>`;
    grid.innerHTML += casilla;
  }
  function crearCasillas({ direction, length, origin }) {
    let [column, row] = origin;
    row += despRow + 1;
    column += despColumn + 1;

    for (let i = 0; i < length; i++) {
      crearCasilla(row, column);
      switch (direction) {
        case "horizontal":
          column++;
          break;
        case "vertical":
          row++;
          break;
        default:
          console.error("Dirección no contemplada");
          break;
      }
    }
  }

  for (const wordPosition of wordPositions) {
    crearCasillas(wordPosition);
  }
}
document.addEventListener("DOMContentLoaded", init);
