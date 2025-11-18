#!/bin/sh
echo "running millix node"
echo "millixtest" | npx babel-node --max-old-space-size=2048 index.js
