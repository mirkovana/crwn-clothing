export const addItemToCart = (cartItems, cartItemToAdd) => {
  //cartItems lista svih itema, cartItemToAdd item koji zalim da dodam
  //proveravam da li  item postoji u listi
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //ako je item ponadjen u list necu ga dodavati jos jednom nego cu povecati kolicinu postojeceg
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //ako item nije pornadjen u listi onda cu dodati taj item u listu i njegova kolicina ce biti 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
