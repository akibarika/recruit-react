import React, { useState } from 'react';
import { ICreditCardFormProps } from '../../../types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';

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
	const [isFlipped, setIsFlipped] = useState(false);
	const classes = useStyles();
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<div className={classes.root}>
					<div className={classes.background}>
						{cardType}
						<button onClick={handleClick}>Click to flip</button>
					</div>
				</div>
				<div className={classes.root}>
					<div className={classes.background}>
						{model.cardNumber}
						<button onClick={handleClick}>Click to flip</button>
					</div>
				</div>
			</ReactCardFlip>
		</>
	);
};

export default Card;
