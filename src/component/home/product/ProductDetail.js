import React from 'react'
import PropTypes from 'prop-types'
import {connect }from 'react-redux'
import { useEffect } from 'react'
import {getProductItem} from '../../../actions/post'
import {createBasket} from '../../../actions/basket'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = ({
  getProductItem,
  productItem:{_id,idCategory,CategoryName,imgName,name,price,sales,quantity,state},
  match,
  createBasket
}) => {
  const [open,setOpen]= useState(true)
  const [open1,setOpen1]= useState(false)
  const [open2,setOpen2]= useState(false)
  const [active,setActive]= useState('active')
  const [soluong,setSoluong] = useState(parseInt(1))
  useEffect(()=>{
    // console.log(match.params.id)
    // getProductItem(match.params.id)
  },[])
  const setClose = () =>{
    setOpen(true);setOpen1(false);setOpen2(false);
  }
  const setClose1 = () =>{
    setOpen(false);setOpen1(true);setOpen2(false);
  }
  const setClose2 = () =>{
    setOpen(false);setOpen1(false);setOpen2(true);
  }
  const addBasket = ()=>{
    console.log('active');
    createBasket({_id,name,imgName,price,soluong})
  }
  const div =()=>{
    console.log('active')
    setSoluong(soluong - 1)
  }
  const add =()=>{
    console.log('active')
    setSoluong(soluong + 1)
  }
    return (
        <div>
        <div className="container__product">
          <div className="title">Trang chủ &gt; <Link to='/shop'>Sản phẩm</Link> &gt; <Link to='/shop'>{CategoryName}</Link> </div>
          <div>
            <div id="hinhanh">
              <img src={`https://nongsan-viet.herokuapp.com/api/product/retrieve/image/single?name=${imgName}`} />
            </div>
            <div id="noidung">
              <p className="name">{name}</p>
              <p className="review">18 đánh giá</p>
              <p className="price">{price}</p>
              <p className="review">Trọng lượng : 01 kg</p>
              <p className="review">Xuất xứ: Đà Lạt</p>
              <p className="review">Tình trạng: {state}</p>
              <div>
                <div className="soluong"><p>{quantity}</p></div>
                <div className="buttons_added">
                  <input className="minus is-form" type="button" defaultValue="-" onClick={div} />
                  <input aria-label="quantity" className="input-qty" max={parseInt(quantity)} onChange={(e)=>setSoluong(e.target.value)} name type="text" value={soluong} />
                  <input className="plus is-form" type="button" defaultValue="+" onClick={add} />
                </div>
              </div>
              <br />
              <div className="noidung__button">
                <div className="nuttrai">
                  <p className="classname1" onClick={addBasket}>Thêm vào giỏ hàng</p>
                </div>
                <div className="nutphai">
                  <p className="classname2">Mua ngay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="danhgia">Đánh giá</div> */}
          <div className="tabs">
            <button className={`tablinks ${open?active:''}`}  data-electronic="allproducts" onClick={()=>setClose()}>Mô tả</button>
            <button className={`tablinks ${open1?active:''}`} data-electronic="Microcontrollers" onClick={()=>setClose1()}>Nhận xét và đánh giá</button>
            <button className={`tablinks ${open2?active:''}`} data-electronic="module" onClick={()=>setClose2()}>Viết đánh giá</button>
          </div>
          {open&&<div className="danhgia2">
          <h3>Mô tả</h3>
          <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
            suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
            vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
            Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
          <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
            nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
            porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui. Proin eget tortor risus.</p>
        </div>}
        {/* Tab content */}
        <div className="wrapper_tabcontent">
          {open1&&<div id="allproducts" className="danhgia2">
            <h3>Nhận xét và đánh giá</h3>
            <p>sp dung tot</p>
            <p>demo</p>
          </div>}
          {open2&&<div id="Microcontrollers" className="danhgia2">
            <h3>Viết đánh giá</h3>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
              Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
              elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
            {/*  <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
	        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
	        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
	        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
	        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
	        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
	        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
	        sed sit amet dui. Proin eget tortor risus.</p> */}
          </div>}
         {/* <div id="module" className="tabcontent">
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
              Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
              elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
              porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
              nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
              porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
              sed sit amet dui. Proin eget tortor risus.</p>
          </div> */}
        </div>
      </div>
    )
}
ProductDetail.propTypes = ({
  getProductItem: PropTypes.func.isRequired,
  createBasket: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  productItem: PropTypes.object.isRequired,
})
const mapStateToProps = state => ({
  auth: state.auth,
  productItem: state.product.productItem
}) 
export default connect(mapStateToProps,{getProductItem,createBasket})(ProductDetail);
