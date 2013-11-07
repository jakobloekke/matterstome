/*global module:false*/
module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);


    // Default task.
    grunt.registerTask('default', ['clean', 'concat', 'jade', 'compass']);
    grunt.registerTask('server', ['default', 'connect:livereload', 'watch']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('deploy', ['gh-pages']);

    // Travis CI task.
    grunt.registerTask('travis', ['clean', 'karma']);

    // Project configuration.
    grunt.initConfig({




        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
            '* License: <%= pkg.license %> */\n\n\n',

        src: {
            js: ['src/**/*.js'],
            css: ['src/**/*.css']
        },



        // Task configuration.

        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729 //inject the script
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        'build'
                    ]
                }
            }
        },

        watch: {
            files: ['src/**/*', 'test/**/*'],
            tasks: ['default'],
            options: {
                livereload: '<%= connect.options.livereload %>' //Get the port number from connect configuration
            }
        },

        clean: {build: ['build']},

        concat: {
            app: {
                src: [
                    'src/js/libs/**/*.js',
                    'src/js/app.js',
                    'src/js/constants.js',
                    'src/js/services/**/*.js',
                    'src/js/controllers/**/*.js',
                    'src/js/filters/**/*.js',
                    'src/js/directives/**/*.js',
                    'src/js/routes.js'
                ],
                dest: 'build/js/app.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        jade: {
            index: {
                files: {
                    "build/index.html": ["src/index.jade"]
                },
                options: {
                    client: false,
                    pretty: true
                }
            },
            views: {
                expand: true,
                cwd: 'src/views/',
                src: ['**/*.jade'],
                dest: 'build/views/',
                ext: '.html'

            }
        },

        compass: {
            build: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'build/css'
                }
            }
        },

        'gh-pages': {
            options: {
                base: 'build',
                add: true
            },
            src: ['**']
        }




    });
};
