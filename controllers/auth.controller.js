// Testing basic functions and async functions

function AuthController() {
	// testing basic functions
	function isAuthorized(roles, neededRole) {
		return roles.indexOf(neededRole) >= 0;
	}

	// testing async functions
	function isAuthorizedAsync(roles, neededRole, cb) {
		setTimeout(function () {
			cb(roles.indexOf(neededRole) >= 0);
		}, 1000);
	}

	return { isAuthorized, isAuthorizedAsync };
}

module.exports = AuthController();
