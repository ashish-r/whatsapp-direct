module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            t1: {
                files: {
                    'build/assets/scripts/index.js': [
                        'assets/scripts/index.js',
                    ],
                    'build/assets/scripts/sw-install.js': [
                        'assets/scripts/sw-install.js',
                    ],
                    'build/sw.js': ['build/sw.js'],
                },
            },
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /^var FILE_VERSION.*/g,
                            replacement:
                                'var FILE_VERSION = "?v=<%= new Date().getTime() %>"',
                        },
                    ],
                },
                files: [{ src: ['sw.js'], dest: 'build/sw.js' }],
            },
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1,
            },
            target: {
                files: {
                    'build/assets/css/style.css': ['assets/css/style.css'],
                },
            },
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            'manifest.json',
                            'browserconfig.xml',
                            'CNAME',
                            'images/*',
                        ],
                        dest: 'build/',
                    },
                ],
            },
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'build/index.html': 'index.html',
                },
            },
        },
    })

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')

    // task(s).
    grunt.registerTask('default', [
        'copy',
        'replace',
        'uglify',
        'cssmin',
        'htmlmin',
    ])
}
