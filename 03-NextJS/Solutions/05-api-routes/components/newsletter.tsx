import classes from './newsletter-registration.module.css';
import type { NextPage } from "next"
import React, { FormHTMLAttributes } from 'react';

const NewsletterRegistration: NextPage = () => {
	const [email, setEmail] = React.useState("")
	async function registrationHandler(event: React.SyntheticEvent) {
		event.preventDefault();
		try {
			// Send to an API
			const response = await fetch("/api/newsletter", {
				method: "POST",
				body: JSON.stringify({
					email,
				})
			})

			const data = await response.json()
			console.log(data)
			setEmail("")
		} catch (error) {
			console.log(error)
		}

	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;