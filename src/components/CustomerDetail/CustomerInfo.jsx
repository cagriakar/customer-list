import {
	Box,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	Typography
} from '@material-ui/core';
import React from 'react';

const CustomerInfo = ({ customer }) => {
	return (
		<Container>
			<Grid component={Box} mb={1}>
				<FormControl component='fieldset'>
					<FormLabel component='legend'>Customer Type</FormLabel>
					<RadioGroup
						row
						aria-label='position'
						name='position'
						defaultValue={customer.type}>
						<FormControlLabel
							value='real'
							control={<Radio color='primary' />}
							label='Real'
							labelPlacement='real'
							disabled
							style={{ marginRight: '50px' }}
						/>
						<FormControlLabel
							value='legal'
							control={<Radio color='primary' />}
							label='Legal'
							labelPlacement='legal'
							disabled
						/>
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid container component={Box} mb={1}>
				<Grid item xs={5}>
					<Typography variant='body1' color='textSecondary'>
						Website:
					</Typography>
				</Grid>
				<Grid item xs={7}>
					<Typography variant='body1' color='textSecondary' align='right'>
						{customer.website}
					</Typography>
				</Grid>
			</Grid>
			<Grid container component={Box} mb={1}>
				<Grid item xs={5}>
					<Typography variant='body1' color='textSecondary'>
						TCKN/VKN:
					</Typography>
				</Grid>
				<Grid item xs={7}>
					<Typography variant='body1' color='textSecondary' align='right'>
						{customer.tckn}
					</Typography>
				</Grid>
			</Grid>
			<Grid container component={Box} mb={1}>
				<Grid item xs={5}>
					<Typography variant='body1' color='textSecondary'>
						Related Firm:
					</Typography>
				</Grid>
				<Grid item xs={7}>
					<Typography variant='body1' color='textSecondary' align='right'>
						{customer.company}
					</Typography>
				</Grid>
			</Grid>
			<Grid container component={Box} mb={1}>
				<Grid item xs={5}>
					<Typography variant='body1' color='textSecondary'>
						File:
					</Typography>
				</Grid>
				<Grid item xs={7}>
					<Typography variant='body1' color='textSecondary' align='right'>
						File.xlsx
					</Typography>
				</Grid>
			</Grid>
			<Grid container component={Box} mb={1}>
				<Grid item xs={5}>
					<Typography variant='body1' color='textSecondary'>
						Note:
					</Typography>
				</Grid>
				<Grid item xs={7}>
					<Typography variant='body1' color='textSecondary' align='right'>
						{customer.note}
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CustomerInfo;
