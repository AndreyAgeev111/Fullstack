class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);

    }
    userLogout() {
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user !== null;
    }
}
export default new AuthenticationService()