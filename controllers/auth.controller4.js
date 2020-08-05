function AuthController() {
	let roles;

	function isAuthorizedPromise(neededRole, cb) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				resolve(roles.indexOf(neededRole) >= 0);
			}, 1000);
		});
	}

	return { isAuthorizedPromise };
}

module.exports = AuthController();
