import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';
import PlaceholderText from './Placeholder';
import CardIcon from '../CardIcon';
import { CardProps } from '../../../types';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: `100%`,
			textAlign: `center`,
		},
		card: {
			display: `inline-block`,
			width: 320,
			height: 190,
			perspective: 600,
			textAlign: `justify`,
		},
		background: {
			padding: 18,
			background: `linear-gradient(to right bottom, #fd696b, #fa616e, #f65871, #f15075, #ec4879)`,
			display: `inline-block`,
			borderRadius: 8,
			height: 190,
			width: 320,
		},
		back: {
			padding: `18px 0`,
		},
		cardIcon: {
			color: `white`,
			textAlign: `right`,
			width: `100%,`,
			fontSize: 32,
		},
		cardNumber: {
			display: `block`,
			width: `100%`,
			wordSpacing: 4,
			fontSize: 20,
			letterSpacing: 2,
			color: `white`,
			textAlign: `center`,
			margin: `20px 0`,
		},
		cardHolder: {
			width: `75%`,
			float: `left`,
		},
		cardExpire: {
			width: `25%`,
			float: `left`,
		},
		cardLabel: {
			fontSize: 10,
			textTransform: `uppercase`,
			color: `white`,
			letterSpacing: 1,
		},
		cardInfo: {
			marginBottom: 0,
			marginTop: 5,
			fontSize: 16,
			lineHeight: `18px`,
			color: `white`,
			letterSpacing: 1,
			textTransform: `uppercase`,
		},
		cardBackContent: {
			padding: `15px 15px 0`,
		},
		cardBlackLine: {
			marginTop: 5,
			height: 38,
			backgroundColor: `#303030`,
		},
		cardSecret: {
			padding: `5px 12px`,
			backgroundColor: `white`,
			position: `relative`,
			'&::before': {
				content: `' '`,
				position: `absolute`,
				top: -3,
				left: -3,
				height: `calc(100% + 6px)`,
				width: `calc(100% - 42px)`,
				borderRadius: 4,
				background: `repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px)`,
			},
		},
		cardCvv: {
			color: `#303030`,
			textAlign: `right`,
			margin: 0,
			fontSize: 14,
		},
	})
);

const Card: React.FC<CardProps> = (props: CardProps) => {
	const { model, isFlipped } = props;
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<div className={classes.card}>
					<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
						<div className={classes.background}>
							<div className={classes.cardIcon}>
								<CardIcon cardNumber={model.cardNumber} />
							</div>
							<div className={classes.cardNumber}>
								<PlaceholderText
									value={model.cardNumber}
									placeholder={`**** **** **** ****`}
								/>
							</div>
							<div className={classes.cardHolder}>
								<span className={classes.cardLabel}>Card Holder</span>
								<div className={classes.cardInfo}>Sawyer Lu</div>
							</div>
							<div className={classes.cardExpire}>
								<span className={classes.cardLabel}>Expires</span>
								<div className={classes.cardInfo}>
									<PlaceholderText
										value={model.expiration}
										placeholder={`MM/YY`}
									/>
								</div>
							</div>
						</div>
						<div className={`${classes.background} ${classes.back}`}>
							<div className={classes.cardBlackLine} />
							<div className={classes.cardBackContent}>
								<div className={classes.cardSecret}>
									<div className={classes.cardCvv}>
										<PlaceholderText value={model.cvv} placeholder={`***`} />
									</div>
								</div>
							</div>
						</div>
					</ReactCardFlip>
				</div>
			</div>
		</>
	);
};

export default Card;
