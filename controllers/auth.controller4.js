function AuthController() {
	let roles;
	function setRoles(role) {
		roles = role;
		user.roles = role;
	}
	function isAuthorizedPromise(neededRole, cb) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				resolve(roles.indexOf(neededRole) >= 0);
			}, 1000);
		});
	}

	return { isAuthorizedPromise, setRoles };
}

module.exports = AuthController();
