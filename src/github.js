const github = require('@actions/github');
const core = require('@actions/core');

module.exports = github.getOctokit(core.getInput('token'));
