import { Button, Drawer, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import customersData from '../../assets/fake_info_schema';
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';

const useStyles = makeStyles((theme) => ({
	button: {
		fontSize: '1rem',
		fontWeight: '800'
	},
	drawer: {
		width: '30vw'
	}
}));

function Homepage() {
	const classes = useStyles();
	const { drawer } = classes;

	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	const handleCreateOnClick = () => setIsSideBarOpen(true);
	const handleOnClickProp = () => setIsSideBarOpen(false);

	return (
		<Grid
			container
			spacing={2}
			direction='column'
			justify='flex-start'
			alignItems='center'
			alignContent='stretch'>
			<Grid item container justify='flex-end'>
				<Grid item xs={2}>
					<Button
						color='primary'
						variant='outlined'
						size='large'
						className={classes.button}
						onClick={handleCreateOnClick}>
						Create
					</Button>
				</Grid>
			</Grid>
			<Grid item>
				<CustomerList customers={customersData} />
			</Grid>
			<Drawer
				anchor='right'
				elevation={5}
				open={isSideBarOpen}
				onClose={handleOnClickProp}
				PaperProps={{ className: drawer }}>
				<AddCustomer onClickProp={handleOnClickProp} />
			</Drawer>
		</Grid>
	);
}

export default Homepage;
