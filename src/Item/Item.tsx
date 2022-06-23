import React from "react";
import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper, StyledButton } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title}></img>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <StyledButton onClick={() => handleAddToCart(item)}>
      Add to Cart
    </StyledButton>
  </Wrapper>
);

export default Item;
