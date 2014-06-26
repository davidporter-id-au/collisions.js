var collisions =  {

	/**
	 * Determines whether a is wholly before b.
	 */
	before: function(aStart, aEnd, bStart, bEnd) {
		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';
		return aEnd <= bStart;
	},

	/**
	 * Determines whether a is wholly after b
	 */
	after : function(aStart, aEnd, bStart, bEnd) {
		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';
		return aStart >= bEnd;
	},
		
	/**
	*	-
	*	A
	*	-   	-
	*		B	
	*		-
	*/
	collidesBefore: function(aStart, aEnd, bStart, bEnd) {

		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';

		return (aStart <=  bStart && aEnd >= bStart);
	},

	/**
	*		-
	*		B	
	*	-   	-
	*	A	
	*	-	
	*/
	collidesAfter: function(aStart, aEnd, bStart, bEnd) {
		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';

		return aStart >= bStart && aStart <= bEnd;
	},

	/**
	*		-
	*	-   	| 
	*	A  	B	
	*	- 	|	
	*		-
	*	
	* 	Note will return true if aStart == bStart and aEnd == bEnd;
	*/
	during: function(aStart, aEnd, bStart, bEnd) {
		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';

		return (aStart >= bStart && aEnd <= bEnd);
	},

	/**
	* 	-
	* 	| 	- 
	* 	A  	B	
	* 	| 	-	
	* 	-	
	*
	* 	Note will return true if aStart == bStart and aEnd == bEnd;
	*/	
	within: function(aStart, aEnd, bStart, bEnd) {

		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';

		return aStart <= bStart && aEnd >= bEnd; 
	},

	/**
	* Does a check with timestamps to see if either of the two events collide.
	*/
	intersect: function(aStart, aEnd, bStart, bEnd) {

		if(aStart > aEnd || bStart > bEnd)
			throw 'Start and end dates are not in order. Correct behaviour cannot be expected';

		return this.collidesBefore(aStart, aEnd, bStart, bEnd) 
			|| this.collidesAfter(aStart, aEnd, bStart, bEnd) 
			|| this.within(aStart, aEnd, bStart, bEnd)
			|| this.within(bStart, bEnd, aStart, aEnd);
	},
};

