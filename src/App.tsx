import React from 'react';
import './App.css';
import RegisterCardForm from './components/CreditCardForm';
import Header from './components/Header';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<RegisterCardForm />
		</>
	);
};

export default App;
