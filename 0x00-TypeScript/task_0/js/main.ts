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
const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tbody = document.createElement('tbody');
table.appendChild(tbody)

const tr = document.createElement('tr');
thead.appendChild(tr);

const thFields = ['firstName', 'location'];
thFields.forEach(element => {
  const th = document.createElement('th');
  th.innerHTML = element;
  tr.appendChild(th);
});

studentsList.forEach(element => {
  const trTb = document.createElement('tr');
  tbody.appendChild(trTb);

  let td = document.createElement('td');
  td.innerHTML = element.firstName;
  trTb.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = element.location;
  trTb.appendChild(td);
});
