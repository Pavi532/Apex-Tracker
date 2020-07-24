const path = require('path');

module.exports = {

    outputDir:path.resolve(__dirname, '../public'),

    // publicPath: '/Apex-Tracker/',
    

    devServer:{
        proxy:{
            'api/v1':{
                target:'http://localhost:5000'
            }
        }
    }
};