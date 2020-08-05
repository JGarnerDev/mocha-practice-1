// Testing basic functions and async functions

var assert = require("assert");
var authController = require("../../controllers/auth.controller");

describe("authController (basic functions and async)", () => {
	// testing basic functions
	describe("isAuthorized", () => {
		it("returns false if not authorized", () => {
			assert.strictEqual(false, authController.isAuthorized(["user"], "admin"));
		});
		it("returns true if authorized", () => {
			assert.strictEqual(true, authController.isAuthorized(["admin"], "admin"));
		});
	});
	// testing async functions
	describe("isAuthorizedAsync", () => {
		// Mocha's 'done' is passed as an argument
		it("returns false if not authorized", function (done) {
			// done is called to stipulate that all things before it must be completed
			// Mocha's default timeOut is set at 2000 ms. If a larger one is required...
			//      this.timeout(2001)
			authController.isAuthorizedAsync(["user"], "admin", function (isAuth) {
				assert.strictEqual(false, isAuth);
				done();
			});
		});
	});
});
