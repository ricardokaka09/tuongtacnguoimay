import React from 'react'
import { useState } from 'react'

const PaymentAddress = () => {
    const [name,setName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    
    return (
        <div className="container-address">
        <div className="checkout__form">
          <h3>Địa chỉ giao hàng</h3>
          <h5 className="address-list-text">Chọn địa chỉ giao hàng có sẵn bên dưới</h5>
          <div className="address-list">
            <div className="address-item">
              <p className="name">Nguyễn Văn A</p>
              <p className="address" title="133 Lê Văn Hiến, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, Đà Nẵng">
                Địa chỉ: 133 Lê Văn Hiến, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, Đà Nẵng
              </p>
              <p className="address">Việt Nam</p>
              <p className="phone">Điện thoại: 0945926577</p>
              <p className="action">
                <button type="button" className="btn saving-address">Giao đến địa chỉ này</button>
                <button type="button" className="btn edit-address">Sửa</button>
              </p>
              <span className="default">Mặc định</span>
            </div>
          </div>
          <div className="AddNewAddress">
            Bạn muốn giao đến địa chỉ khác ?
            <span>Thêm địa chỉ giao hàng mới</span>
          </div>
          <div className="newform">
            <div className="form-container">
              <form action="#" method="POST">
                <div className="FormItem">
                  <label>Họ Tên</label>
                  <input type="text" name="full_name"
                   placeholder="Nhập họ tên" 
                   maxLength={50} 
                   value={name}
                   onChange={e=> setName(e.target.value)}
                   defaultValue 
                   className="InputForm" />
                </div>
                <div className="FormItem">
                  <label>Điện thoại di động</label>
                  <input type="text" 
                  name="telephone" 
                  placeholder="Nhập số điện thoại di động"
                   maxLength={50} defaultValue 
                   value={phoneNumber}
                   onChange={e=> setPhoneNumber(e.target.value)}
                   className="InputForm" />
                </div>
                <div className="FormItem">
                  <label>Tỉnh/Thành phố</label>
                  <select name="city">
                    <option value="city">Chọn Tỉnh/Thành phố</option>
                    <option value="HN">Hà Nội</option>
                    <option value="SG">Đà Nẵng</option>
                  </select>
                </div>
                <div className="FormItem">
                  <label>Quận/Huyện</label>
                  <select name="city">
                    <option value="city">Chọn Quận/Huyện</option>
                    <option value="HN">Hải Châu</option>
                    <option value="SG">Ngũ Hành Sơn</option>
                  </select>
                </div>
                <div className="FormItem">
                  <label>Phường/Xã</label>
                  <select name="city">
                    <option value="city">Chọn Phường/Xã</option>
                    <option value="HN">Khuê Mĩ</option>
                    <option value="SG">Nại Hiên Đông</option>
                  </select>
                </div>
                <div className="FormItem">
                  <label>Địa chỉ</label>
                  <textarea type="textarea" name="street" placeholder="Ví dụ: 133 Lê Văn Hiến" className="FillinTextarea" defaultValue={""} />
                </div>
                <div className="FormItem">
                  <label>Loại địa chỉ</label>
                  <span htmlFor="home"><input type="radio" id="home" name="address" defaultValue="home" defaultChecked /> Nhà riêng</span>
                  <span htmlFor="copany"><input type="radio" id="company" name="address" defaultValue="company" /> Cơ quan</span>                                
                </div>
                <div className="FormItem" style={{marginBottom: 0}}>
                  <label />
                  <div className="button-group">
                    <button className="cancel">Hủy bỏ</button>
                    <button className="create-update">Giao đến địa chỉ này</button>
                  </div>
                </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
    )
}

export default PaymentAddress
