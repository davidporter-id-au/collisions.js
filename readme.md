### calendar/event collision detection for JS

If I were good at maths, I'm certain there would be an easier way to determine of two events are overlapping. 
In lieu of that, I decided to properly test (perhaps a bit enthusiastically) some code I was using to do ad-hoc
checking for calendar collisions. 

#### quickstart:

Given two objects with a start and end date: 

	a = {
		start: new Date(),
		end: new Date()
	};

	b = {
		start: new Date(),
		end: new Date()
	};


Determine if there is any kind of collision by:

	collision.intersect(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf());
	//returns true if there is an overlap

#### Methods

	.intersect(a.start, a.end, b.start, b.end);

Expects a and b as integers. Returns true if it finds an intersection of events. 


	.before(aStart, aEnd, bStart, bEnd)
	.after(aStart, aEnd, bStart, bEnd)

Before and after determine whether a is wholly before or after b.

	.within(aStart, aEnd, bStart, bEnd);

Returns true if b is within a


	.during(aStart, aEnd, bStart, bEnd);

Returns true if a is within b
