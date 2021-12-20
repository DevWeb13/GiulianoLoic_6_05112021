const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: { filename: "./app.js", path: path.resolve(__dirname, "./www/js/") },
	context: path.resolve(__dirname, "./"),
	devtool: "eval",
};
// module.exports = {
// 	mode: "production",
// 	entry: {
// 		app: "./src/app.js",
// 	},
// 	output: {
// 		filename: "./app.js",
// 		path: path.resolve(__dirname, "./www/js/"),
// 	},
// 	devtool: "eval-source-map",
// };
