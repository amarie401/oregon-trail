    "use strict";

    // Global
    let addPerson = [];
    let sickPerson = 0;
    let totalFoodAmount = 0;



    const container = document.querySelector('.container');

    const Person = function(name) {
        this.name = name;
        this.food = Math.floor(Math.random() * 50) + 10
        this.sick = Math.random() >= 0.5;
        console.log(this.food);
        this.eat();
        this.hunt();
    };

    Person.prototype = {
        eat() {
            if (this.food > 0) {
                this.food -= 10;
                console.log(`food amount: ${this.food}`);
            }
        },

        hunt() {
            let randomNum = Math.floor(Math.random() * 20) + 0;
            this.food += randomNum;
            console.log(`hunting: ${randomNum}`);
        }
    };

    // Persons
    const miley = new Person('Miley');
    const shane = new Person('Shane');
    const scott = new Person('Scott');
    const carter = new Person('Carter');
    const drew = new Person('Drew');
    const katie = new Person('Katie');
    const amiee = new Person('Amiee');
    const nick = new Person('Nick');



// console.dir(addPerson);


    // WAGON
    const Wagon = function() {
        this.add(miley);
        this.add(drew);
        this.add(shane);
        this.add(scott);
        this.checkFood();
        this.checkHealth();
        this.overallHealth();
    };

    // add people to wagon prototype
    Wagon.prototype = {
        add(name) {
            let currentWagonOcc = addPerson.length;
            if (currentWagonOcc >= 5) {
                console.log('You are a full wagon!');
            } else {
                addPerson.push(name);
            }
            console.log(addPerson);
        },

        checkFood() {
            for (let i = 0; i < addPerson.length; i++) {
                totalFoodAmount = totalFoodAmount + addPerson[i].food;
                console.log(`totals = ` + totalFoodAmount);
            }

        },

        checkHealth() {
            for (let i = 0; i < addPerson.length; i++) {
                if(addPerson[i].sick === true) {
                    sickPerson += 1;
                }
            };
            console.log(`sick people? ` + sickPerson);
        },

        overallHealth() {
            if (sickPerson >= 1 && totalFoodAmount > 200) {
                console.log("Your group is doing great!");
            } else if (sickPerson <= 3 && totalFoodAmount < 200 && totalFoodAmount > 100) {
                console.log("be careful");
            } else if (sickPerson > 3 && totalFoodAmount< 100) {
                console.log('You are dying ');
            } else if (sickPerson > 1 && totalFoodAmount <150) {
                console.log("it's not looking good ");
            } else {
                console.log('unknown');
            }
        }


    };

    const wagonOne = new Wagon();
    // console.log(wagonOne);
