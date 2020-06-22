import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';

export class ProductDetail extends React.Component {
  render() {
    const { location: { state: { price, thumbnail, title, id } } } = this.props;
    const { location: { state: { product } } } = this.props;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col"><Link to="/"><MdKeyboardReturn size="25px" /></Link></div>
          <div className="produt-cart"><Link to="/cart"><FiShoppingCart size="25px" /></Link></div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <img src={thumbnail} alt={thumbnail} className="imagem" />
            <img src={product.thumbnail} alt={product.title} className="imagem" />
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active" data-testid="product-detail-name">{title}</li>
              <li className="list-group-item active" data-testid="product-detail-name">{product.title}</li>
              <li className="list-group-item list-group-item-dark">
                {`Preço: ${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
                {`Preço: ${product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
              </li>
              <li className="list-group-item">{`ID: ${id}`}</li>
              <li className="list-group-item">{`ID: ${product.id}`}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetail;
