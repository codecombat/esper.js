'use strict';

const esper = require('../src/index');

for ( var pl in esper.pluginList ) {
	if ( esper.pluginList[pl] == "addon" ) {
		let pli = require('../plugins/' + pl);
		esper._registerPlugin(pli);
	}
}
