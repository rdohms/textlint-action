#!/usr/bin/env node

const { setFailed } = require('@actions/core');
const { context } = require('@actions/github');

const linter = require('./linter');
const annotate = require('./annotate');

async function run() {
  try {
    console.log(context.payload, process.argv[2]);

    const path = process.argv[2];
    const results = await linter.run(path);
    const head_sha = context.payload.after;
    const response = await annotate(context.repo, head_sha, results);
    console.log(results);
  } catch (error) {
    setFailed(error.message);
  }
}

run();
