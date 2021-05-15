import React from 'react';
import cardValidator from 'card-validator';
import { Icon } from 'rsuite';
import { IconNames } from 'rsuite/lib/Icon/Icon';
import { CardIconProps } from '../../../types';

const CardIcon: React.FC<CardIconProps> = (props: CardIconProps) => {
	const { cardNumber } = props;
	const { card } = cardValidator.number(cardNumber);

	let className: IconNames;
	switch (card?.type) {
		case 'visa':
			className = `cc-visa`;
			break;
		case 'mastercard':
			className = `cc-mastercard`;
			break;
		case 'discover':
			className = `cc-discover`;
			break;
		case 'american-express':
			className = `cc-amex`;
			break;
		default:
			className = `credit-card`;
			break;
	}

	return <Icon icon={className} size="lg" />;
};

export default CardIcon;
