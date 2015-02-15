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
                src: ['**', '!js/*.js', '!**/*.css', '!app/**' ,'!views/**', '!node_modules/**', '!bower_components/**'],
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
                src: 'app/**/*.html',
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
        },

        ngconstant: {
            options: {
                name: 'app.core',
                dest: 'app/core/constants.js',
                deps: false,
                wrap: true,
                constants: {
                    API_BASE: 'http://kab.tv/api/',
                    HELP_IMAGE_BASE: 'http://live.kab.tv/button.php?image=tech',
                    CLIP_ON_FINISH_EVENT: 'the player is end'
                }
            },
            dev: {
                constants: {
                    API_BASE: 'http://dev.kab.tv/api/'
                }
            },
            staging: {
                constants: {
                    API_BASE: 'http://dev.kab.tv/api/'
                }
            },
            production: {
                constants: {
                    API_BASE: 'http://kab.tv/api/'
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
    grunt.loadNpmTasks('grunt-ng-constant');

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'clean',
        'ngconstant:production',
        'copy',
        'useminPrepare',
        'ngtemplates',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'rev',
        'usemin',
        'ngconstant:dev'
    ]);

    grunt.registerTask('staging', [
        'clean',
        'ngconstant:staging',
        'copy',
        'useminPrepare',
        'ngtemplates',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'rev',
        'usemin',
        'ngconstant:dev'
    ]);

};