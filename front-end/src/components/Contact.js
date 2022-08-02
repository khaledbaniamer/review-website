import React from "react";

class Contact extends React.Component {


    
    render() { 
        return (
            <>
            <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                    <div class="banner_content d-md-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-md-0">
                        <h1>Contact Us</h1>
                        {/* <p>Very us move be blessed multiply night</p> */}
                        </div>
                       
                    </div>
                    </div>
                </div>
            </section>




            <section class="section_gap">
                <div class="container">
                <div class="d-none d-sm-block mb-5 pb-4">

                <div class="row">
                    <div class="col-12">
                    <h2 class="contact-title">Our Location</h2>
                    </div>
                    <div class="col-lg-8 mb-4 mb-lg-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53808.14862067537!2d35.81239008901942!3d32.55259734399038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76916dac0453%3A0x5416e113d81f7d82!2sIrbid!5e0!3m2!1sen!2sjo!4v1659178482045!5m2!1sen!2sjo" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                    </div>

                    <div class="col-lg-4">
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-home"></i></span>
                        <div class="media-body">
                        <h3>Jordan, Irbid.</h3>
                        <p>0096277809091</p>
                        </div>
                    </div>
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                        <div class="media-body">
                        <h3><a href="tel:454545654">00 (962) 77777777</a></h3>
                        <p>Sun to Thu 9am to 5pm</p>
                        </div>
                    </div>
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-email"></i></span>
                        <div class="media-body">
                        <h3><a href="mailto:review@review.com">review@review.com</a></h3>
                        <p>Send us your query anytime!</p>
                        </div>
                    </div>
                        <a href="mailto:someone@example.com" type="submit" class="main_btn">Direct Email</a>
                    </div>
                </div>
                </div>
                </div>
            </section>
            </>
        );
    }
}
 
export default Contact;