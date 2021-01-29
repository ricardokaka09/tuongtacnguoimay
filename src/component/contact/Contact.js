import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="contact">
            <div className="container-aboutus">
        <div className="row">
          <div className="col-50" style={{marginRight: '20px'}}>
            <div className="row">
              <div className="map_nho">Bản đồ</div>
            </div>
            <div className="row" style={{paddingTop: '20px'}}>
              <div style={{width: '100px', fontWeight: 'bold'}}>Địa chỉ:</div><div style={{width: '400px'}}> 41 Lê Duẩn, Hải Châu, TP.Đà Nẵng </div>
            </div>
            <div className="row">
              <div style={{width: '100px', fontWeight: 'bold'}}>Điện thoại:</div><div style={{width: '400px'}}> 0914456223 </div>
            </div>
            <div className="row">
              <div style={{width: '100px', fontWeight: 'bold'}}>Fax:</div><div style={{width: '400px'}}> 0236.6.552.688 </div>
            </div>
            <div className="row" style={{paddingBottom: '20px'}}>
              <div style={{width: '100px', fontWeight: 'bold'}}>Email:</div><div style={{width: '400px'}}> Amart@gmail.com </div>
            </div>
            <div className="row">
              <iframe width="100%" height={288} style={{marginBottom: '10px', padding: '1px', border: 'solid 1px #8ca1c8'}} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.894177112461!2d108.21735666!3d16.0709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421836b46f422b%3A0x463eab6243ccd7a7!2zxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1489872891185" />
            </div>
          </div>
          <div className="col-50" style={{marginLeft: '20px'}}>
            <form action="/" method="POST">
              <div className="row">
                <div className="map_nho" style={{marginLeft:'70px'}}>Thông tin liên hệ</div>
              </div>
              <div className="row" style={{paddingTop: '20px'}}>
                <div style={{width: '100px', fontWeight: 'bold', marginLeft: '70px', paddingTop: '12px'}}>Họ và tên</div><div style={{width: '400px'}}><input type="text" id="fname" name="firstname" placeholder="Nhập tên của bạn" className="info" /></div>
              </div>
              <div className="row">
                <div style={{width: '100px', fontWeight: 'bold', marginLeft: '70px', paddingTop: '12px'}}>Email</div><div style={{width: '400px'}}><input type="text" id="femail" name="email" placeholder="Địa chỉ email của bạn" className="info" /></div>
              </div>
              <div className="row">
                <div style={{width: '100px', fontWeight: 'bold', marginLeft: '70px', paddingTop: '12px'}}>Nội dung</div><textarea name="content" id="content" cols={30} rows={10} className="info" style={{marginLeft: '70px'}} defaultValue={""} />
              </div>		
              <div className="row" style={{marginLeft: '500px'}}>
                <div className="btn-aboutus">
                  <input type="submit" name="submit-aboutus" defaultValue="Gửi" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
        </div>
    )
}

export default Contact
