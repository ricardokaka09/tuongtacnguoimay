import { Avatar } from '@material-ui/core'
import React from 'react'

function DanhGia() {
    return (
        <div className='danhGia'>
            <Avatar/>
            <div className="danhGia__info">
                <p>name</p>
                <h4>sp tot</h4>
            </div>
        </div>
    )
}

export default DanhGia
