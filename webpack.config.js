/**
 * Created by nic on 3/1/16.
 */
module.exports = {
    entry: './lightbox.js',
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    }
};