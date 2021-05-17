import { ICreditCardFormProps } from '../types';
import axios from 'axios';

export const addCard = (model: ICreditCardFormProps) =>
	axios.post(`https://localhost:5001/api/credit-card-form`, model);
