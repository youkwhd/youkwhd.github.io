#!/bin/bash

set -e

echo "[INFO ::] Generating web pages..."
clj -M -m app.core

echo "[INFO ::] Moving out resources..."
cp -r resources/* dist/
cp src/styles/font/* dist/

echo "[INFO ::] Generating css..."
stylus src/styles/core/wrapper.styl --out dist/global.css
