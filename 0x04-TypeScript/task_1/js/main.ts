export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student_1: Student = {
    firstName : 'Mike',
    lastName : 'Dean',
    age : 23,
    location : 'San Francisco'
}

const student_2: Student = {
    firstName : 'Alfred',
    lastName : 'Bean',
    age : 35,
    location : 'San Francisco'
}

const studentsList = [ student_1, student_2 ];

const tbl = document.createElement('table');
const bdy = document.createElement('tbody');

studentsList.forEach((std) => {
    const rw = document.createElement('tr');
    const fname = document.createElement('td');
    const lc = document.createElement('td');
    fname.textContent = std.firstName;
    lc.textContent = std.location;
    rw.appendChild(fname);
    rw.appendChild(lc);
    bdy.appendChild(rw);
});

tbl.appendChild(bdy);
document.body.appendChild(tbl);
