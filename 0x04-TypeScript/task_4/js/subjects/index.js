"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task_4/js/subjects/index.ts
var Cpp_1 = require("./Cpp");
var Java_1 = require("./Java");
var React_1 = require("./React");
var Subjects;
(function (Subjects) {
    Subjects.cpp = new Cpp_1.Cpp();
    Subjects.java = new Java_1.Java();
    Subjects.react = new React_1.React();
    Subjects.cTeacher = {
        firstName: 'John',
        lastName: 'Doe',
        experienceTeachingC: 10
    };
    console.log('C++');
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    console.log('Java');
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    console.log('React');
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
