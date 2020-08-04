// Testing Hooks

function AuthController() {
	let roles;
	function setRoles(role) {
		roles = role;
	}

	function isAuthorized(neededRole) {
		return roles.indexOf(neededRole) >= 0;
	}

	function isAuthorizedAsync(neededRole, cb) {
		setTimeout(function () {
			cb(roles.indexOf(neededRole) >= 0);
		}, 1000);
	}

	return { isAuthorized, isAuthorizedAsync, setRoles };
}

module.exports = AuthController();