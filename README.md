[![DeepScan grade](https://deepscan.io/api/teams/10012/projects/12697/branches/199343/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10012&pid=12697&bid=199343)

# WhatsAppDirect!

An ultra-lite web app that lets you message/call on #WhatsApp without adding them to your contact list.
Visit: https://whatsapp.ashish.link

# Getting Started

Navigate to the root directory and use: <br/>

## Installing Dependencies

`npm install` to install all dependencies.

## For Development:

`npm run serve` this will start typescript transpiler in watch mode, any changes you make in the .ts file will automatically update corresponding .js file in the build directory

`npm run serve-sass` this will start sass in watch mode, any changes you make in the .sass file will automatically update corresponding .css file in the build directory

## For Production:

`npm run build` this will transpile all .ts files in a corresponding .js file and then grunt will minify those files.<br/>
Push updated contents of build directory also Github serves the page from that directory only.

## Git Hooks:

`pre-commit` runs `npm run build-add` which is similar to `npm run build` and also adds updated contents of scripts/build directory automatically while making a commit.

# Screenshots

![PWA Mobile][pwa mobile]
![PWA Update][pwa update]
![PWA Desktop][pwa desktop]

[pwa mobile]: https://github.com/ashish-r/whatsapp-direct/blob/master/screenshots/Screenshot_20191011-042640.jpeg
[pwa update]: https://github.com/ashish-r/whatsapp-direct/blob/master/screenshots/Screenshot_20191011-042616.jpeg
[pwa desktop]: https://github.com/ashish-r/whatsapp-direct/blob/master/screenshots/Screenshot%20from%202019-10-11%2004-24-50.jpeg
