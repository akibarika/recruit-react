import { ICreditCardFormProps } from '../types';
import axios from 'axios';
import config from '../config';

export const addCard = (model: ICreditCardFormProps) =>
	axios.post(`${config.API_URL}/api/credit-card-form`, model);
