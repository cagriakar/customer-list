import { Avatar, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import ReactMapGL from 'react-map-gl';

const viewportOptions = {
	width: 'auto',
	height: 200,
	latitude: 40.7135,
	longitude: -74.0066,
	zoom: 12,
	pitch: 45,
	bearing: -17.6
};
const CustomerCard = ({ customer }) => {
	return (
		<>
			<CardHeader
				avatar={
					<Avatar
						aria-label={customer.full_name}
						alt={customer.full_name}
						src={customer.avatar}></Avatar>
				}
				title={<Typography gutterBottom>{customer.full_name}</Typography>}
				subheader={
					<>
						<Typography color='textSecondary' gutterBottom>
							{customer.email}
						</Typography>
						<Typography color='textSecondary'>{customer.gsm}</Typography>
					</>
				}
			/>
			<CardContent>
				<ReactMapGL
					{...viewportOptions}
					mapboxApiAccessToken={
						'pk.eyJ1IjoiZGVlYXllZW4iLCJhIjoiY2prdTN5Y2FzMDM4NDN3bXFpanU1czlsbSJ9.P5c7yYyqwVCc_r0ECm9A8Q'
					}
				/>
			</CardContent>
		</>
	);
};

export default CustomerCard;
