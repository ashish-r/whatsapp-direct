module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            t1: {
                files: {
                    'scripts/build/index.js': ['scripts/build/index.js'],
                    'scripts/build/sw-install.js': ['scripts/build/sw-install.js'],
                    'scripts/build/sw.js': ['scripts/build/sw.js'],
                }
            }
        }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify')
  
    // Default task(s).
    grunt.registerTask('default', ['uglify'])
  
  }