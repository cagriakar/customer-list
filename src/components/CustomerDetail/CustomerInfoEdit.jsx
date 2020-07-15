import { Box, Grid, InputLabel, makeStyles } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { object, string } from 'yup';

const useStyles = makeStyles({
	inlineStyle: {
		display: 'inline-block',
		position: 'relative',
		top: '10px',
		marginRight: '10px'
	}
});

const CustomerInfoEdit = ({ customer }) => {
	const classes = useStyles();
	const validationSchema = object({
		email: string()
			.required('E-mail is mandatory!!!')
			.email('Please input a valid email')
			.max(100, 'Must be shorter than 100 characters')
	});

	const initialValues = {
		fullname: `${customer.full_name}`,
		position: '',
		gsm: `${customer.gsm}`,
		email: `${customer.email}`
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema}>
			<Form>
				<Grid container component={Box} mb={2}>
					<Grid item xs={2}>
						<InputLabel htmlFor='fullname' className={classes.inlineStyle}>
							Full Name:
						</InputLabel>
					</Grid>
					<Grid item xs={6}>
						<Field
							name='fullname'
							type='text'
							inputMode='text'
							component={TextField}
							id='fullname'
							margin='dense'
							variant='outlined'
							className={classes.inputStyle}
						/>
					</Grid>
				</Grid>
				<Grid container component={Box} mb={2}>
					<Grid item xs={2}>
						<InputLabel htmlFor='position' className={classes.inlineStyle}>
							Position:
						</InputLabel>
					</Grid>
					<Grid item xs={6}>
						<Field
							name='position'
							component={TextField}
							select
							SelectProps={{
								native: true
							}}
							id='position'
							margin='dense'
							variant='outlined'>
							<option value='Select'>Select ...</option>
							<option value='Engineer'>Engineer</option>
							<option value='Inspector'>Inspector</option>
							<option value='Chief'>Chief</option>
							<option value='Worker'>Worker</option>
						</Field>
					</Grid>
				</Grid>
				<Grid container component={Box} mb={2}>
					<Grid item xs={2}>
						<InputLabel htmlFor='gsm-number' className={classes.inlineStyle}>
							GSM Number:
						</InputLabel>
					</Grid>
					<Grid item xs={6}>
						<Field
							name='gsm'
							type='text'
							inputMode='tel'
							component={TextField}
							id='gsm-number'
							margin='dense'
							variant='outlined'
							className={classes.inputStyle}
						/>
					</Grid>
				</Grid>
				<Grid container component={Box} mb={2}>
					<Grid item xs={2}>
						<InputLabel htmlFor='e-mail' className={classes.inlineStyle}>
							E-mail address:
						</InputLabel>
					</Grid>
					<Grid item xs={6}>
						<Field
							name='email'
							type='text'
							inputMode='email'
							component={TextField}
							id='e-mail'
							placeholder='Please input an E-mail ...'
							margin='dense'
							variant='outlined'
							className={classes.inputStyle}
						/>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default CustomerInfoEdit;
