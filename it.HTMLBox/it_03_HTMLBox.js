define(["jquery","./it_03_HTMLBox_properties"], function($,properties) {
	return {
		type : "it.HTMLBox",
		definition : properties,
		initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 0,
					qHeight : 0
				}]
			},
			fontSize : {
				min : 8,
				max : 24
			}
		},
		snapshot : {
			canTakeSnapshot : false
		},
		paint : function($element, layout) { 
				$element.html(layout.qDef['HTML']);
		}
	};
});
