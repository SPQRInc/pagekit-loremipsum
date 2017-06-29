module.exports = [

    {
        entry: {
            "editor-loremipsum": "./app/components/editor-loremipsum.js",
            "editor-loremipsum-tinymce": "./app/components/tinymce-plugin.js"
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