/* Task 5 */
interface DirectorInterface {
    workFromHome(): string;

    getCoffeeBreak(): string;

    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;

    getCoffeeBreak(): string;

    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    constructor() {
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    workFromHome(): string {
        return 'Working from home';
    }

}

class Teacher implements TeacherInterface {
    constructor() {
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workFromHome(): string {
        return 'Cannot work from home';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

/* Task 6 */
function isDirector(employee: Teacher | Director) {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return (employee instanceof Director) ? employee.workDirectorTasks() : '';
    } else if (!isDirector(employee)) {
        return (employee instanceof Teacher) ? employee.workTeacherTasks() : '';
    }
}

/* Task 7 */
type Subjects = 'Math' | 'History';

function teachClass(todayClass : string) : string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

