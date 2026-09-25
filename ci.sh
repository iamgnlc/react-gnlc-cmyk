#!/bin/bash
set -e
export CI=true

cout(){
    YELLOW="\033[1;33m" # <-- [1 means bold [0 means not bold
    NC="\033[0m" # No Color

    echo "\\n${YELLOW}${1} ${NC}\\n" # <-- bash
}

cout "*** Check env vars ***"
for var in VITE_AUTHOR VITE_NAME VITE_REPO_URL; do
    grep -q "^${var}=" .env || { echo "Missing ${var} in .env"; exit 1; }
done


cout "*** Run unit tests ***"
npm run test

cout "*** Clean old build ***"
npm run clean

cout "*** Set version ***"
npm run version --patch
npm run generate-meta-tag

cout "*** Build ***"
npm run build

cout "*** Deploy ***"
npm run deploy