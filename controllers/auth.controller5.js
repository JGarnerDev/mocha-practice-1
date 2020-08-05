function AuthController() {
	let roles;
	let user;

	function setRoles(role) {
		roles = role;
		user.roles = role;
	}
	function setUser(inUser) {
		user = inUser;
	}

	function isAuthorized(neededRole) {
		if (user) {
			return user.isAuthorized(neededRole);
		}
	}

	function isAuthorizedAsync(neededRole, cb) {
		setTimeout(function () {
			cb(roles.indexOf(neededRole) >= 0);
		}, 1000);
	}

	function isAuthorizedPromise(neededRole, cb) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				resolve(roles.indexOf(neededRole) >= 0);
			}, 1000);
		});
	}

	function getIndex(req, res) {
		res.render("index");
	}
	return {
		setRoles,
		setUser,
		isAuthorized,
		isAuthorizedAsync,
		isAuthorizedPromise,
		getIndex,
	};
}

module.exports = AuthController();
