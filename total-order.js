function orderTotal(order){
  const totalPrice = order.items.filter(x => !x.shipping).reduce((prev, curr) => curr.price * (curr.quantity || 1) + prev, 0);
  const shipping = order.items.find(x => x.shipping);
  const addShipping = totalPrice > 250 ? 0 : shipping.price;
  return totalPrice + addShipping;
};

module.exports = orderTotal;
