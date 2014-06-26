describe("Date collision tests", function() {

	beforeEach(function(){

		var a = {
			start: new Date(),
			end: new Date();
		};

		var b = {
			start: new Date(),
			end: new Date();
		};

		var c = collisions;
	});

	it("Collisions object should be valid object", function() {
		expect(typeof c == 'Object').toBe(true);
	});
});
