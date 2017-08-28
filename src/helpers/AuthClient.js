import { AUTH_LOGIN } from 'admin-on-rest';
import Request from 'request';
import config from '../config/parameters.json';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        Request.post({
            url : `${config.API_CLIENT}/login`,
            form : {
                username: params.username,
                password: params.password
            }
        }, function(error, response, body) {
            if (error) {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            }
            let data = JSON.parse(body);
            localStorage.setItem('access_token', data.token);
        });
    }

    return Promise.resolve();
}