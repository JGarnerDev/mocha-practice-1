// Testing Hooks
//		Hooks allow us to set conditions before running any test
//		Helps with DRY principle

// `only` and `skip`
// 		adding .only as a method to describe or it excludes all other tests
// 		adding .skip as a method to describe or it excludes that test

var assert = require("assert");
var authController = require("../../controllers/auth.controller2");

describe.skip("authController2 (Hooks)", () => {
	// Hook runs before each test in the describe scope
	beforeEach(function settingUpRoles() {
		console.log("	**running `before each` hook**");
		authController.setRoles("user");
	});

	describe("isAuthorized", () => {
		it("returns false if not authorized", () => {
			assert.strictEqual(false, authController.isAuthorized("admin"));
		});
		it("returns true if authorized", () => {
			authController.setRoles(["user", "admin"]);
			assert.strictEqual(true, authController.isAuthorized("admin"));
		});
	});

	describe("isAuthorizedAsync", () => {
		it("returns false if not authorized", function (done) {
			authController.isAuthorizedAsync("admin", function (isAuth) {
				assert.strictEqual(false, isAuth);
				done();
			});
		});
	});
});
