const authController = require("../../controllers/auth.controller4");
const should = require("chai").should();

describe("authController4 (Promises", () => {
	beforeEach(function settingUpRoles() {
		authController.setRoles(["user"]);
	});

	describe("isAuthorized", () => {
		it("returns false if not authorized", () => {
			const isAuth = authController.isAuthorized("admin");

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
