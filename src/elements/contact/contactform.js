import React, { useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

const ContactForm = ({url}) => {
    const { register, handleSubmit, errors } = useForm({
		mode: "onBlur"
	})
    const [serverState, setServerState] = useState({
		submitting: false,
		status: null
    });
    
	const [value, setValue] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
    });
    
    const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
			setValue({
				name: '',
				email: '',
				subject: '',
				message: ''
			})
		}
    };
    

    const onSubmit = (data, e) => {
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: url,
			data
		})
			.then(res => {
				handleServerResponse(true, "Thank you for reaching out! I will get back to you ASAP.", form);
			})
			.catch(err => {
				handleServerResponse(false, err.response.data.error, form);
			});
	}

    const isErrors = Object.keys(errors).length !== 0 && true;
	const onChangeHandler = e => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`form-group ${(isErrors && errors.name) ? 'has-error' : ''} ${value.name ? 'has-value' : ''}`}>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Full Name Required',
                    })}
                />
                <label htmlFor="name">Full Name</label>
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.email) ? 'has-error' : ''} ${value.email ? 'has-value' : ''}`}>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Email Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                <label htmlFor="email">Enter Your Email</label>
                {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.subject) ? 'has-error' : ''} ${value.subject ? 'has-value' : ''}`}>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Subject Required',
                    })}
                /> 
                <label htmlFor="subject">Subject</label> 
                {errors.subject && <span className="error">{errors.subject.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.message) ? 'has-error' : ''} ${value.message ? 'has-value' : ''}`}>
                <textarea
                    name="message"
                    id="message"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Message Required',
                        minLength: { value: 10, message: "Minimum length is 10" }
                    })}
                >
                </textarea>
                <label htmlFor="message">Write your message here.</label> 
                {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <div className="form-submit">
                <button className="rn-button" type="submit" disabled={serverState.submitting}>
                    Send Message
                </button>
                {serverState.status && (
                    <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                        {serverState.status.msg}
                    </p>
                )}
            </div>
        </form> 
    )
}

export default ContactForm;
