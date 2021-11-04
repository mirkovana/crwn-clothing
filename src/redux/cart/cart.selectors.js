import { createSelector } from "reselect";

//input selector
const selectCart = (state) => state.cart;

//output selector
export const selectCartItems = createSelector(
  [selectCart], //array input selectora
  (cart) => cart.cartItems //fja koja ce vratiti vrednost koja nam je potrebna iz ovog selektora
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0 //0 je pocetna vrednost zbira
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0 //0 je pocetna vrednost zbira
  )
);
