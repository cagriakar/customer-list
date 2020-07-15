import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
	// palette: {
	// 	primary: {
	// 		main: '#19857b'
	// 	},
	// 	secondary: {
	// 		main: '#19857b'
	// 	},
	// 	background: {
	// 		default: '#fff'
	// 	}
	// },
	overrides: {
		// Style sheet name ⚛️
		MuiTab: {
			// Name of the rule
			root: {
				// Some CSS
				textTransform: 'none'
			}
		},
		MuiCardHeader: {
			content: {
				paddingLeft: '1rem'
			}
		},
		MuiTextField: {
			root: {
				display: 'inline',
				width: '250px'
			}
		},
		MuiSelect: {
			root: {
				display: 'inline',
				width: '177px'
			}
		}
	}
});

export default theme;
