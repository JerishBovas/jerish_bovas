import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d7xia8j', 'template_cowaovc', form.current, '5QDSUxpOTC_ex4zTv')
      .then((result) => {
        document.getElementById("user_name").value = ""
        document.getElementById("user_email").value = ""
        document.getElementById("message").value = ""
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <h1 className="text-center">Contact</h1>
      <div className="container mt-5 mb-5">
          <div style={{width: '90%',margin: 'auto'}} className="row container">
              <div className="col-4 fs-5">
                  <p><i className="fas fa-solid fa-code"></i> &nbsp;&nbsp;<a style={{textDecoration: 'none', color: 'white'}} href="https://www.jerishbovas.com">Jerish Bradly Bovas</a></p>
                  <p><i className="fas fa-solid fa-phone"></i> &nbsp;&nbsp;<a style={{textDecoration: 'none', color: 'white'}} href="tel:+14372479838">+1 (437) 247-9838</a></p>
                  <p><i className="fas fa-solid fa-envelope"></i>&nbsp;&nbsp; <a style={{textDecoration: 'none', color: 'white'}} href="mailto:jerishbradlyb@gmail.com">jerishbradlyb@gmail.com</a></p>
                  <p><svg style={{width: '16px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill='white' d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>&nbsp;&nbsp; <a style={{textDecoration: 'none', color: 'white'}} href="https://www.google.com/maps/place/Etobicoke,+Toronto,+ON/@43.6723664,-79.6228499,12z/data=!3m1!4b1!4m5!3m4!1s0x882b3760d44c33c5:0x59e9c8bf2149d577!8m2!3d43.6204946!4d-79.5131983">Etobicoke, Toronto, CA M9W 3G5</a></p>
              </div>
              <div className="col-4 fs-5" style={{borderLeft: '1px solid grey'}}>
                  <div style={{margin: 'auto',width: '50%'}}>
                      <p><i className="fa fa-brands fa-github"></i> &nbsp;<a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/JerishBovas">Jerish Bovas</a></p>
                      <p><i className="fa fa-brands fa-linkedin"></i> &nbsp;<a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/jerishbovas/"> jerishbovas</a></p>
                      <p><i className="fa fa-brands fa-instagram"></i> &nbsp;<a style={{textDecoration: 'none', color: 'white'}} href="https://www.instagram.com/bradlyjerish/">Bradly Jerish</a></p>
                      <p><i className="fa fa-brands fa-twitter"></i> &nbsp;<a style={{textDecoration: 'none', color: 'white'}} href="https://twitter.com/bovasjerish">Bovas Jerish</a></p>
                  </div>
              </div>
              <div className="col-4 fs-5" style={{borderLeft: '1px solid grey'}}>
                <div style={{margin: 'auto',width: '80%'}}>
                  <form  ref={form} onSubmit={sendEmail}>
                    <div style={{marginBottom: '20px'}}>
                      <input type="text" className="form-control" placeholder="Name" id='user_name' name="user_name" required/>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                      <input type="email" className="form-control" placeholder="Email" id='user_email' name="user_email" required/>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                      <textarea className="form-control" placeholder="Type your message here" id='message' name="message" required/>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                      <input type="submit" value="Send"  className="btn btn-primary"/>
                    </div>
                  </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}