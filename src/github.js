const github = require('@actions/github');
const core = require('@actions/core');

let client;

try {
  client = module.exports = github.getOctokit(core.getInput('token'));
} catch (error) {
  console.log(error);
  client = { checks: false };
}

module.exports = client;
