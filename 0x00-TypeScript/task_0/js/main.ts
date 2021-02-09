interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = { firstName: 'Bruce', lastName: 'Patrick', age: 33, location: 'New York' };
const student2 = { firstName: 'Alexa', lastName: 'Robertson', age: 45, location: 'LA' };
const studentsList: Array<Student> = [student1, student2];

/* Vanilla JS */
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

const table: HTMLTableElement = document.createElement('table');
body.appendChild(table);

const thead: HTMLTableSectionElement = document.createElement('thead');
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody)

const tr: HTMLTableRowElement = document.createElement('tr');
thead.appendChild(tr);

const th1: HTMLTableCellElement = document.createElement('th');
th1.innerHTML = 'firstName';
tr.appendChild(th1);

const th2: HTMLTableCellElement = document.createElement('th');
th2.innerHTML = 'location';
tr.appendChild(th2);

studentsList.forEach(element => {
  const trTb: HTMLTableRowElement = document.createElement('tr');
  tbody.appendChild(trTb);

  let td: HTMLTableCellElement = document.createElement('td');
  td.innerHTML = element.firstName;
  trTb.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = element.location;
  trTb.appendChild(td);
});
