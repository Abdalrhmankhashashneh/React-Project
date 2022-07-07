import { useState } from "react";
// import emailjs from 'emailjs-com'



export default function Contact() {
  const [ name , setName] = useState('');
  const [ email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
 const [err , setErr]=useState(false);
 const [isValid, setIsValid] = useState(false);
 const [msg , setMsg]=useState('');
 
  



  const handleNamechange=(e)=>{
    setName(e.target.value);
    let item= e.target.value ;
    if (item.length<5){
     setErr(true)
    }
    else{
      setErr(false)
    }
   
  }



  const handleEmailchange=(e)=>{
  const emailRegex = /\S+@\S+\.\S+/;
    setEmail(e.target.value);

    if (emailRegex.test(email)) {
      setIsValid(true);
      setMsg('Your email looks good!');
    } else {
      setIsValid(false);
      setMsg('Please enter a valid email!');
    }
    
  }

  const handleMessagechange=(e)=>{
    setMessage(e.target.value);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    if (name && email && message){
console.log(name , email , message);
// let item = e.target.value;
// if (item.length<4){
//   alert('something wrong')
//  }
//  else{
//    alert('true')
//  }

alert('your message has been sent');
     

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    }

  
  }





    return (
    
        <section id="contact" className="contact"  style={{marginTop:'90px'}}>
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>



          <div className="container" data-aos="fade-up">

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location :</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="open-hours">
                    <i className="bi bi-clock"></i>
                    <h4>Open Hours :</h4>
                    <p>
                     Saturday-Thursday :<br />
                      11:00 AM - 23:00 PM
                    </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email :</h4>
                    <p>restaurantly@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call :</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                <form role="form" className="php-email-form">
                  <div className="row">
                    
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" value={name}  onChange={handleNamechange} placeholder="Your Name"  />
                    {err?<span style={{color:'white'}}>Your name must be at least 5 charachters</span>:null}
                     
                    </div>
                    
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" value={email} onChange={handleEmailchange} placeholder="Your Email"  />
                      <div className={`msg ${isValid ? 'success' : 'error'}`}>
                      {msg}
                     </div>
                    </div>
                  </div>
                   {/* <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>  */}
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="8" value={message}  onChange={handleMessagechange} placeholder="Message" />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit" onClick={handleSubmit}>Send Message</button></div>
                  {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
                </form>
                
              </div>
                
            </div>
                
          </div>
        </section>
                
       
    );
                
}