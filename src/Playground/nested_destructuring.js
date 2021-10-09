const user = {
  firstName: 'Robin',
  pet: {
    name: 'Trixi',
  },
};

const {
  firstName,
  pet: {
    name,
  },
} = user;

console.log(firstName + 'has a pet called ' + name);
