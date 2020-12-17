const menus = require('../../utils/menus.json');

const initialState = {
	items: menus,
	is_hidden: false
};

function findKeys(state, id) {
	let keys = [];

	for (let i = 0; i < state.items.length; i++) {
		if (keys.length !== 0) break;

		const menu_1 = state.items[i];
		if (menu_1.childs) {
			for (let a = 0; a < menu_1.childs.length; a++) {
				const menu_2 = menu_1.childs[a];
				if (menu_2.id === id) {
					keys = [i, a];

					break;
				} else {
					if (menu_2.childs) {
						for (let x = 0; x < menu_2.childs.length; x++) {
							const menu_3 = menu_2.childs[x]

							if (menu_3.id === id) {
								keys = [i, a, x];

								break;
							} else {
								if (menu_3.childs) {
									for (let y = 0; y < menu_3.childs; y++) {
										const menu_4 = menu_3.childs;

										if (menu_4.id === id) {
											keys = [i, a, x, y];

											break;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	return keys;
}

export default function Menu(state = initialState, action) {
	switch (action.type) {
		case "TOGGLE_MENU":
			const { id, isAllowed } = action.payload.content;
			const idx = state.items.findIndex((obj => obj.id === id))

			if (idx === -1) {
				let keys = findKeys(state, id)

				if (keys.length === 2) {
					state.items[keys[0]].childs[keys[1]] = {
						...state.items[keys[0]].childs[keys[1]],
						isAllowed: !isAllowed
					}
				} else if (keys.length === 3) {
					state.items[keys[0]].childs[keys[1]].childs[keys[2]] = {
						...state.items[keys[0]].childs[keys[1]].childs[keys[2]],
						isAllowed: !isAllowed
					}
				} else if (keys.length === 4) {
					state.items[keys[0]].childs[keys[1]].childs[keys[2]].childs[keys[3]] = {
						...state.items[keys[0]].childs[keys[1]].childs[keys[2]].childs[keys[3]],
						isAllowed: !isAllowed
					}
				}
			} else {
				state.items[idx] = {
					...state.items[idx],
					isAllowed: !isAllowed
				};
			}


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