#!/usr/bin/env node

const { setFailed, getInput } = require('@actions/core');
const { context } = require('@actions/github');

const linter = require('./linter');
const annotate = require('./annotate');

async function run() {
  try {
    console.log(context.payload, process.argv[2]);

    const path = process.argv[2];
    const results = await linter.run(path);
    const head_sha = context.payload.after;

    // Report in output
    if (linter.engine.isErrorResults(results)) {
      const output = linter.engine.formatResults(results);
      setFailed(output);
    }

    // Report inline if enabled
    if (getInput('annotate') == 'true') {
      const response = await annotate(context.repo, head_sha, results);
    }
  } catch (error) {
    setFailed(error.message);
  }
}

run();
