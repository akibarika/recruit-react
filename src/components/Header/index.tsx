import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuContent from './MenuContent';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			textAlign: `center`,
		},
		drawer: {
			width: `inherit`,
		},
		drawerPaper: {
			width: `100%`,
		},
	})
);

const Header: React.FC = () => {
	const classes = useStyles();
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Register card form
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				open={open}
				anchor="right"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={() => setOpen(false)}
						>
							<ArrowBackIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Menu
						</Typography>
					</Toolbar>
				</AppBar>
				<MenuContent />
			</Drawer>
		</>
	);
};

export default Header;
