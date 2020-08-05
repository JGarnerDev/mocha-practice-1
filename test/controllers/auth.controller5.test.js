const authController = require("../../controllers/auth.controller5");
const chai = require("chai");
const sinon = require("sinon");
const should = require("chai").should();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

// spys -> observe and report existing functions. The function remains.
// stubs -> replace functions. The replaced function doesn't exist in this context.
// mocks ->

describe("authController5 (Sinon - spys, stubs, and mocks)", () => {
	beforeEach(function settingUpRoles() {
		// authController.setRoles(["user"]);
	});

	describe("isAuthorized", () => {
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

			user.isAuthorized.calledOnce.should.be.true;
			isAuth.should.be.false;
		});
		it("returns true if authorized", () => {
			authController.setRoles(["user", "admin"]);
			const isAuth = authController.isAuthorized("admin");

			user.isAuthorized.calledOnce.should.be.true;
			isAuth.should.be.true;
		});
	});
	// Spies can replace functions or wrap them for unit testing purposes
	describe("getIndex", () => {
		var user;

		beforeEach(function () {
			user = {
				roles: ["user"],
				isAuthorized: function (neededRole) {
					return this.roles.indexOf(neededRole) >= 0;
				},
			};
		});

		it("should render index if authorized", () => {
			const isAuth = sinon.stub(user, "isAuthorized").returns(true);
			const req = { user: user };
			const res = {
				render: sinon.spy(),
			};

			authController.getIndex(req, res);
			isAuth.calledOnce.should.be.true;
			res.render.calledOnce.should.be.true;
			res.render.firstCall.args[0].should.equal("index");
		});
		it("(Mock) should render index if authorized", () => {
			const isAuth = sinon.stub(user, "isAuthorized").returns(true);
			const req = { user: user };
			const res = {
				render: function () {},
			};

			var mock = sinon.mock(res);
			mock.expects("render").once().withExactArgs("index");

			authController.getIndex(req, res);
			isAuth.calledOnce.should.be.true;

			mock.verify();
		});
	});
});
