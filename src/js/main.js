import "../styles/styles.css";
import "../lib/fontawesome";
import { Game } from "../lib/Game";
import center from "../lib/center";
import { calcularMaxColumnRow, crearCasillas } from "./helpers";

function init() {
  const grid = document.getElementById("grid");
  const id = null; //genero el juego aleatoriamente

  const game = new Game(id);
  const wordPositions = game.wordPositions;
  console.log(wordPositions);

  let maxColumn = 0;
  let maxRow = 0;

  for (const wordPosition of wordPositions) {
    const [column, row] = calcularMaxColumnRow(wordPosition);
    if (column > maxColumn) {
      maxColumn = column;
    }
    if (row > maxRow) {
      maxRow = row;
    }
  }
  const [despColumn, despRow] = center(maxColumn, maxRow, 10, 10);

  for (const wordPosition of wordPositions) {
    crearCasillas(wordPosition, despColumn, despRow, grid);
  }
}
document.addEventListener("DOMContentLoaded", init);
