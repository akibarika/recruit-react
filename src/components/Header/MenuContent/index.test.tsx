import React from 'react';
import { render } from '@testing-library/react';
import MenuContent from './index';

describe('MenuContent should', () => {
	test('render menu item texts', () => {
		const { getByText } = render(<MenuContent />);

		expect(getByText('Menu Item 1')).toBeTruthy();
		expect(getByText('Menu Item 2')).toBeTruthy();
		expect(getByText('Menu Item 3')).toBeTruthy();
	});
});
