#!/bin/bash

yarn
pm2 startOrRestart ecosystem.config.js
