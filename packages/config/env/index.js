/// <reference types="./environment" />
import { config } from 'dotenv';
export var isDev = process.env.APP_ENV === 'dev' ? true : false;
export var getEnvPath = function () {
    var currentFile = new URL(import.meta.url).pathname;
    var index = currentFile.lastIndexOf('/');
    var envPath = currentFile.slice(0, index) + '/';
    return envPath;
};
export var loadEnv = function () {
    var override = true;
    var debug = false;
    config({
        path: getEnvPath() + '.env',
        override: override,
        debug: debug
    });
    console.log(process.env.PUBLIC_MAX_PASSWORD_LENGTH);
};
