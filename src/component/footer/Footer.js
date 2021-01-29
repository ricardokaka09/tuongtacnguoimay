import React from 'react'
import './Footer.css'

function Footer() {
    return (
        
        <footer class="footer">
            <div class="footer__top">
                <div class="footer__links">
                    <img class="logo" src={require('../../styles/img/logo.png')} alt="logo"/>
                </div>
                <div class="footer__links">
                    <h4 class="footer__title">Liên kết nhanh</h4>
                    <a class="footer__link" href="">Trang chủ</a>
                    <a class="footer__link" href="">Sản phẩm</a>
                    <a class="footer__link" href="">Cửa hàng</a>
                    <a class="footer__link" href="">Khách hàng thân thiết</a>
                </div>
                <div class="footer__links">
                    <h4 class="footer__title">Trợ giúp</h4>
                    <a class="footer__link" href="">Thanh toán</a>
                    <a class="footer__link" href="">Đang vận chuyển</a>
                    <a class="footer__link" href="">Hủy và trả hàng</a>
                    <a class="footer__link" href="">FAQ</a>
                </div>
                <div class="footer__links">
                    <h4 class="footer__title">Liên hệ với chúng tôi</h4>
                    <a class="footer__link" href="">Về chúng tôi</a>
                    <a class="footer__link" href="">Liên hệ</a>
                    <a class="footer__link" href="">Chính sách bảo mật</a>
                    <a class="footer__link" href="">Làm việc với chúng tôi</a>
                </div>
                <div class="footer__links">
                    <h4 class="footer__title">Tin tức</h4>
                    <p class="footer__description">Đăng kí email với chúng tôi để nhận được thông tin khuyến mãi, sản phẩm mới và nhiều hơn nữa</p>
                    <div class="footer__input">
                        <img src="assets/email.svg" alt=""/>
                        <input type="text" placeholder="Nhập email của bạn"/>
                    </div>
                    <button class="btn">Đăng kí</button>
                </div>
            </div>

            <hr class="line"/>
            <div class="footer__bottom">
                <div class="footer__hiperLinks">
                    <a class="footer__hiperLink" href="">Điều khoản</a>
                    <span>・</span>
                    <a class="footer__hiperLink" href="">Chính sách bảo mật</a>
                </div>
                <div class="footer__hiperLinks">
                    <a class="footer__hiperLink" href="">Facebook</a>
                    <span>・</span>
                    <a class="footer__hiperLink" href="">Zalo</a>
                    <span>・</span>
                    <a class="footer__hiperLink" href="">Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
