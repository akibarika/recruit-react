import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import RegisterCardForm from './components/CreditCardForm';
import Header from './components/Header';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[300],
		},
	},
});

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container maxWidth="lg">
				<RegisterCardForm />
			</Container>
		</ThemeProvider>
	);
};

export default App;
