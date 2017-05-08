module.exports = [

    {
        entry: {
            "editor-plugin": "./app/views/admin/editor-plugin"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue"},
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
        }
    }

];