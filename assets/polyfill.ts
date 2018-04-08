import 'core-js/es6';
import 'core-js/es7/reflect';
import { Z_VERSION_ERROR } from 'zlib';
require('zone.js/dist/zone');

if(process.env.env == 'production') {
    // Prod
} else {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}