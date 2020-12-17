//.reduce()

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {

    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);


    return accumulator + currentValue;
}, 10);
console.log(newSum);



//.findIndex()

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});



/*   .filter()-----------------------------------------*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => number < 250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => { return word.length > 7; });




/* .map()---------------------------------------------------------*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);



/* .some(), .every()      -------------------------------- */

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
    return word.length > 5;
}));



// i method ---------------------------------------->


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);



//PAss by ref
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below

let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
    obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)



//Loop

let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let varName in spaceship.crew) {
    console.log(`${varName}: ${spaceship.crew[varName].name}`);
}
for (let varrName in spaceship.crew) {
    console.log(`${spaceship.crew[varrName].name}: ${spaceship.crew[varrName].degree}`);
}



//get fname()
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return `System malfunction: cannot retrieve energy level`;
        }
    }
};
console.log(robot.energyLevel);



//set, get+set
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
        robot.numOfSensors._numOfSensors = 100;
        console.log(robot.numOfSensors);
    }

};


//robotFactory
function robotFactory(model, mobile) {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-500', true)
console.log(newRobot.model)
console.log(newRobot.mobile)




//destru  function = const name, ..




//destr =

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },

    }
};
const { functionality } = robot;
robot.functionality.beep();



//methods

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');



//


class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    this._name;
    this._cerifications;
    super(name);
    this._certifications = certifications;
  }
}
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);








