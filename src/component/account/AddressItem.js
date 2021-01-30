import React from 'react'

const AddressItem = () => {
    return (
        <div className="addressItem">
            <div className="left">
                <h5>Họ và tên</h5>
                <h5>Địa chỉ</h5>
                <h5>Số điện thoại</h5>
            </div>  
            <div className="central">
                <h5>Đặng Công Hưng</h5>
                <h5>Đại Minh,Đại Lộc</h5>
                <h5>0935629625</h5>
            </div>
            <div className="right">
                <div className="right__but">
                    <a>Sửa</a>
                    <a>Xóa</a>
                </div>
               <input type="button" value="Thiet lap mac dinh"/>
            </div>
        </div>
    )
}

export default AddressItem
