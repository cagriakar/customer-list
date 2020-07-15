import { Box, Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './assets/theme';
import CustomerDetail from './components/CustomerDetail/CustomerDetail';
import Homepage from './components/Homepage/Homepage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth={false}>
				<Box mt={2}>
					<Router>
						<Switch>
							<Route path='/customer/:id' component={CustomerDetail} />

							<Route exact path='/' component={Homepage} />
						</Switch>
					</Router>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
