#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

git branch -D $ENV
set -e
yarn
git checkout -B $ENV
PUBLIC_URL=https://crowdsale.sb1.storiqa.com/ REACT_APP_API_HOST=https://crowdsale.sb1.storiqa.com/api/ yarn build
git add .
git commit -m 'Build compiled' --quiet
git push origin $ENV --force > /dev/null 2>&1
git checkout $BRANCH
git branch -D $ENV
set +e
