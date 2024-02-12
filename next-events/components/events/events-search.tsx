'use client'
import { FormEvent } from 'react';

import style from './events-search.module.css';

export default function EventSearch({ handleNavigation }: { handleNavigation: any }) {
	
	const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const selectedYear = formData.get('year')
		const selectedMonth = formData.get('month')
		handleNavigation(selectedYear, selectedMonth);
	};

	return (
		<form className={style.form} onSubmit={submitFormHandler}>
			<div className={style.controls}>
				<div className={style.control}>
					<label htmlFor='year'>Year</label>
					<select id='year' name='year'>
						<option value='2021'>2021</option>
						<option value='2022'>2022</option>
					</select>
				</div>
				<div className={style.control}>
					<label htmlFor='month'>Month</label>
					<select id='month' name='month'>
						<option value='1'>January</option>
						<option value='2'>February</option>
						<option value='3'>March</option>
						<option value='4'>April</option>
						<option value='5'>May</option>
						<option value='6'>June</option>
						<option value='7'>July</option>
						<option value='8'>August</option>
						<option value='9'>September</option>
						<option value='10'>October</option>
						<option value='11'>November</option>
						<option value='12'>December</option>
					</select>
				</div>
			</div>	
				<button>Find Events</button>
		</form>
	);
}
