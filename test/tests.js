describe("Functionality for underlying trivial functions: ", function() {

	var a, b, c;

	beforeEach(function(){

		a = {
			start: new Date(),
			end: new Date()
		};

		b = {
			start: new Date(),
			end: new Date()
		};

		c = collisions;
	});

	it("Should contain the appropriate methods", function() {
		expect(typeof c.collidesBefore == 'function').toBe(true);
		expect(typeof c.collidesAfter == 'function').toBe(true);
		expect(typeof c.during == 'function').toBe(true);
		expect(typeof c.within == 'function').toBe(true);
	});

	it("collidesBefore() Should detect a collision when a starts before b, but ends during b", function(){
		
		a.start.setHours(0);
		a.end.setHours(2);
		b.start.setHours(1);
		b.end.setHours(3);

		expect(c.collidesBefore(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
	});
	
	it("collidesBefore() Should not detect a collision when a starts and ends before b", function(){
		
		a.start.setHours(0);
		a.end.setHours(1);
		b.start.setHours(2);
		b.end.setHours(3);

		expect(c.collidesBefore(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(false);
	});
	
	it("collidesAfter() Should detect a collision when a starts during b, but ends after b", function(){
		
		a.start.setHours(1);
		a.end.setHours(3);
		b.start.setHours(0);
		b.end.setHours(2);

		expect(c.collidesAfter(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
	});
	
	it("collidesAfter() Should not detect a collision when a starts and ends after b", function(){
		
		a.start.setHours(2);
		a.end.setHours(3);
		b.start.setHours(0);
		b.end.setHours(1);

		expect(c.collidesAfter(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(false);
	});

	it("after() Should correctly state that a is after b", function(){
		
		a.start.setHours(2);
		a.end.setHours(3);
		b.start.setHours(0);
		b.end.setHours(1);

		expect(c.after(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
		expect(c.after(b.start.valueOf(), b.end.valueOf(), a.start.valueOf(), a.end.valueOf())).toBe(false); //swap
	});

	it("before() Should state that a is after b", function(){
		
		a.start.setHours(0);
		a.end.setHours(1);
		b.start.setHours(2);
		b.end.setHours(3);

		expect(c.before(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
		expect(c.before(b.start.valueOf(), b.end.valueOf(), a.start.valueOf(), a.end.valueOf())).toBe(false); //swap
	});

	it("during() Should detect when a is within b", function(){
		
		a.start.setHours(1);
		a.end.setHours(2);
		b.start.setHours(0);
		b.end.setHours(3);

		expect(c.during(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
		expect(c.during(b.start.valueOf(), b.end.valueOf(), a.start.valueOf(), a.end.valueOf())).toBe(false);
	});

	it("within() Should detect when b is within a", function(){
		
		a.start.setHours(0);
		a.end.setHours(3);
		b.start.setHours(1);
		b.end.setHours(2);

		expect(c.within(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
		expect(c.within(b.start.valueOf(), b.end.valueOf(), a.start.valueOf(), a.end.valueOf())).toBe(false);
	});

});

describe("Intersection detection: ", function() {

	var a, b, c;

	beforeEach(function(){

		a = {
			start: new Date(),
			end: new Date()
		};

		b = {
			start: new Date(),
			end: new Date()
		};

		c = collisions;
	});

	it("Should detect when a is starting before, but finishes during b", function(){
		
		a.start.setHours(0);
		a.end.setHours(2);
		b.start.setHours(1);
		b.end.setHours(3);

		expect(c.intersect(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
	});
	
	it("Should detect when a is starting during b but finishes after", function(){
		
		a.start.setHours(1);
		a.end.setHours(3);
		b.start.setHours(0);
		b.end.setHours(2);

		expect(c.intersect(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
	});
	
	it("Should detect when a is starting during b", function(){
		
		a.start.setHours(1);
		a.end.setHours(2);
		b.start.setHours(0);
		b.end.setHours(3);

		expect(c.intersect(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(true);
	});

	it("Should detect when a is entirely after b", function(){
		
		a.start.setHours(2);
		a.end.setHours(3);
		b.start.setHours(0);
		b.end.setHours(1);

		expect(c.intersect(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(false);
	});
	
	it("Should detect when a is entirely before b", function(){
		
		a.start.setHours(0);
		a.end.setHours(1);
		b.start.setHours(2);
		b.end.setHours(3);

		expect(c.intersect(a.start.valueOf(), a.end.valueOf(), b.start.valueOf(), b.end.valueOf())).toBe(false);
	});

});
