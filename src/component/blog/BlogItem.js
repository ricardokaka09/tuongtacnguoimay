import React from 'react'
import { useEffect } from 'react'


const BlogItem = ({blog,title}) => {
    // useEffect(()=>{
    //     console.log(blog);
    // },[])
    return (

        <div className="blog_item">
            <img src={blog} className="img" />
            <p className="title">{title}</p>
            <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
            trang trí đều phải mang đậm tính văn hóa...</p>
            <p className="more">Xem thêm &gt;&gt;</p>
        </div>

    )
}

export default BlogItem
