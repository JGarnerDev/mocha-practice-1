const authController = require("../../controllers/auth.controller4");
const chai = require("chai");
const should = require("chai").should();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("authController4 (Promises)", () => {
	beforeEach(function settingUpRoles() {
		authController.setRoles(["user"]);
	});

	// if what we're testing returns a promise, `.eventually` is added,
	// and the test returns the object

	describe("isAuthorizedPromise", () => {
		it("returns false if not authorized", function () {
			return authController.isAuthorizedPromise("admin").should.eventually.be
				.false;
		});
	});
});
