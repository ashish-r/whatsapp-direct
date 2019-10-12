# whatsapp-direct
An ultra-lite web app that lets you message/call on Whatsapp to people without adding them to the contact list.
Demo: http://ashish-r.github.io/whatsapp-direct

# Getting Started

Navigate to the root directory and use: <br/>
## Installing Dependencies
`npm install` to install all dependencies.
## For Development:
`npm run serve` this will start typescript transpiler in watch mode, any changes you make in the .ts file will automatically update corresponding .js file in the build directory
## For Production:
`npm run build` this will transpile all .ts files in a corresponding .js file and then grunt will minify those files.<br/>
Push updated contents of build directory also Github serves the page from that directory only.
## Git Hooks:
`pre-commit` runs `npm run build-add` which is similar to `pm run build` and also adds updated contents of scripts/build directory automatically while making a commit.

# Screenshots

![PWA Mobile][PWA Mobile]
![PWA Update][PWA Update]
![PWA Desktop][PWA Desktop]


[PWA Mobile]: https://github.com/ashish-r/whatsapp-direct/blob/master/screenshots/Screenshot_20191011-042640.jpeg
[PWA Update]: https://github.com/ashish-r/whatsapp-direct/blob/master/screenshots/Screenshot_20191011-042616.jpeg
[PWA Desktop]: https://github.com/ashish-r/whatsapp-direct/blob/master/screenshots/Screenshot%20from%202019-10-11%2004-24-50.jpeg
