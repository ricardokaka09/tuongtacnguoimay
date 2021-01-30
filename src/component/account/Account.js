import { Avatar } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './Account.css'
import AccountNotiItem from './AccountNotiItem'
import AddressItem from './AddressItem'
import VoucherItem from './VoucherItem'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'

const Account = ({auth: {user}}) => {
    const [day,setDay] =  useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [month,setMonth] =  useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [year,setYear] =  useState([1990,1991,1992,1993,1994,1995,1996,1999,2000])
    const [account,setAccount] = useState(true)
    const [donMua,setDonMua] = useState(false)
    const [notification,setNotification] = useState(false)
    const [voucher,setVoucher] = useState(false)
    const [address,setAddress] = useState(false)
    const [color,setColor] = useState('red');
    const [color1,setColor1] = useState('');
    const [color2,setColor2] = useState('');
    const [color3,setColor3] = useState('');
    const [color4,setColor4] = useState('');
    const Acc = () =>{

        setAccount(true);setColor('red')
        setDonMua(false); setColor1('')
        setNotification(false);setColor2('')
        setAddress(false);setColor4('')
        setVoucher(false);setColor3('')
    }
    const Buyer = () =>{
        setAccount(false);setColor('')
        setDonMua(true); setColor1('red')
        setNotification(false);setColor2('')
        setAddress(false);setColor4('')
        setVoucher(false);setColor3('')
    }
    const Noti = () =>{
        setAccount(false);setColor('')
        setDonMua(false);setColor1('')
        setNotification(true); setColor2('red')
        setAddress(false);setColor4('')
        setVoucher(false);setColor3('')
    }
    const Voucher = () =>{
        setAccount(false);setColor('')
        setDonMua(false);setColor1('')
        setNotification(false);setColor2('')
        setAddress(false);setColor4('')
        setVoucher(true); setColor3('red')
    }
    const Address = () =>{
        setAccount(false);setColor('')
        setDonMua(false);setColor1('')
        setNotification(false);setColor2('')
        setAddress(true); setColor4('red')
        setVoucher(false);setColor3('')
    }
    return (
        <div className='account'>
            <div className="account__info">
                <div className="account__info__list">
                    <div className="account__info__list-t">
                        <div className='account__info-avatar'>
                            <Avatar/>
                            <div className="account__info-name">
                                <h4>{user.name}</h4>
                                <span>Sửa thông tin</span>
                            </div>
                        </div>
                        
                       
                    </div>
                    <hr/>
                    <div className="account__info__list-b">
                        <ul>
                            <li onClick={Acc} style={{color:`${color}`}}><a style={{color:`${color}`}}>Tài khoản của tôi</a> <ArrowForwardIosIcon/></li>
                            <li onClick={Buyer} style={{color:`${color1}`}}><a style={{color:`${color1}`}}>Đơn mua</a>  <ArrowForwardIosIcon/></li>
                            <li onClick={Noti} style={{color:`${color2}`}}><a style={{color:`${color2}`}}>Thông báo</a> <ArrowForwardIosIcon/></li>
                            <li onClick={Voucher} style={{color:`${color3}`}}><a style={{color:`${color3}`}}>Ví voucher </a> <ArrowForwardIosIcon/></li>
                            <li onClick={Address} style={{color:`${color4}`}}><a style={{color:`${color4}`}}>Số địa chỉ</a> <ArrowForwardIosIcon/></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            {account && 
            <div className="account__detail">
            <div className="account__detail__content">
                    <div className="account__detail-title">
                        <h4>Tài khoản</h4>
                    </div>
                    <hr/>
                    <div className="account__detail-content">
                        <div className="account__detail-content-tr">
                            <tr>
                                <td>Tên Đăng Nhập:</td>
                                <td className='info-change'><h5>Đặng Công Hưng</h5></td>
                                
                            </tr>
                            <tr>
                                <td>Tên:</td>
                                <td className='info-change'><input type="text"/></td>
                                
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td className='info-change'>hung@gmail.com <a href="#">thay đổi</a></td>
                                
                            </tr>
                            <tr>
                                <td>Số điệnn thoại:</td>
                                <td className='info-change'>0905466090 <a href="#">thay đổi</a></td>
                                
                            </tr>
                            <tr>
                                <td>Giới tính:</td>
                                <td className='info-change'>
                                    <input type="radio" checked name="Nam" id="Nam"/>
                                    <label htmlFor="Nam">Nam</label>
                                    <input type="radio" name="Nam" id="Nu"/>
                                    <label htmlFor="Nu">Nữ</label>
                                    <input type="radio" name="Nam" id="Khac"/>
                                    <label htmlFor="Khac">Khác</label>
                                
                                </td>
                                
                            </tr>
                            <tr>
                                <td>Ngày sinh:</td>
                                <td className='info-change'>
                                    <select name="" id="day">
                                        {day.map((item,index)=>
                                            <option value={index}>{item}</option>
                                        )}
                                    </select>
                                    <select name="" id="month">
                                        {month.map((item,index)=>
                                            <option value={index}>{item}</option>
                                        )}
                                    </select>
                                    <select name="" id="year">
                                        {year.map((item,index)=>
                                            <option value={index}>{item}</option>
                                        )}
                                    </select>
                                </td>
                                
                            </tr>
                        </div>
                        <br/>
                        <div className="account__detail-content-avatar">
                            <Avatar className='avatar'/>
                            <div className="choose__avatar">
                                <input type="file" id='file' />
                                <button htmlFor="file">Chọn ảnh</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {/* Don mua */}
            {donMua &&
            <div className="account__detail">
            <div className="account__detail__content">
                    <div className="account__detail-title">
                        <h4>Đơn hàng của tôi</h4>
                    </div>
                    <hr/>
                    <div className="account__detail-content-option">
                            <h4 className='active'>Đơn hàng đã mua</h4>
                            <h4>Đơn hàng đã hủy</h4>
                    </div>
                    <div className="account__detail-content__order">
                        
                        <div className="account__detail-content-order">
                            <table>
                                
                           
                            <tr >
                                <th>Ma Don Hang</th>
                                <th>Ngay Mua</th>
                                <th>San Pham</th>
                                <th>Tong Tien</th>
                                <th>Trang thai don hang</th>
                            </tr>
                            <br/>
                            <tr>
                                <td>Id</td>
                                <td>{new Date().toDateString()}</td>
                                <td>Bap cai da lat</td>
                                <td>32000d</td>
                                <td>Done</td>
                            </tr>
                            <br/>
                            </table>
                        </div>
                        
                        <br/>
                       
                    </div>
                </div>
            </div>
            }
            {/* Notification */}
             {notification &&
            <div className="account__detail">
            <div className="account__detail__content">
                    <div className="account__detail-title">
                        <h4>Thông báo của tôi</h4>
                    </div>
                    <hr/>
                    <div className="account__detail__content__notification">
                        <div className="account__detail-content">
                            <div className="account__detail-content-info">
                                <AccountNotiItem/>
                            </div>
                        </div>
                        
                        <br/>
                       
                    </div>
                </div>
            </div>
            }
            {/* Voucher */}
            {
                voucher &&
                <div className="account__detail">
                <div className="account__detail__content">
                        <div className="account__detail-title">
                            <h4>Voucher của tôi</h4>
                        </div>
                        <hr/>
                        
                        <div className="account__detail__content__voucher">
                            <div className="account__detail-content">
                                <div className="account__detail-content-state">
                                    <h4>Trạng thái: </h4>
                                    <select name="" id="">
                                        <option value="yes">Còn hàng</option>
                                        <option value="no">Het han</option>
                                    </select>
                                    <input type="button" value="Tim Kiem"/>
                                </div>
                                <div className="account__detail-content-voucher">
                                    <VoucherItem/>
                                    <VoucherItem/>
                                    <VoucherItem/>
                                </div>
    
                            </div>
                            
                            <br/>
                           
                        </div>
                    </div>
                </div>
            }
            {
                address&&
                <div className="account__detail">
                <div className="account__detail__content">
                        <div className="account__detail-title">
                            <h4>Địa chỉ</h4>
                        </div>
                        <hr/>
                        
                        <div className="account__detail__content__address">
                            <div className="account__detail-content">
                                <div className="account__detail-content-add">
                                    {/* icon  plus*/}
                                    <AddCircleOutlineIcon/>
                                    <p>Thêm địa chỉ mới</p>
                                </div>
                                <div className="account__detail-content-addess">
                                    <AddressItem/>
                                </div>
    
                            </div>
                            
                            <br/>
                           
                        </div>
                    </div>
                </div>
            }
           
        </div>
    )
}
Account.propTypes = {
    auth : PropTypes.object.isRequired,
}
const mapToStateProps = state =>({
    auth : state.auth
})
export default connect(mapToStateProps)(Account)