import feathers from 'feathers-client';
import CFG from './config/parameters.json';

const host = CFG.API_ENDPOINT;

export default feathers()
    .configure(feathers.hooks())
    .configure(feathers.rest(host).fetch(window.fetch.bind(window)))
    .configure(feathers.authentication({ jwtStrategy: 'jwt', storage: window.localStorage }));