#!/bin/bash
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$CURRENT_BRANCH" == "production" ]]; then
    TARGET_BRANCH="production"
else
    TARGET_BRANCH="development"
fi

echo "Proyecto en rama '$CURRENT_BRANCH', configurando submódulo shared en '$TARGET_BRANCH'..."

cd src/shared || exit

git fetch origin "$TARGET_BRANCH"
git checkout "$TARGET_BRANCH"
git pull origin "$TARGET_BRANCH"

cd ../..

echo "Submódulo src/shared sincronizado con '$TARGET_BRANCH'"
