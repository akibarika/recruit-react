import React from 'react';
import {
	fireEvent,
	RenderResult,
	render,
	waitFor,
} from '@testing-library/react';
import CreditCardFormContainer from '../index';
import { ICreditCardFormProps } from '../../../types';
import { expirationDateToDate } from '../../../services/cardFormatters';

type Props = {
	onSubmitCallback: (model: ICreditCardFormProps) => Promise<void>;
};

const onSubmitCallback: (model: ICreditCardFormProps) => Promise<void> =
	jest.fn();
const renderForm = (): RenderResult => {
	const props: Props = {
		onSubmitCallback,
	};
	return render(<CreditCardFormContainer {...props} />);
};

describe('CreditCardForm should', () => {
	test('have card input field', async () => {
		const { getByTestId } = renderForm();
		expect(getByTestId('cardNumber')).toBeTruthy();
	});
	test('have card cvv field', async () => {
		const { getByTestId } = renderForm();
		expect(getByTestId('cvv')).toBeTruthy();
	});
	test('have card expiration date field', async () => {
		const { getByTestId } = renderForm();
		expect(getByTestId('expiration')).toBeTruthy();
	});

	test('validates credit card number', async () => {
		const { queryByText, getByTestId } = renderForm();
		const cardInput = getByTestId('cardNumber');
		fireEvent.change(cardInput, { target: { value: '444444' } });
		await waitFor(() => {
			expect(queryByText(/Credit Card Number is invalid./)).toBeNull();
		});
		fireEvent.change(cardInput, { target: { value: '1234123412341234' } });
		await waitFor(() => {
			expect(queryByText(/Credit Card Number is invalid./)).not.toBeNull();
		});
		fireEvent.change(cardInput, { target: { value: '4111 1111 1111 1111' } });
		await waitFor(() => {
			expect(queryByText(/Credit Card Number is invalid./)).toBeNull();
		});
	});

	test('validate credit card has card holder name', async () => {
		const { queryByText, getByTestId } = renderForm();
		const CardHolderInput = getByTestId('cardHolder');
		fireEvent.change(CardHolderInput, { target: { value: '' } });
		fireEvent.click(getByTestId('submit-button'));
		await waitFor(async () => {
			expect(queryByText(/Credit Card holder is required./)).not.toBeNull();
		});
	});

	test('validate credit card valid cvv', async () => {
		const { queryByText, getByTestId } = renderForm();
		const CvvInput = getByTestId('cvv');
		fireEvent.change(CvvInput, { target: { value: 'ttt' } });
		await waitFor(async () => {
			expect(queryByText(/Card CVV number is invalid./)).not.toBeNull();
		});
		fireEvent.change(CvvInput, { target: { value: '123' } });
		await waitFor(async () => {
			expect(queryByText(/Card CVV number is invalid./)).toBeNull();
		});
	});

	test('validates expiration date', async () => {
		const { queryByText, getByTestId } = renderForm();
		const ExInput = getByTestId('expiration');
		fireEvent.change(ExInput, { target: { value: '12/11' } });
		await waitFor(() =>
			expect(queryByText(/Card Expiration Date is invalid./)).not.toBeNull()
		);

		fireEvent.change(ExInput, { target: { value: '12/22' } });
		await waitFor(() =>
			expect(queryByText(/Card Expiration Date is invalid./)).toBeNull()
		);
	});

	test('submit the form', async () => {
		const { getByTestId } = renderForm();
		fireEvent.change(getByTestId('cardNumber'), {
			target: { value: '4111 1111 1111 1111' },
		});
		fireEvent.change(getByTestId('cardHolder'), {
			target: { value: 'Sawyer Lu' },
		});
		fireEvent.change(getByTestId('expiration'), { target: { value: '12/22' } });
		fireEvent.change(getByTestId('cvv'), { target: { value: '123' } });
		await waitFor(async () => {
			fireEvent.click(getByTestId('submit-button'));
		});

		await waitFor(() =>
			expect(onSubmitCallback).toHaveBeenLastCalledWith({
				cardNumber: '4111 1111 1111 1111',
				cardHolder: 'Sawyer Lu',
				expiration: '12/22',
				cvv: '123',
				expireDate: expirationDateToDate('12/22'),
			})
		);
	});
});
