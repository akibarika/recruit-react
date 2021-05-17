import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CreditCardFormPage from './components/CreditCardFormPage';
import Header from './components/Header';
import { ICreditCardFormProps } from './types';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: pink[300],
		},
	},
});

const onSubmitCallback = (model: ICreditCardFormProps): Promise<void> => {
	console.log('Form submitted successfully with ', model);
	console.log(`Value is ${JSON.stringify(model)}`);
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
