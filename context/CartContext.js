import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const [carrinho, setCarrinho] = useState([]);

  const [valorTotal, setValorTotal] = useState(0);

  return (
    <CartContext.Provider
      value={{
        quantidadeProduto,
        setQuantidadeProduto,
        carrinho,
        setCarrinho,
        valorTotal,
        setValorTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;