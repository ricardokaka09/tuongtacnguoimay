import React from 'react'
import './Blog.css'
import BlogItem from './BlogItem'
import blog1 from '../../styles/img/blog1.jpg'
import blog2 from '../../styles/img/blog2.jpg'
import blog3 from '../../styles/img/blog3.jpg'
import blog4 from '../../styles/img/blog4.jpg'
import blog5 from '../../styles/img/blog5.jpg'
import blog6 from '../../styles/img/blog6.jpg'
const Blog = () => {
    return (
        <>
      <div className="blog">
        <BlogItem blog={blog1} title="Món ăn truyền thống"/>
        <BlogItem blog={blog2} title="Món ăn thanh lọc"/>
        <BlogItem blog={blog6} title="Món ăn chay"/>
        <BlogItem blog={blog4} title="Món ăn truyền thống"/>
        <BlogItem blog={blog5} title="Món ăn truyền thống"/>
        <BlogItem blog={blog3} title="Món ăn truyền thống"/>
        
      {/* <div className="single-item1">
        <img src={require('../../styles/img/blog1.jpg')} className="img" />
        <p className="title">Món ăn truyền thống</p>
        <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
          trang trí đều phải mang đậm tính văn hóa...</p>
        <p className="more">Xem thêm &gt;&gt;</p>
      </div>
      <div className="single-item1">
        <img src={require('../../styles/img/blog2.jpg')} className="img" />
        <p className="title">Món ăn truyền thống</p>
        <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
          trang trí đều phải mang đậm tính văn hóa...</p>
        <p className="more">Xem thêm &gt;&gt;</p>
      </div>
      <div className="single-item1">
        <img src={require('../../styles/img/blog3.jpg')} className="img" />
        <p className="title">Món ăn truyền thống</p>
        <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
          trang trí đều phải mang đậm tính văn hóa...</p>
        <p className="more">Xem thêm &gt;&gt;</p>
      </div>
      <div className="single-item1">
        <img src={require('../../styles/img/blog4.jpg')} className="img" />
        <p className="title">Món ăn truyền thống</p>
        <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
          trang trí đều phải mang đậm tính văn hóa...</p>
        <p className="more">Xem thêm &gt;&gt;</p>
      </div>
      <div className="single-item1">
        <img src={require('../../styles/img/blog5.jpg')} className="img" />
        <p className="title">Món ăn truyền thống</p>
        <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
          trang trí đều phải mang đậm tính văn hóa...</p>
        <p className="more">Xem thêm &gt;&gt;</p>
      </div>
      <div className="single-item1">
        <img src={require('../../styles/img/blog6.jpg')} className="img" />
        <p className="title">Món ăn truyền thống</p>
        <p className="desc">Món ăn truyền thống là những món ăn được làm theo phong cách truyền thống. Từ nguyên liệu cho đến bố cục
          trang trí đều phải mang đậm tính văn hóa...</p>
        <p className="more">Xem thêm &gt;&gt;</p>
      </div> */}
      
    </div>
    <div className="xemThem">
      <a href="#" className="btn__xemThem">Xem thêm</a>
    </div>
    </>
    )
}

export default Blog
