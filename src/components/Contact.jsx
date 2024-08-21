import React from "react";
import { useState } from "react";

// Stylesheet
import "../components/styles/Contact.css";
import { validateEmail } from "../components/utils/ValidateEmail";

// Modal component
import Modal from "./utils/Modal";

// Modal Email sent icon
import emailSentIcon from "../assets/icons/emailsent.png"

const EMAIL_API_KEY = import.meta.env.PUBLIC_EMAIL_API_KEY;

const Contact = () => {
  const [name, setName] = useState({
    value: "",
    isTouched: false,
  });

  const [lastName, setLastName] = useState({
    value: "",
    isTouched: false,
  });

  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });

  const [message, setMessage] = useState({
    value: "",
    isTouched: false,
  });

  const [emailSent,setEmailSent] = useState(false);
  
  const handleSubmit = async (e) => {

    // Prevent that the form reload the page
    e.preventDefault();

    // Get the data from the form
    const formData = new FormData(e.target);

    // Append the api key to the form data
    formData.append("access_key",`${EMAIL_API_KEY}`);

    // Parsing the data form to an object
    const object= Object.fromEntries(formData);

    // Parsing the object to json
    const json = JSON.stringify(object);

    try {

      const response = await fetch('https://api.web3forms.com/submit', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           "Accept":"application/json"
        },
        body: json
        }).then((response) => response.json())

        if (response.success) {
          setEmailSent(true);
          console.log("Sucess",response.message);
          clearForm();
        }

    } catch (e) {

      console.log("There was an error" + e)
      setEmailSent(false);

    }

    
  };

  const clearForm = () => {

    setName({value: "",
      isTouched: false
    })

    setLastName({value: "",
      isTouched: false
    })

    setEmail({value: "",
      isTouched: false
    })

    setMessage({value: "",
      isTouched: false
    })

  }

 

  const isFormValid = () => {

    // Validating the data of the form, return true is everything is correct and false otherwise

    return (

      name.value.length >= 2 && name.value.length <= 20 && lastName.value.length >= 2 && lastName.value.length <= 20 && validateEmail(email.value) && message.value.length >= 2

    )

  }

  return (
    <>
    {emailSent === true ? (<Modal toggleShow={setEmailSent} icon={emailSentIcon.src} title="EMAIL SENT" message="Your email has been sent successfully, thanks for contacting me." />) : null}
      <section
        id="contact"
        className="contact-section w-full h-full flex flex-row gap-10 py-20 justify-between items-center"
      >
        <div className="contact-info w-1/2 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-4xl text-accent">CONTACT</h2>
            <p className="max-w-sm opacity-70 text-balance text-justify">
              Thank you for exploring my portfolio! I'm passionate about
              crafting meaningful digital experiences and solving complex
              problems through design and development. If you're in need of a
              dedicated and creative mind to bring your projects to life, I'd
              love to hear from you. I'm here to collaborate and make your
              vision a reality. Let's connect and discuss how we can work
              together to achieve your goals.
            </p>
          </div>

          <div className="email flex flex-col justify-center items-center gap-1">
            <h3 className="text-xl text-white opacity-90">Email</h3>
            <p className="text-white text-lg opacity-70">
              dev.johanefelizu@gmail.com
            </p>
          </div>
        </div>

        <div className="contact-form w-1/2 flex flex-col gap-5 justify-center items-center px-20 py-10">
          <header className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-accent">CONTACT FORM</h2>
            <p className="text-xl opacity-70">
              Let's get in touch and create awesome websites.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            id="contactform"
            action=""
            className="flex flex-col gap-4 w-full"
          >
            <div className="input-group flex flex-col py-3">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name *"
                className="input"
                value={name.value}
                onChange={(e) => setName({ ...name, value: e.target.value })}
                onBlur={(e) => setName({...name, isTouched: true})}
              />
              <label htmlFor="name" className="label">
                Name *
              </label>
              {name.value.length < 2 && name.isTouched ? (<span className="text-accent py-1">Your name must be at least 2 characters</span>) : null }
            </div>

            <div className="input-group flex flex-col py-3">
              <input
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Last name *"
                className="input"
                value={lastName.value} 
                onChange={e => setLastName({...lastName, value: e.target.value})}
                onBlur={(e) => setLastName({...lastName, isTouched: true})}
              />
              <label htmlFor="lastname" className="label">
                Last name *
              </label>
              {lastName.value.length < 2 && lastName.isTouched ? (<span className="text-accent py-1">Your last name must be at least 2 characters</span>) : null }
            </div>

            <div className="input-group flex flex-col py-3">
              <input
                name="email"
                id="email"
                type="text"
                placeholder="E-mail *"
                className="input"
                value={email.value} 
                onChange={e => setEmail({...email, value: e.target.value})}
                onBlur={(e) => setEmail({...email, isTouched: true})}
              />
              <label htmlFor="email" className="label">
                E-mail *
              </label>
              {validateEmail(email.value) === false && lastName.isTouched ? (<span className="text-accent py-1">Invalid email</span>) : null }
            </div>

            <div className="input-group flex flex-col pt-5">
              <textarea
                name="message"
                id="message"
                placeholder="Message *"
                className="textarea min-h-[200px] max-h-[300px]"
                value={message.value} 
                onChange={e => setMessage({...message, value: e.target.value})}
                onBlur={(e) => setMessage({...message, isTouched: true})}
              ></textarea>
              <label htmlFor="message" className="textarealabel text-[#9da4b0]">
                Message *
              </label>
              {/* {message.value === "" && message.isTouched ? (<span className="text-accent py-1">You must enter a message</span>) : null } */}
              {message.value.length < 2 && message.isTouched ? (<span className="text-accent py-1">Your message must include a message</span>) : null }
            </div>
            <div className="flex justify-center items-center pt-5">
              <button
                id="submitbtn"
                type="submit"
                className="main-link flex flex-row justify-center items-center hvr-bounce-to-right px-5 py-3 max-w-52 gap-2"
                /* Due to "isFormValid" return true when the form validation is correct, we must use ! , because "disabled" is enabled when is true, so if isFormValid
                   is true "disable" have to be false
                */
                disabled={!isFormValid()}
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100.000000pt"
                  height="100.000000pt"
                  viewBox="0 0 100.000000 100.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="size-5"
                >
                  <g
                    transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M475 782 c-204 -75 -376 -141 -383 -145 -7 -5 -12 -20 -12 -35 0 -40
                      173 -212 213 -212 21 0 76 40 227 165 l200 165 -165 -200 c-127 -153 -165
                      -206 -165 -227 0 -22 20 -48 93 -121 93 -93 129 -111 155 -79 15 19 282 759
                      282 783 0 27 -19 44 -49 43 -15 0 -193 -62 -396 -137z"
                    ></path>
                  </g>
                </svg>

                <span className="text-xl pb-1">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
