const personReducer = (person, action) => {
  switch (action.type) {
    case 'INCREASE_AGE':
      return {...person, age: person.age + 1};
    case 'CHANGE_LASTNAME':
      return {...person, lastname: action.playload.lastname};
    default:
      return person;
  }
};

const initialState = {
  firstname: 'Liesa',
  lastname:  'Huppertz',
  age:        30,
};

const action = {
  type: 'CHANGE_LASTNAME',
  playload: {
    lastname: 'Wieruch',
  },
};


const result = personReducer(initialState, action);

const test = (object1, object2) => {
  if (!(object1.length === object2.length)) return false;
  for (let i = 0; i < object1.length; i++) {
    if (!(object1[i] === object2[i])) return false;
    }
  return true;
  };

console.log(test(initialState, result));
