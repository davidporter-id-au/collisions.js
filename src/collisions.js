var collisions = function() {

	return {
		/**
		*	-
		*	A
		*	-   	-
		*		B	
		*		-
		*/
		beforeOrDuring: function(aStart, aEnd, bStart, bEnd) {
			return (aStart <=  bStart && aEnd >= bStart);
		},

		/**
		*		-
		*		B	
		*	-   	-
		*	A	
		*	-	
		*/
		afterOrDuring: function(aStart, aEnd, bStart, bEnd) {
			return aStart >= bStart && aEnd <= bEnd;
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
			return aStart <= bStart && aEnd >= bEnd;
		},

		/**
		* Does a check with timestamps to see if either of the two events collide.
		*/
		intersect: function(aStart, aEnd, bStart, bEnd) {
			return this.beforeOrDuring(aStart, aEnd, bStart, bEnd) ||
				this.afterOrDuring(aStart, aEnd, bStart, bEnd) ||
				this.within(aStart aEnd, bStart, bEnd) ||
				this.during(aStart aEnd, bStart, bEnd);
		},
	};

}

