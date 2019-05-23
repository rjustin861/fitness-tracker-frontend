import axios from 'axios';
import decode from 'jwt-decode';

export default class AuthHelperService {

    setToken(token) {
        window.localStorage.setItem('access_token', token);
    }

    getToken() {
        return window.localStorage.getItem('access_token');
    }

    signUpOrLogin(command, name, email, password) {
        let data = {};
        let url = '';

        if(command === 'signup') {
            url = process.env.REACT_APP_API_PROD_URL + '/api/signup';
            data = {name, email, password};
        }
        else if(command === 'login') {
            url = process.env.REACT_APP_API_PROD_URL + '/api/login';
            data = {email, password};
        }

        return axios.post(url, data)
            .then((response) => {
                const token = response.headers['access-token'];
                this.setToken(token);

                return response.data;
        });
    }

    logout() {
        window.localStorage.removeItem('access_token');
        console.log('inside logout', this.getToken());
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (error) {
            console.log('error', error);
            return false;
        }
    }

    isLoggedIn() {
        const token = this.getToken();
        
        return !!token && !this.isTokenExpired(token); 
    }

    getConfirm() {
        const answer = decode(this.getToken());
        return answer;
        
    }
}