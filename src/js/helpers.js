function calcularMaxColumnRow({ direction, length, origin }) {
  let [column, row] = origin;
  //   console.log("column", column);
  //   console.log("row", row);
  for (let i = 1; i < length; i++) {
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
  return [column, row];
  //   console.log("column", column);
  //   console.log("row", row);
}

function crearCasilla(row, column, grid) {
  let casilla = `<div class="letter" style="grid-area:${row}/${column}"></div>`;
  grid.innerHTML += casilla;
}

function crearCasillas(
  { direction, length, origin },
  despColumn,
  despRow,
  grid
) {
  let [column, row] = origin;
  row += despRow + 1;
  column += despColumn + 1;

  for (let i = 0; i < length; i++) {
    crearCasilla(row, column, grid);
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

export { calcularMaxColumnRow, crearCasillas };
