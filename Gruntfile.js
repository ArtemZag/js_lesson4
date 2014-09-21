module.exports = function(grunt) {
    grunt.initConfig({
        stylus: {
            compile: {
                files: {
                    'public/app/styles/style.css': 'public/app/styles/style.styl'
                }
            }
        },
        jade: {
            options: {
                pretty: true
            },
            compile: {
                files: {
                    'public/app/index.html': 'public/app/index.jade'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/app/javascripts/",
                    mainConfigFile: "public/app/javascripts/build/index.js",
                    name: 'index',
                    out: "public/app/javascripts/build/index.js",
                    optimize: 'none',
                    paths: {
                        jquery: "../../../bower_components/jquery/dist/jquery",
                        underscore: "../../../bower_components/underscore/underscore",
                        backbone: "../../../bower_components/backbone/backbone",
                        requirejs: "../../../bower_components/requirejs/require",                   
                        marionette: "../../../bower_components/backbone.marionette/lib/backbone.marionette",
                    },
                    exclude: ['jquery', 'underscore', 'backbone', 'requirejs', 'marionette']
                }
            }
        },
        jshint: {
            all: ['public/app/javascripts/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.registerTask('default', ['stylus', 'jade', 'requirejs', 'jshint']);
}