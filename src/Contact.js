import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import "./Contact.css";
import content from "./static";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
  company: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required("Please enter valid email").email(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export const Contact = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
   
  const { register, handleSubmit, errors } = useForm(
    {
      resolver: yupResolver(schema),
    }
  );

  const onSubmit = (data) => console.log(data);


  return (
    <div className="row">
      <div className="col-md-4 text">
        <h1>
          Finding digital <br /> solutions for <br /> the World.
        </h1>
      </div>
      <div className="col-md-7 form__margin">
        <div className="container contact__container">
          <div className="row contact_form_row">
            <div className="col-md-6">
              <h1>Contact Us</h1>
              <form onSubmit={handleSubmit(onSubmit)}
                id="contactForm"
                className="contact-form"
              >
                {content.inputs.map((input, key) => {
                  return (
                    <div key={key}>
                      <div className="form-group">
                        <div className="controls">
                          {input.name !== "message" ? (
                            <input
                              name={input.name}
                              id="company"
                              className="form-control"
                              placeholder={input.placeholder}
                              type={input.type}
                              ref={register}
                            />
                            
                          ) : (
                            <textarea
                              name={input.name}
                              id="message"
                              rows="7"
                              placeholder={input.placeholder}
                              className="form-control"
                              type={input.type}
                              ref={register}
                            ></textarea>
                          )}
                        </div>
                        
                      </div>
                      <p className="messages">{ errors[input.name]?.message}</p>
                    </div>
                  );
                })}

                <button type="submit" id="submit" className="btn btn-effect" disabled>
                  {" "}
                  Send <i class="far fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="information contact__info">
                <h2>GASTROWN</h2> <br />
                <div className="contact-datails">
                  <p>
                    <i class="fa fas fa-phone-alt"></i> Phone: +4915214713789{" "}
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i> Email: sales@gastrown.com{" "}
                    <br />
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt "></i>Address: Plot 4, off
                    Odili Road,
                    <br /> <span className="pad">Port Harcourt, Rivers State.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
