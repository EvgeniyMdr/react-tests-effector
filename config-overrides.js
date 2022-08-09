const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(...addBabelPlugins("effector/babel-plugin"));
