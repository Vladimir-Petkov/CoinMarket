import userController from '../controllers/userController'; 

function Logout() {
    const user = sessionStorage.getItem('username');
    userController.logout(user);
    return null;
}

export default Logout;