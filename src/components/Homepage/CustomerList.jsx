/* eslint-disable react/display-name */
import { Avatar, Button, FormControlLabel, Grid, Switch } from '@material-ui/core';
import MaterialTable, { MTableBodyRow } from 'material-table';
import React, { useState } from 'react';
import { tableIcons } from '../../assets/tableIcons';

const CustomerList = ({ customers }) => {
	const goTo = (param) => window.location.assign(`${window.location.href}customer/${param}`);

	const [isDense, setIsDense] = useState(false);

	const handleChangeDense = () => setIsDense(!isDense);

	return (
		<>
			<MaterialTable
				icons={tableIcons}
				title='Customer List'
				components={{
					Action: (props) => (
						<Button
							onClick={(event) => props.action.onClick(event, props.data)}
							color='primary'
							variant='outlined'
							style={{
								textTransform: 'none',
								marginRight: '15px',
								marginLeft: '15px',
								width: '150px'
							}}>
							{props.action.tooltip === 'Update Customer' ? 'Update' : 'Delete'}
						</Button>
					),
					Row: (props) => <MTableBodyRow {...props} />
				}}
				options={{
					filtering: true,
					padding: `${isDense ? 'dense' : 'default'}`,
					actionsColumnIndex: -1,
					search: false
				}}
				columns={[
					{
						title: '',
						field: 'first_name',
						render: (rowData) => (
							<Grid container justify='center'>
								<Avatar alt={rowData.full_name}>
									{rowData.first_name.charAt(0) + rowData.last_name.charAt(0)}
								</Avatar>
							</Grid>
						),
						filtering: false
					},
					{
						title: 'Customer Name',
						field: 'full_name'
					},
					// {
					// 	title: 'Type',
					// 	field: 'type',
					// 	lookup: { real: 'Real', legal: 'Legal' }
					// },
					{ title: 'Related Firm', field: 'company' },
					{ title: 'Address', field: 'address' },
					{ title: 'GSM', field: 'gsm', filtering: false },
					{ title: 'Email', field: 'email' },
					{
						title: 'Portal Information',
						field: 'password',
						filtering: false
					}
				]}
				data={customers}
				actions={[
					{
						tooltip: 'Update Customer',
						onClick: (event, rowData) => goTo(rowData.id)
					},
					{
						tooltip: 'Delete Customer',
						onClick: (event, rowData) =>
							alert('Are you sure you want to delete ' + rowData.full_name)
					}
				]}
			/>
			<FormControlLabel
				control={<Switch checked={isDense} onChange={handleChangeDense} />}
				label='Dense padding'
			/>
		</>
	);
};

export default CustomerList;
