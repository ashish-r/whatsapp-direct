module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            t1: {
                files: {
                    'build/scripts/index.js': ['build/scripts/index.js'],
                    'build/scripts/sw-install.js': [
                        'build/scripts/sw-install.js',
                    ],
                },
            },
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'version',
                            replacement: '<%= new Date().getTime() %>',
                        },
                    ],
                },
                files: [{ src: ['sw.js'], dest: 'sw.js' }],
            },
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1,
            },
            target: {
                files: {
                    'build/css/style.css': ['build/css/style.css'],
                },
            },
        },
    })

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-cssmin')

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'replace', 'cssmin'])
}
