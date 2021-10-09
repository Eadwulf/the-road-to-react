const user = {
  id: '1',
  firsname: 'Robin',
  lastname: 'Wieruch',
  country: 'Germany',
  city: 'Berlin',
};

const { id, country, city, ...userWithoutAddress } = user;
console.log(userWithoutAddress);
