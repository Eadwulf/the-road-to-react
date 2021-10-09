const profile = {
  firstname: 'Robin',
  lastname: 'Wieruch',
};

const address = {
  country: 'Germany',
  city: 'Berlin',
  code: '10439',
};

const user = {
  ...profile,
  gender: 'male',
  ...address,
}

console.log(user);
