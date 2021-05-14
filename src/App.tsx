import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CreditCardFormPage from './components/CreditCardFormPage';
import Header from './components/Header';
import { CreditCardFormProps } from './types';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[300],
		},
	},
});

const onSubmitCallback = (model: CreditCardFormProps): Promise<void> => {
	console.log('Form submitted successfully with ', model);
	return Promise.resolve();
};

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container maxWidth="lg">
				<CreditCardFormPage onSubmitCallback={onSubmitCallback} />
			</Container>
		</ThemeProvider>
	);
};

export default App;
