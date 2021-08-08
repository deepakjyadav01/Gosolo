var env = process.env.NODE_ENV || "development";
const config = require('./config.json');

var envConfig = config[env];
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
