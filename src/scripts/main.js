'use strict';

const meinTabl = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const addCol = document.querySelector('.append-column');
const remRow = document.querySelector('.remove-row');
const remCol = document.querySelector('.remove-column');

function creatRowTab() {
  const newRow = document.createElement('tr');
  const cauntCol = meinTabl.rows[0].cells.length;

  for (let i = 0; i < cauntCol; i++) {
    newRow.append(document.createElement('td'));
  }

  return newRow;
}

function creatColTab() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.forEach((row) => {
    row.append(document.createElement('td'));
  });

  return arrRows;
}

function deleteRow() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows[arrRows.length - 1].remove();
}

function deleteCol() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.forEach((row) => {
    row.cells[row.cells.length - 1].remove();
  });
}

addRow.addEventListener('click', (e) => {
  const rowArr = Array.from(meinTabl.rows);

  if (rowArr.length > 9) {
  } else {
    meinTabl.append(creatRowTab());
  }
});

addCol.addEventListener('click', (e) => {
  const arrRows = Array.from(meinTabl.rows);
  const cellsCount = arrRows[0].cells.length;

  if (cellsCount > 9) {
  } else {
    creatColTab();
  }
});

remRow.addEventListener('click', (e) => {
  const arrRows = Array.from(meinTabl.rows);

  if (arrRows.length < 3) {
  } else {
    deleteRow();
  }
});

remCol.addEventListener('click', (e) => {
  const cellsCount = Array.from(meinTabl.rows)[0].cells.length;

  if (cellsCount < 3) {
  } else {
    deleteCol();
  }
});
