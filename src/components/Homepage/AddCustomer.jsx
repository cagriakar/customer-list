import {
	Box,
	Button,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Grid,
	Radio,
	Typography
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import React from 'react';
import { object, string } from 'yup';

export default function AddCustomer({ onClickProp }) {
	const validationSchema = object({
		email: string()
			.required('E-mail is mandatory!!!')
			.email('Please input a valid email')
			.max(100, 'Must be shorter than 100 characters'),

		customerType: string().oneOf(['real', 'legal']).required('You should select at least one')
	});

	const initialValues = {
		customerType: 'real',
		fullName: '',
		gsm: '',
		email: '',
		website: '',
		tckn: '',
		company: '',
		file: '',
		address: '',
		note: ''
	};

	const createAnotherRequest = () => onClickProp();
	const createRequest = () => onClickProp();

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema}>
			<Form>
				<Box mt={2} mb={2} pl={2}>
					<Typography variant='h5'>Create New Customer</Typography>
				</Box>
				<Container>
					<Box ml={1}>
						<FormGroup>
							<Field component={RadioGroup} name='customerType'>
								<FormLabel component='legend'>Customer Type</FormLabel>
								<FormGroup row>
									<FormControlLabel
										value='real'
										control={<Radio color='primary' />}
										label='Real'
									/>
									<FormControlLabel
										value='legal'
										control={<Radio color='primary' />}
										label='Legal'
									/>
								</FormGroup>
							</Field>
							<Field
								name='fullName'
								label='Full Name'
								type='text'
								inputMode='text'
								component={TextField}
								id='full-name'
								margin='dense'
								variant='outlined'
							/>
							<Field
								name='gsm'
								label='GSM'
								type='text'
								inputMode='tel'
								component={TextField}
								id='gsm'
								margin='dense'
								variant='outlined'
							/>
							<Field
								name='email'
								label='E-mail'
								type='email'
								inputMode='email'
								component={TextField}
								id='e-mail'
								placeholder='Input Your E-mail'
								margin='dense'
								variant='outlined'
							/>
							<Field
								name='website'
								label='Website'
								type='text'
								inputMode='url'
								component={TextField}
								id='web-site'
								margin='dense'
								variant='outlined'
							/>
							<Field
								name='tckn'
								label='TCKN/VKN'
								type='text'
								inputMode='numeric'
								component={TextField}
								id='tckn'
								margin='dense'
								variant='outlined'
							/>
							<Field
								name='company'
								label='Company'
								type='text'
								inputMode='text'
								component={TextField}
								id='company'
								margin='dense'
								variant='outlined'
							/>
							{/* <Field name='file' label='File' component={SimpleFileUpload} id='file' /> */}
							<Field
								name='address'
								label='Address'
								type='text'
								inputMode='text'
								component={TextField}
								id='address'
								margin='dense'
								variant='outlined'
							/>
							<Field
								name='note'
								label='Note'
								type='text'
								inputMode='text'
								component={TextField}
								id='note'
								margin='dense'
								variant='outlined'
							/>
						</FormGroup>
					</Box>
				</Container>
				<Box m={1} mb={2}>
					<Divider />
				</Box>
				<Container>
					<Grid container justify='flex-end' spacing={5} component={Box} m={1}>
						<Grid item>
							<Button
								type='submit'
								variant='outlined'
								color='primary'
								onClick={createAnotherRequest}
								style={{ textTransform: 'none' }}>
								Create Another
							</Button>
						</Grid>
						<Grid item>
							<Button
								type='submit'
								variant='outlined'
								color='primary'
								onClick={createRequest}
								style={{ textTransform: 'none' }}>
								Create
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Form>
		</Formik>
	);
}
