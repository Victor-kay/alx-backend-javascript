class HolbertonCourse {
    constructor(name, length, students) {
        this._name = this.validateString(name, 'Name');
        this._length = this.validateNumber(length, 'Length');
        this._students = this.validateStudentsArray(students, 'Students');
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        try {
            this._name = this.validateString(newName, 'Name');
        } catch (error) {
            console.error(error);
        }
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        try {
            this._length = this.validateNumber(newLength, 'Length');
        } catch (error) {
            console.error(error);
        }
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        this._students = this.validateStudentsArray(newStudents, 'Students');
    }

    validateString(value, fieldName) {
        if (typeof value !== 'string') {
            throw new TypeError(`${fieldName} must be a string`);
        }
        return value;
    }

    validateNumber(value, fieldName) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new TypeError(`${fieldName} must be a number`);
        }
        return value;
    }

    validateStudentsArray(value, fieldName) {
        if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
            throw new TypeError(`${fieldName} must be an array of strings`);
        }
        return value;
    }
}

export default HolbertonCourse;
