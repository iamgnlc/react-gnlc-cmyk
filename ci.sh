#!/bin/bash
set -e
export  CI=true

cout(){
    YELLOW="\033[1;33m" # <-- [1 means bold [0 means not bold
    NC="\033[0m" # No Color

    echo "\\n${YELLOW}${1} ${NC}\\n" # <-- bash
}

cout "*** Run unit tests ***"
yarn test
cout "*** Clean old build ***"
yarn clean
cout "*** Set version ***"
yarn version --patch
yarn generate-meta-tag
cout "*** Build ***"
yarn build
cout "*** Deploy ***"
yarn deploy