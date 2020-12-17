const menus = require('../../utils/menus.json');

const initialState = {
	items: [
		{
			"id": "dashboard",
			"isShowed": true,
			"isAllowed": true
		},
		{
			"id": "hq",
			"isShowed": false,
			"isAllowed": false,
			"childs": [
				{
					"id": "hq_stockist",
					"isShowed": false,
					"isAllowed": false
				},
				{
					"id": "hq_dropship_affiliate",
					"isShowed": false,
					"isAllowed": false
				}
			]
		},
		{
			"id": "agent",
			"isShowed": true,
			"isAllowed": false,
			"childs": [
				{
					"id": "my_purchase",
					"isShowed": true,
					"isAllowed": true
				}
			]
		},
	],
	is_hidden: false
};

export default function Menu(state = initialState, action) {
	switch (action.type) {
		case "TOGGLE_MENU":
			const { id, isAllowed } = action.payload.content;
			const idx = state.items.findIndex((obj => obj.id === id))
			console.log("this is the result ", state)
			
			state.items[idx] = {
				...state.items[idx],
				isAllowed: !isAllowed
			};


			return {
				...state
			};

		case "TOGGLE_SIDEBAR":
			return {
				...state,
				is_hidden: !state.is_hidden
			};

		default:
			return state;
	}
}