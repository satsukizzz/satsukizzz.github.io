# satsukizzz.github.io
for Github Pages

# compiled HTML using pug
install pug-cli, execute `pug views/pug/blog.pug --out docs` for blog.pug and so on

# branch policy (alpha)
1. make `feature` from `develop`, may be buggy
1. test locally using `develop` branch
1. fix bugs along `develop` using `fix.*` branch
1. merge `develop` to `main` to deploy
1. any features will have branch names with `feature.*`
1. hot fix along `main` using `hotfix.*` branch, will be also merged to `develop`