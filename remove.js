var task = module.exports,
	path = require('path'),
	shelljs = null;

task.run = function run(cli, targetPath, projectData) {
	shelljs = cli.require('shelljs');

	var target = path.join(targetPath, 'build', 'linux');

	shelljs.rm('-rf', target);
};
