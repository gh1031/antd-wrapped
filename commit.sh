#!/bin/bash -x

read -p "please input some commit text: " commit

git status

git add .

git commit -m "$commit"

git push

echo '🎉🎉🎉 push success'