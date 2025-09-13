/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    private _teacher: Teacher;

    setTeacher(teacher:Teacher): void {
      // this.teacher = teacher;
      this._teacher = teacher;
    }

    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
