// 01. Array Extension
(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        const newArr = [];

        for (let i = n; i < this.length; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    }

    Array.prototype.take = function(n) {
        const newArr = [];

        for (let i = 0; i < n; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    }

    Array.prototype.sum = function() {
        return this.reduce((a, b) => a + b);
    }

    Array.prototype.average = function() {
        const n = this.length;
        return this.reduce((a, b) => a + b/n, 0);
    }
})();

// 02. String Extension
(function solve() {
    String.prototype.ensureStart = function (input) {
        let str = this + '';
        if (!str.startsWith(input)) {
            str = input + str;
        }

        return str;
    }

    String.prototype.ensureEnd = function (input) {
        let str = this + '';
        if (!str.endsWith(input)) {
            str += input;
        }

        return str;
    }

    String.prototype.isEmpty = function () {
        let str = this + '';
        return str === '';
    }

    String.prototype.truncate = function (n) {
        let str = this.toString();
        const length = str.length;
        if (length > n) {
            if (!str.includes(' ')) {
                if (n < 4) {
                    str = str.slice(0, length - n) + '.'.repeat(n);
                } else {
                   str = str.slice(0, length - n) + '...';
                }
            } else {
                str = str.split(' ');

                do {
                    str.pop();
                } while (str.join(' ').length > n - 3 && str.length > 1);

                str = str.join(' ') + '...';
            }
        }
        return str;
    }

    String.format = function(string, ...words) {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            string = string.replace(`{${i}}`, word);
        }

        return string;
    }
})();

// 03. Extensible Object
function extensibleObject() {
    const proto = Object.getPrototypeOf(this);
    this.extend = function(obj) {
        for (const key in obj) {
            const value = obj[key]
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                this[key] = value;
            }
        }
    }

    return this;
}

// 04. Balloons
function solution() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = Number(hasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength),
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

// 05. People
function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.tasks = [];
            this.salary = 0;
        }

        work() {
            console.log(this.tasks[0]);
            this.tasks.push(this.tasks.shift());
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} scheduled a meeting.`, 
                `${this.name} is preparing a quarterly report.`
            ];
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}

// 06. Posts
function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.comments = [];
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += '\nComments:\n';
                for (const comment of this.comments) {
                    result += ` * ${comment}\n`;
                }
            }

            return result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

// 07. Computer
function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
        }
    }
    class Keyboard extends Device {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Device {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Device {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw Error('Cannot initialize abstract class Computer');
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (!(battery instanceof Battery)) {
                throw TypeError('Expected "battery" to be an instance of the Battery class');
            }

            this._battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw TypeError('Expected "value" to be an instance of the Battery class');
            }

            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if (!(keyboard instanceof Keyboard)) {
                throw TypeError('Expected "keyboard" to be an instance of the Keyboard class');
            }

            this._keyboard = keyboard;

            if (!(monitor instanceof Monitor)) {
                throw TypeError('Expected "monitor" to be an instance of the Monitor class');
            }

            this._monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw TypeError('Expected "value" to be an instance of the Keyboard class');
            }

            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw TypeError('Expected "value" to be an instance of the Monitor class');
            }

            this._monitor = value;
        }

    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}