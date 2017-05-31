module.exports = [

    {
        entry: {
            "editor-plugin": "./app/components/editor-plugin.js",
            "editor-plugin-tinymce": "./app/components/tinymce-plugin.js"
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