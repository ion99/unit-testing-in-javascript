const orderTotal = require('./total-order');

it('Found!!!', () => {
  expect('Star Wars Store').toBe('Star Wars Store');
});

//First case:

it('Quantity', () => {
  expect(orderTotal({
    items: [
      {name: 'Jedi bubblegum', price: 2,  quantity: 3},
      {name: 'Shipping',       price: 40, shipping: true}
    ]
  })).toBe(46);
});

//Second case:

it('No quantity specified', () => {
  expect(orderTotal({
    items: [
      {name: 'Jedi belt', price: 3},
      {name: 'Shipping',  price: 40, shipping: true}
    ]
  })).toBe(43);
});


//Third case:

it('Star Wars (Example 1)', () => {
  expect(orderTotal({
    items: [
      {name: 'Lightsaber holder',     price: 8,   quantity: 1},
      {name: 'Jedi lightsaber (red)', price: 800, quantity: 1},
      {name: 'Shipping',              price: 40,  shipping: true}
    ]
  })).toBe(808);
});

// if (orderTotal({
//   items: [
//     {name: 'Dragon food', price: 8, quantity: 1},
//     {name: 'Dragon cage (small)', price: 800, quantity: 1}
//   ]
// }) !== 808) {
//   throw new Error('Check fail: Happy path (Example 1)');
// };

//Fourth case;

it('Happy path (Example 2)', () => {
  expect(orderTotal({
    items: [
      {name: 'Jedi robe',          price: 20,  quantity: 3},
      {name: 'Jedi symbol tattoo', price: 100, quantity: 2},
      {name: 'Shipping',           price: 40,  shipping: true}
    ]
  })).toBe(260);
});

// if (orderTotal({
//   items: [
//     {name: 'Dragon collar', price: 20, quantity: 1},
//     {name: 'Dragon chew toy', price: 40, quantity: 1}
//   ]
// }) !== 60) {
//   throw new Error('Check fail: Happy path (Example 2)');
// };