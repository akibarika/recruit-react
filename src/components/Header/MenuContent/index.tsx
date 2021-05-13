import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

const MenuContent: React.FC = () => {
	return (
		<>
			<List>
				{[
					'Menu Item 1',
					'Menu Item 2',
					'Menu Item 3',
					'Menu Item 4',
					'Menu Item 5',
				].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <AppsIcon /> : <CalendarViewDayIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</>
	);
};

export default MenuContent;
