import inquirer from 'inquirer';
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
}
const programmStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap kis se bat kerna pasand kare ge...",
            name: "select",
            choices: ["khud se: Self", "student"],
        });
        if (ans.select === "khud se: Self") {
            console.log("hello me khud se bat ker raha hun");
            console.log("meri tabiyat achi hai.");
        }
        else if (ans.select === "student") {
            const ansStudent = await inquirer.prompt({
                type: "input",
                message: "ap ko kis student se bat kerni hai.",
                name: "student",
            });
            const student = persons.students.find(val => val.name === ansStudent.student);
            if (student) {
                console.log(`Hello, I am ${student.name}, or me thek hun`);
            }
            else {
                const newStudent = new Student(ansStudent.student);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name}, or me thek hun`);
                console.log(persons.students);
            }
        }
    } while (true);
};
// Example usage
const persons = new Person();
programmStart(persons);
