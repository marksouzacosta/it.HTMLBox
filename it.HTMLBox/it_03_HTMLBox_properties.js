define( [], function () {
	return {
		type: "items",
		component: "accordion",
		items: {
			settings: {
				uses: "settings",
				items: {
				customProp2: {
						ref: "qDef.HTML",
						label: "HTML",
						type: "string",
						expression: "optional",
						defaultValue: ""
					}					
				}
			}
		}
	};
} );
