const authController = require("../../controllers/auth.controller3");
// `should` is brought in so our tests look neat and are human readable
const should = require("chai").should();

describe("authController3 (BDD, chai, expect, and should)", () => {
	beforeEach(function settingUpRoles() {
		authController.setRoles(["user"]);
	});

	describe("isAuthorized", () => {
		it("returns false if not authorized", () => {
			const isAuth = authController.isAuthorized("admin");
			// it's implementation requires no explaination
			isAuth.should.be.false;
		});
		it("returns true if authorized", () => {
			authController.setRoles(["user", "admin"]);
			const isAuth = authController.isAuthorized("admin");
			isAuth.should.be.true;
		});
	});

	describe("isAuthorizedAsync", () => {
		it("returns false if not authorized", function (done) {
			authController.isAuthorizedAsync("admin", function (isAuth) {
				isAuth.should.be.false;
				done();
			});
		});
	});
});

// Note: if testing for null, `should` must be required in the test doc.
// 		Furthermore, the assertion would look like:

// 				should.not.exist(iAmNull)
