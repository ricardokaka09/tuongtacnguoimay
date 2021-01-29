import React ,{useEffect, useState}from 'react';
import SlideShow from './slide/SlideShow'
import Product from './product/Product'

import './Home.css'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import StarBorder from '@material-ui/icons/StarBorder';
import {abc} from '../../js/script'

function Home(){
    useEffect(()=>{
        abc();
    })

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    return(
        <div className='home'>
            <div className="home__container">
                <div className="home__img__1">
                    <img class="banner" src={require('../../styles/img/banner.png')} alt=""/>
                    {/* <div className="home__img-info">
                        <h2>THuc pham Sach</h2>
                        <h1>Nhin la Ngon</h1>
                        <h4>dam bao an toan thuc pham</h4>
                    </div> */}
                </div>
                <div className="home__title">
                    <div className="home__title__trai">
                        <div className='home__title__trai-tren'>
                      
                            <span>DANH MỤC</span>
                        </div>
                        <ul className="abc">
                            <li><a href="/">Rau xanh</a><p>36</p></li>
                            <li><a href="/">Trái cây</a><p>12</p></li>
                            <li><a href="/">Nước ép</a><p>15</p></li>
                            <li><a href="/">Thịt</a><p>22</p></li>
                            <li><a href="/">Sữa</a><p>6</p></li>
                            <li><a href="/">Rau củ quả</a><p>32</p></li>
                            <li><a href="/">Rau củ quả Đà Lạt</a><p>18</p></li>
                           
                        </ul>
                    </div>
                    <div className="home__title__phai">
                        {/* <div className="home__title__phai-title">
                            NHin anh di
                        </div> */}
                        <div className="home__title__phai-img">
                            <img src={require('../../styles/img/banner2.jpg')} alt="" srcset=""/>
                        </div>
                    </div>
                </div>
                <div className="home__sp__1">

                            <Product 
                            title='Sản phẩm bán chạy'
                
                            />
                </div>
                <div className="home__sp__2">
                            {/* map product from data */}
                            <Product 
                            title='THỊT HỮU CƠ'
                            />

                </div>
                <div className="home__title__2">
                    <div className="home__title__2-img">
                        <img src={require('../../styles/img/banner4.jpg')} alt=""/>
                    </div>
                    <div className="home__sp__2">
                            {/* map product from data */}
                            <Product 
                            title='TRÁI CÂY'
                            />
                    </div>
                </div>
                <div className="home__panner">
                    <div className="home__panner-info">
                        {/* <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1VRQ4iCslXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg_.webp" alt=""/> */}
                        <h4>RAU CỦ HỮU CƠ</h4>
                        <p>CÁC SẢN PHẨM HỮU CƠ</p>
                    </div>
                </div>
                <div className="home__sp__2">

                            <Product 
                            title='Sản phẩm bán chạy'
                
                            />
                </div>
                <div className="home__sp__2">

                            <Product 
                            title='Rau củ hữu cơ'
                
                            />
                </div>
                {/* <div className="home__category">
                    <List
                        >
                        <ListItem button>
                            <ListItemIcon>
                            <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                            <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            {open ? <NavigateBeforeIcon/>
                            : <NavigateNextIcon/>}

                        </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button className='list__items'>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                            </List>
                            </Collapse>
                        </List>
                        
                </div> */}
                {/* <SlideShow/> */}
            </div>
            <script src='../../js/script.js'></script>
        </div>
        
    )
}
export default Home;