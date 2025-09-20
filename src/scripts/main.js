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

  meinTabl.append(newRow);
}

function creatColTab() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.forEach((row) => {
    row.append(document.createElement('td'));
  });
}

function deleteRow() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.at(-1).remove();
}

function deleteCol() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.forEach((row) => {
    row.deleteCell(-1);
  });
}

addRow.addEventListener('click', (e) => {
  creatRowTab();

  const rowCount = Array.from(meinTabl.rows).length;

  if (rowCount > 9) {
    addRow.disabled = true;
  }

  if (rowCount > 2) {
    remRow.disabled = false;
  }
});

addCol.addEventListener('click', (e) => {
  creatColTab();

  const arrRows = Array.from(meinTabl.rows);
  const cellsCount = arrRows[0].cells.length;

  if (cellsCount > 9) {
    addCol.disabled = true;
  }

  if (cellsCount > 2) {
    remCol.disabled = false;
  }
});

remRow.addEventListener('click', (e) => {
  deleteRow();

  const arrRows = Array.from(meinTabl.rows);

  if (arrRows.length < 10) {
    addRow.disabled = false;
  }

  if (arrRows.length < 3) {
    remRow.disabled = true;
  }
});

remCol.addEventListener('click', (e) => {
  deleteCol();

  const cellsCount = Array.from(meinTabl.rows)[0].cells.length;

  if (cellsCount < 3) {
    remCol.disabled = true;
  }

  if (cellsCount < 10) {
    addCol.disabled = false;
  }
});
