import React from 'react'
import './Shop.css'
import { connect } from 'react-redux'
import ProductItem from '../home/product/ProductItem';
import PropTypes from 'prop-types'
import { getPostDB } from '../../actions/post';
const Shop = ({product}) => {
    return (
        <div className="shop">
        <div className="shop_mucluc">
            <div className="danhmuc">
                <h5>Danh mục</h5>
                <ul>
                    <li>Rau củ <p>1000</p></li>
                    <li>Trái cây <p>123</p></li>
                    <li>Thịt <p>122</p></li>
                    <li>Sữa <p>10</p></li>

                </ul>
            </div>
            <hr/>
            <div className="danhgia">
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
            </div>
            <div className="danhgia1">
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                 
            </div>
            <div className="danhgia_2">
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>

            </div>
            <div className="danhgia3">
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
            </div>
            <div className="danhgia4">
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
            </div>
            <hr/>
            <div className="sales">
                <ul>
                    <li><input type="checkbox" name="" id=""/> 0- 20% <p>10</p></li>
                    <li><input type="checkbox" name="" id=""/>  20- 40% <p>10</p></li>
                    <li><input type="checkbox" name="" id=""/>  40- 80% <p>10</p></li>
                    <li><input type="checkbox" name="" id=""/>  80- 100% <p>10</p></li>
                   
                </ul>
                
                
                {/* <input type="checkbox" name="" id=""/>
                <input type="checkbox" name="" id=""/>
                <input type="checkbox" name="" id=""/> */}
            </div>
            <hr/>
            <div className="shop_mucluc_button">
                <button>Áp dụng</button>
            </div>
        </div>
        <div className="shop_product">
            <div className="shop_product__tren">
                <div className="shop_product__tren-banner">
                    <img src="" alt=""/>
                </div>
                <div className="shop_product__tren-option">
                    <div className="optionOne " >Sắp xếp theo</div>   
                    <div className="optionOne" style={{backgroundColor: '#80b435'}}>Liên quan</div>
                    <div className="optionOne">Bán chạy</div>
                    <div className="optionOne">Giá</div>
                </div>
            </div>
            <div className="shop_product__duoi">
                <div className="shop-product__duoi_grid">
                {product&&
                product.products.map((item)=>(
                    <ProductItem product={item}/>
                ))}
                {product&&
                product.products.map((item)=>(
                    <ProductItem product={item}/>
                ))}
                {product&&
                product.products.map((item)=>(  
                    <ProductItem product={item}/>
                ))}
                </div>
            </div>
        </div>
    </div>
    )
}

Shop.propTypes= ({
    auth: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    getPostDB: PropTypes.func.isRequired,
})
const mapStateToProps = state =>({
    auth: state.auth,
    product: state.product
})
export default connect(mapStateToProps,{getPostDB})(Shop);
