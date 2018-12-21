#!/bin/bash

set -e
ENV=production scripts/build.sh
pm2 deploy ecosystem.config.js production
set +e
