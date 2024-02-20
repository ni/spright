import { nodeResolve } from '@rollup/plugin-node-resolve';

const path = require('path');

export default {
    input: path.resolve(__dirname, 'source/SprightBlazorArmstrong.HybridWorkaround.js'),
    output: {
        file: path.resolve(__dirname, '../../SprightBlazorArmstrong/wwwroot/SprightBlazorArmstrong.HybridWorkaround.js'),
        format: 'iife'
    },
    plugins: [nodeResolve()]
};