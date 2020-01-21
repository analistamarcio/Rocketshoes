import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-vector-infantil/26/COL-7653-026/COL-7653-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas Vector</strong>
        <span>R$ 109,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-vector-infantil/26/COL-7653-026/COL-7653-026_zoom1.jpg"
          width="240"
          alt="Tênis"
        />
        <strong>Tênis Adidas Vector</strong>
        <span>R$ 109,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-vector-infantil/26/COL-7653-026/COL-7653-026_zoom1.jpg"
          width="240"
          alt="Tênis"
        />
        <strong>Tênis Adidas Vector</strong>
        <span>R$ 109,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-vector-infantil/26/COL-7653-026/COL-7653-026_zoom1.jpg"
          width="240"
          alt="Tênis"
        />
        <strong>Tênis Adidas Vector</strong>
        <span>R$ 109,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-vector-infantil/26/COL-7653-026/COL-7653-026_zoom1.jpg"
          width="240"
          alt="Tênis"
        />
        <strong>Tênis Adidas Vector</strong>
        <span>R$ 109,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-vector-infantil/26/COL-7653-026/COL-7653-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas Vector</strong>
        <span>R$ 109,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
