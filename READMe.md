angular-practice
Practice Angular Coding

Git Commands to checkout only specific project folder.

To checkout only a specific folder within repository

git clone --no-checkout git@github.com:Shailu143/angular-practice.git

cd angular-practice

If you want to checkout parent folder’s files

git sparse-checkout init --cone

If you don’t want parent folder’s files

git sparse-checkout init --no-cone

git sparse-checkout set first-angular-app

git checkout

If you want full repository again

git sparse-checkout disable

git checkout .

To push only specific folder

git add first-angular-app

git commit -m "Updated first-angular-app"

git push origin main
