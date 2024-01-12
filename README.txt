// Following steps are to setup Acquia BLt with Drupal 10 which is a kind of work around till gets resolved.
// These steps assuming you have all pre-requisuites done 
// https://docs.acquia.com/blt/install/
// https://docs.acquia.com/blt/install/adding-to-project/
// Main point here is The Drupal root must be in a top-level "docroot" directory.

1. composer create-project --no-interaction --no-install drupal/recommended-project drupalblt
2. cd drupalblt
3. sudo sed -i '' -e "s|web/|docroot/|g" composer.json (replacing web/ with doctroot/ to make docroot the top-level directory)
4. composer require --dev thegbomb/blt-ddev
5. ddev config (configure with drupal10)
6. ddev start
7. ddev composer config minimum-stability dev
8. ddev composer config prefer-stable true
9. ddev composer require lcatlett/blt-ddev (Wihout this package we won't have the "recipes:ddev" command available as a blt command)
10. blt recipes:ddev --no-interaction (NOTE: ececute this without doing ddev ssh, for this you should have BLT launcher installed to run command directly as blt otherwise you may run with /vendor/bin/blt)
11. ddev blt setup (this command will install your drupal setup and privide you admin login credentials)
12. ddev blt doctor (there should not be any errors, if it shows configuration errors then BLT setup is still incomplete, you may need to fix the issues listed first)
13. ddev launch (lauch your installed drupal)

Run below command for custom front end hooks
1) Go to the theme folder and run npm.init
2) npm install
3) npm install sass
4) npm install gulp
5) npm install gulp-sass
6) Added blt.yml file in below commands.
   command-hooks:
     frontend-reqs:
       dir: ${docroot}/themes/custom/drupalblt
       command: 'npm install'
     frontend-assets:
       dir: ${docroot}/themes/custom/drupalblt
       command: 'gulp sass'
7) Create gulpfile.js in theme folder
8) Run the ddev blt setup command from root directory