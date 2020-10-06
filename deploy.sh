#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.metascript.de' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git remote add origin2 https://github.com/Magro28/Magro28.github.io.git
git push -f origin2 master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:Magro28/Magro28.github.io.git master:gh-pages

cd -
