const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' },{ test: /\.html$/, exclude: /node_modules/, use: [
        { loader: "html-loader",
            options: {
                sources: {
                    list: [
                        {
                            tag: "source",
                            attribute: "src",
                            type: "src"
                        }
                    ]
                }
            }
        }
    ]
}
]

}
}