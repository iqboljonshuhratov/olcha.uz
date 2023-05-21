import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { Component } from "react";

class ProductCard extends Component{
    render(){
      const {productImg, groupName, price, priceMonth, title} = this.props.data;
      const buy = this.props.buy;

      return  <div className='productCard p-3'>
      <img className='d-block productImg' src={productImg} alt="" />
      <a href="#" className='groupName d-block mb-2 mt-3'>{groupName}</a>
      <p className='price mb-2'>{price} som</p>
      <p className='priceMonth'>{priceMonth} so'm</p>
      <p className='title'>{title}</p>
      <a href="#" className="btn" onClick={buy}>купить</a>
      </div>
    }
  }

  export default ProductCard;