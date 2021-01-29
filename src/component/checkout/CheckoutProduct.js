import React from 'react'

const CheckoutProduct = () => {
    return (
        <>
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Checkout</h2>
                  <div className="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <span>Thanh toán</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Checkout Section Begin */}
        <section className="checkout spad">
          <div className="container">
            <form action="/" method="POST">
              <div className="row">
                <div className="col-75">
                  <div className="container02">
                    <div className="row">
                      <div className="col-50">
                        <p className="title-step">1. Chọn hình thức giao hàng</p>
                        <div className="method-inner">
                          <label htmlFor="standard"><input type="radio" id="standard" name="delivery" defaultValue="standard" defaultChecked /> Giao hàng tiêu chuẩn</label>
                          <label htmlFor="fast"><input type="radio" id="fast" name="delivery" defaultValue="fast" /> Giao hàng nhanh</label>
                        </div>
                      </div>
                      <div className="col-50" />
                    </div>
                    <div className="row">
                      <div className="col-50">
                        <p className="title-step">2. Chọn hình thức thanh toán</p>
                        <div className="method-inner">
                          <label htmlFor="cod"><input type="radio" id="cod" name="payment" defaultValue="cod" defaultChecked /><img className="method-icon" width={32} src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg" alt="cod" /> Thanh toán khi nhận hàng</label>
                          <label htmlFor="online"><input type="radio" id="online" name="payment" defaultValue="online" /><img className="method-icon" width={32} src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg" alt="cybersource" /> Thanh toán online</label>
                        </div>
                        <div className="FormForVNPAY">
                          <div className="form-group" style={{marginBottom: '40px'}}>
                            <label htmlFor="type_product">Loại hàng hóa </label>
                            <input className="form-control" id="order_type" name="order_type" type="text" defaultValue="Thanh toán hóa đơn tại Amart" readOnly />
                          </div>
                          <div className="form-group" style={{marginBottom: '40px'}}>
                            <label htmlFor="order_id">Mã hóa đơn</label>
                            <input className="form-control" id="order_id" name="order_id" type="text" defaultValue="HD0001" readOnly />
                          </div>
                          <div className="form-group" style={{marginBottom: '40px'}}>
                            <label htmlFor="amount">Số tiền</label>
                            <input className="form-control" id="amount" name="amount" type="number" defaultValue={575000} readOnly />
                          </div>
                          <div className="form-group" style={{marginBottom: '40px'}}>
                            <label htmlFor="order_desc">Nội dung thanh toán</label>
                            <textarea className="form-control" cols={20} id="order_desc" name="order_desc" rows={2} defaultValue={"Thanh toán hóa đơn"} />
                          </div>
                          <div className="form-group" style={{marginBottom: '40px'}}>
                            <label htmlFor="language">Ngôn ngữ</label>
                            <select name="language" id="language" className="form-control">
                              <option value="vn">Tiếng Việt</option>
                              <option value="en">English</option>
                            </select>
                          </div>
                          <div className="form-group" style={{marginBottom: '40px'}}>
                            <label htmlFor="bank_code">Ngân hàng</label>
                            <select name="bank_code" id="bank_code" className="form-control">
                              <option value>Không chọn</option>
                              <option value="NCB"> Ngan hang NCB</option>
                              <option value="AGRIBANK"> Ngan hang Agribank</option>
                              <option value="SCB"> Ngan hang SCB</option>
                              <option value="SACOMBANK">Ngan hang SacomBank</option>
                              <option value="EXIMBANK"> Ngan hang EximBank</option>
                              <option value="MSBANK"> Ngan hang MSBANK</option>
                              <option value="NAMABANK"> Ngan hang NamABank</option>
                              <option value="VNMART"> Vi dien tu VnMart</option>
                              <option value="VIETINBANK">Ngan hang Vietinbank</option>
                              <option value="VIETCOMBANK"> Ngan hang VCB</option>
                              <option value="HDBANK">Ngan hang HDBank</option>
                              <option value="DONGABANK"> Ngan hang Dong A</option>
                              <option value="TPBANK"> Ngân hàng TPBank</option>
                              <option value="OJB"> Ngân hàng OceanBank</option>
                              <option value="BIDV"> Ngân hàng BIDV</option>
                              <option value="TECHCOMBANK"> Ngân hàng Techcombank</option>
                              <option value="VPBANK"> Ngan hang VPBank</option>
                              <option value="MBBANK"> Ngan hang MBBank</option>
                              <option value="ACB"> Ngan hang ACB</option>
                              <option value="OCB"> Ngan hang OCB</option>
                              <option value="IVB"> Ngan hang IVB</option>
                              <option value="VISA"> Thanh toan qua VISA/MASTER</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-50">
                        <input type="submit" defaultValue="ĐẶT MUA" className="btn" />
                        <p>(Vui lòng kiểm tra lại đơn hàng trước khi đặt mua)</p>
                      </div>
                      <div className="col-50" />
                    </div>
                  </div>
                </div>
                <div className="col-25">
                  <div className="row">
                    <div className="container02">
                      <div className="title">
                        <span>Địa chỉ giao hàng</span>
                        <a href="Address.html">Sửa</a>
                      </div>
                      <div className="address">
                        <span className="name">Nguyễn Văn A</span>
                        <span className="street">133 Lê Văn Hiến, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, Đà Nẵng Việt Nam</span>
                        <span className="phone">0945926577</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="container02">
                      <div className="title">
                        <span>Đơn hàng (1 sản phẩm)</span>
                        <a href="shoping-cart.html">Sửa</a>
                      </div>
                      <div className="product">
                        <div className="info">
                          <strong className="qty">2 x</strong>
                          <a href="/" target="_blank" className="product-name">Tai Nghe True Wireless Không Dây QCY T1C APP+ Bluetooth V5.0 - Hàng Chính Hãng</a>
                        </div>
                        <div className="price">
                          <span>210.000 đ</span>
                        </div>
                      </div>
                      <div className="product">
                        <div className="info">
                          <strong className="qty">2 x</strong>
                          <a href="/" target="_blank" className="product-name">Tai Nghe True Wireless Không Dây QCY T1C APP+ Bluetooth V5.0 - Hàng Chính Hãng</a>
                        </div>
                        <div className="price">
                          <span>210.000 đ</span>
                        </div>
                      </div>
                      <div className="price-summary">
                        <div className="inner">
                          <span>Tạm tính</span>
                          <span>525.000 đ</span>
                        </div>
                        <div className="inner">
                          <span>Phí vận chuyển</span>
                          <span>20.000 đ</span>
                        </div>
                        <div className="total">
                          <span>Thành tiền</span>
                          <span className="value">575.000 đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        </>
    )
}

export default CheckoutProduct
