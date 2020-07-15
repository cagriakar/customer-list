import { Box, Container, Paper } from '@material-ui/core';
import React from 'react';

const PanelLayout = ({ children }) => {
	return (
		<Container>
			<Box mt={2} mb={2}>
				<Paper variant='outlined' square>
					{children}
				</Paper>
			</Box>
		</Container>
	);
};

export default PanelLayout;
