module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    bowerOptions: {}
                }
            }
        },

        clean: ["dist", '.tmp'],

        copy: {
            main: {
                expand: true,
                cwd: './',
                src: ['**', '!js/*.js', '!**/*.css', '!node_modules/**', '!bower_components/**'],
                dest: 'dist/'
            }
        },

        rev: {
            files: {
                src: ['dist/{js,css}/*.*']
            }
        },

        useminPrepare: {
            html: 'index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },

        ngtemplates: {
            kabtv: {
                src: 'views/**.html',
                dest: 'dist/js/kabtv.templates.js',
                options: {
                    usemin: 'dist/js/kabtv.min.js', // <~~ This came from the <!-- build:js --> block
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-angular-templates');

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'clean', 'copy', 'useminPrepare', 'ngtemplates', 'concat', 'uglify', 'cssmin', 'rev', 'usemin'
    ]);
};