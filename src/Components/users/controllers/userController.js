import requester from '../../service/requester';

const userController = function () {

    const postRegister = function (data) {

        const payload = {
            username: data.username,
            password: data.password,
        };

        requester.post('', 'user', 'Basic', payload)
            .then(requester.handler)
            .then((data) => {
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('authtoken', data._kmd.authtoken);
                sessionStorage.setItem('userId', data._id);

                window.location.pathname = '/login';
            })
            // .then(() => this.props.history.push('/login'));
            // // console.log(data);
    };

    const postLogin = function (data) {
        requester.addHeaderInfo(data);

        const payload = {
            username: data.username,
            password: data.password
        };

        requester.post('login', 'user', 'Basic', payload)
            .then(requester.handler)
            .then((data) => {
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('authtoken', data._kmd.authtoken);
                sessionStorage.setItem('userId', data._id);

                window.location.pathname = '/';
            });
    };

    const logout = function (data) {
        requester.post('_logout', 'user', 'Kinvey')
            .then(requester.handler)
            .then(() => {
                sessionStorage.clear();

                window.location.pathname = '/login';
            });
    };

    return {
        postRegister,
        postLogin,
        logout
    }
}();

export default userController;