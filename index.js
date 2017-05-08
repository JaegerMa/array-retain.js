'use strict';

function retain(array, filter)
{
	//Check if we're called from an array
	if(Array.isArray(this) && typeof(array) === 'function' && filter === undefined)
	{
		filter = array;
		array = this;
	}

	if(!Array.isArray(array) || typeof(filter) !== 'function')
		return array;
	
	
	var len = array.length;
	var futureIdx = 0;
	for(var i = 0; i < len; ++i)
	{
		if(filter(array[i]))
		{
			if(i !== futureIdx)
				array[futureIdx] = array[i];
			++futureIdx;
		}
	}
	array.length = futureIdx;
	return array;
}

module.exports = retain;
