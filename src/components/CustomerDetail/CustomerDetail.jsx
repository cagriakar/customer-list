import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import costumersData from '../../assets/fake_info_schema';
import CustomerCard from './CustomerCard';
import CustomerInfo from './CustomerInfo';
import CustomerInfoEdit from './CustomerInfoEdit';
import PanelLayout from './PanelLayout';

console.log('costumersData', costumersData);
const useStyles = makeStyles({
	tabs: {
		height: '8vh'
	},
	tab: {
		marginTop: '1vh'
	},
	heightClass: {
		height: '80vh'
	}
	// heightClass2: {
	// 	height: '90vh'
	// }
});

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

const CustomerDetail = ({ match }) => {
	const {
		params: { id }
	} = match;

	const costumerData = costumersData.filter((customer) => customer.id === Number(id));

	const classes = useStyles();

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const underDevelopmentTabs = [
		'Calls',
		'Visits',
		'Products',
		'Orders',
		'Maintenance Calendar',
		'Current',
		'Invoice',
		'Privileges',
		'Portal Info'
	];

	return (
		<Grid container spacing={1}>
			<Grid item container sm={12} md={3} className={classes.heightClass2}>
				<Grid item container direction='column'>
					<CustomerCard customer={costumerData[0]} />
				</Grid>
				<Grid item container>
					<CustomerInfo customer={costumerData[0]} />
				</Grid>
			</Grid>
			<Grid item sm={12} md={9}>
				<Paper elevation={5}>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor='primary'
						textColor='primary'
						variant='scrollable'
						className={classes.tabs}>
						<Tab label='Related' className={classes.tab} />
						{underDevelopmentTabs.map((tab, index) => (
							<Tab
								key={index}
								label={tab}
								{...a11yProps(index + 1)}
								className={classes.tab}
							/>
						))}
					</Tabs>
					<Box mt={1}>
						<Divider />
					</Box>
					<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
						<PanelLayout>
							<TabPanel value={value} index={0} className={classes.heightClass}>
								<CustomerInfoEdit customer={costumerData[0]} />
							</TabPanel>
						</PanelLayout>
						{underDevelopmentTabs.map((tab, index) => (
							<PanelLayout key={index}>
								<TabPanel
									value={value}
									index={index + 1}
									className={classes.heightClass}>
									<Typography>Under Development...</Typography>
								</TabPanel>
							</PanelLayout>
						))}
					</SwipeableViews>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default CustomerDetail;
