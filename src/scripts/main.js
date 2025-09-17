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
  meinTabl.append(creatRowTab());
});

addCol.addEventListener('click', (e) => {
  creatColTab();
});

remRow.addEventListener('click', (e) => {
  deleteRow();
});

remCol.addEventListener('click', (e) => {
  deleteCol();
});
