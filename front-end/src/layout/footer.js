import {Link , NavLink} from 'react-router-dom'

const Footer =()=>{
    return(
        <>
<footer className="footer-area section_gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Top Products</h4>
          <ul>
            <li><NavLink to="#">Managed Website</NavLink></li>
            <li><NavLink to="#">Manage Reputation</NavLink></li>
            <li><NavLink to="#">Power Tools</NavLink></li>
            <li><NavLink to="#">Marketing Service</NavLink></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="#">Jobs</NavLink></li>
            <li><NavLink to="#">Brand Assets</NavLink></li>
            <li><NavLink to="#">Investor Relations</NavLink></li>
            <li><NavLink to="#">Terms of Service</NavLink></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Features</h4>
          <ul>
            <li><NavLink to="#">Jobs</NavLink></li>
            <li><NavLink to="#">Brand Assets</NavLink></li>
            <li><NavLink to="#">Investor Relations</NavLink></li>
            <li><NavLink to="#">Terms of Service</NavLink></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 single-footer-widget">
          <h4>Resources</h4>
          <ul>
            <li><NavLink to="#">Guides</NavLink></li>
            <li><NavLink to="#">Research</NavLink></li>
            <li><NavLink to="#">Experts</NavLink></li>
            <li><NavLink to="#">Agencies</NavLink></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 single-footer-widget">
          <h4>Newsletter</h4>
          <p>You can trust us. we only send promo offers,</p>
          <div className="form-wrap" id="mc_embed_signup">
            <form target="_blank" action=""
              method="get" className="form-inline">
              <input className="form-control" name="EMAIL" placeholder="Your Email Address" 
                 required="" type="email"/>
              <button className="click-btn btn btn-default">Subscribe</button>
              <div style={{position:"absolute" ,left:"-5000px" }}>
                <input name="b_36c4fd991d266f23781ded980_aefe40901a"  type="text" />
              </div>

              <div className="info"></div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom row align-items-center">

        <div className="col-lg-4 col-md-12 footer-social">
          <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
          <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
          <NavLink to="#"><i className="fa fa-dribbble"></i></NavLink>
          <NavLink to="#"><i className="fa fa-behance"></i></NavLink>
        </div>
      </div>
    </div>
  </footer>
        </>
    )
}

export default Footer;