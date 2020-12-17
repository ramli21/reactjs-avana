export const toggleDropdown = content => ({
	type: 'TOGGLE_MENU',
	payload: {
		content
	}
});

export const toggleSidebar = () => ({
	type: 'TOGGLE_SIDEBAR'
});