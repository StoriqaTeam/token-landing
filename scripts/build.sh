#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

set -e
yarn
git checkout -B $ENV
git merge --no-edit $BRANCH
yarn build
git add .
git commit -m 'Build compiled' --quiet
git push origin $ENV --force > /dev/null 2>&1
git checkout $BRANCH
set +e
