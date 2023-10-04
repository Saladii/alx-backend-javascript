/* Task 1 */
export interface Teacher {
    firstName:string,
    lastName:string,
    fullTimeEmployee:boolean,
    yearsOfExperience?:number,
    location:string,
    [propName : string] : any;
}

/* Task 2 */
export interface Directors extends Teacher {
    numberOfReports : number
}

/* Task 3 */
function printTeacher(firstName:string, lastName:string) {
    return `${firstName[0]}. ${lastName}`;
}

/* Task 4 */
export interface StudentClassInterface {
    firstName : string,
    lastName : string,
    workOnHomework() : string,
    displayName() : string
}

export class StudentClass implements StudentClassInterface{
    constructor(public firstName:string, public lastName:string) {}

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return `${this.firstName}`;
    }
}
