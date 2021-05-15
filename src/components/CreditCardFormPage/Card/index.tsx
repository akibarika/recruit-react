import React from 'react';
import { ICreditCardFormProps } from '../../../types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: `100%`,
			textAlign: `center`,
		},
		background: {
			background: `linear-gradient(to right bottom, #fd696b, #fa616e, #f65871, #f15075, #ec4879)`,
			display: `inline-block`,
			borderRadius: 8,
			height: 190,
			width: 320,
		},
	})
);

type CardProps = {
	cardType?: string;
	model: ICreditCardFormProps;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
	const { cardType, model } = props;
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<div className={classes.background}>
					{cardType}
					{model.cardNumber}
				</div>
			</div>
		</>
	);
};

export default Card;
