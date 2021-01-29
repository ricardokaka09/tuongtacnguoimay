import React from 'react'

const AddressItem = () => {
    return (
        <div className="addressItem">
            <div className="left">
                <h5>Ho va ten</h5>
                <h5>dia chi</h5>
                <h5>so dien thoai</h5>
            </div>  
            <div className="central">
                <h5>Dang Cong Hung</h5>
                <h5>Dai Minh,Dai Loc</h5>
                <h5>0935629625</h5>
            </div>
            <div className="right">
                <div className="right__but">
                    <a>Sua</a>
                    <a>Xoa</a>
                </div>
               <input type="button" value="Thiet lap mac dinh"/>
            </div>
        </div>
    )
}

export default AddressItem
