import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Avatar, IconButton} from '@material-ui/core'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
import {useStateValue} from '../../stateProvider/StateProvider'
import { auth } from 'firebase';
import Checkout from '../checkout/Checkout'
import { logout ,login} from '../../actions/auth'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { useEffect } from 'react';
function Header({auth:{user},isAuthenticated,logout,product}){
    const handleSignOut =() =>{
        logout()
        console.log('active')
    }
    // useEffect(()=>{

    // })

    return(
        <div className="container__header">
        <div className='header'>
            <Link to='/'>
                <img style={{marginLeft:'150px'}} className='header__logo' src={require('../../styles/img/logo.png')} alt=""/>
            </Link>
            <div className="header__search">
                <input type="text" placeholder='Search...'/>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                
            </div>
            <div className="header__nav">
               
                { isAuthenticated?  
                   
                   
                       <>
                       <Link to='/profile'>
                        <div className="header__option-1" >
                            <Avatar src=''/>
                            <span className="header__optionLineTwo">{user?.name}</span>
                            {/* <span className="header__optionLineTwo">Dang Ki</span> */}
                        </div>
                    </Link>
                    <div className="header__option" onClick={handleSignOut}>
                         {/* <Avatar src=''/> */}
                        <span className="header__optionLineTwo">Logout</span>
                        {/* <span className="header__optionLineTwo">Dang Ki</span> */}
                    </div>
                    </>
                    
                    :
                    <>
                    <Link to='/signUp'>
                        <div className="header__option" >
                            <span className="header__optionLineTwo" >Đăng Ki</span>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <div className="header__option">
                            <span className="header__optionLineTwo">Dang Nhap</span>
                        </div>
                    </Link>
                    </>}
                    <div className="header__option">
                        <span className="header__optionLineTwo">Tiếng</span>
                        <span className="header__optionLineTwo">Việt</span>
                    </div>
            </div>
            
            <div className="header__optionBasket">
                <Link to='/checkout'>
                    <IconButton style={{marginRight:'150px'}}>
                        <ShoppingCartIcon className='header__optionBasketIcon'
                        />
                    </IconButton>
                </Link>
                
                <span className="header__optionBasketLineTwo header__optionCounter">{product.basket?.length}</span>
                {/* <Checkout 
                price={10}
                image='https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp'/> */}

            </div>
            
        </div>
        <div className="menu">
        {/* <div class="col-lg-6"> */}
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="/">Trang Chủ</a></li>
                            <li><a href="./shop">Sản Phẩm</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="./shop-details">Rau củ quả</a></li>
                                    <li><a href="./shoping-cart">Trái cây</a></li>
                                    <li><a href="./checkout">Thịt hữu cơ</a></li>
                                    <li><a href="./blog-details">Sữa tươi</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Khuyến Mãi</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="./shop-details">Giảm giá 10%</a></li>
                                    <li><a href="./shoping-cart">Giảm giá 20%</a></li>
                                    <li><a href="./checkout">Giảm giá 30%</a></li>
                                    <li><a href="./blog-details">Giảm giá 40%</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog">Blog</a></li>
                            <li><a href="./contact">Liên hệ</a></li>
                            <li><a href="./contact">Giới thiệu</a></li>
                        </ul>
                    </nav>
                {/* </div> */}
        </div>
        </div>
        
        
    )
}
Header.propTypes = { // go tat ptfr
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    product: PropTypes.object.isRequired,
  }
  const mapStateToProps = state => ({
      auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    product: state.product
  })
  
  export default connect(mapStateToProps,{ login,logout })(Header)