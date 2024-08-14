"use strict";
const { parentPort } = require('worker_threads');
const { encodeBinaryNodeWorker } = require('./encodeBinaryNodeWorker');

parentPort.on('message', async ({ node, options }) => {
    try {
        const result = await encodeBinaryNodeWorker(node, options);
        parentPort.postMessage({ result });
    } catch (error) {
        parentPort.postMessage({ error: error.message });
    }
});