#!/bin/bash

set -eEuo pipefail

declare path
declare ruleset

while getopts ":p:r:" opt; do
  case ${opt} in
    p )
      path=$OPTARG
      ;;
    r )
      ruleset=$OPTARG
      ;;
  esac
done

yarn install

yarn add "${ruleset}"

yarn run scan "${path}"