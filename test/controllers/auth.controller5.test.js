const authController = require("../../controllers/auth.controller5");
const chai = require("chai");
const sinon = require("sinon");
const should = require("chai").should();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("authController5 (Sinon - spys, stubs, and mocks)", () => {
	beforeEach(function settingUpRoles() {
		// authController.setRoles(["user"]);
	});

	describe.only("isAuthorized", () => {
		let user = {};

		beforeEach(function () {
			user = {
				roles: ["user"],
				isAuthorized: function (neededRole) {
					return this.roles.indexOf(neededRole) >= 0;
				},
			};
			sinon.spy(user, "isAuthorized");
			authController.setUser(user);
		});

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

	describe("getIndex", () => {
		it("should render index", () => {
			const req = {};
			const res = {
				// a mock function replaces res.render to make this a unit test
				render: sinon.spy(),
			};
			authController.getIndex(req, res);
			res.render.calledOnce.should.be.true;
			res.render.firstCall.args[0].should.equal("index");
		});
	});
});
