
const initialState = {
	items: [
		{ id: "Dasboard", show: true, ative: true },
		{ id: "Menu 2", show: true, ative: true },
		{ id: "Menu 3", show: true, ative: true },
		{ id: "Menu 3", show: true, ative: false }
	],
	is_hidden: false
};

export default function Menu(state = initialState, action) {
	switch (action.type) {
		case "TOGGLE_MENU":
			console.log("Action to Hide Menu", state);
			return state;

		case "TOGGLE_SIDEBAR":
			return {
				...state,
				is_hidden: !state.is_hidden
			};

		default:
			return state;
	}
}