/*global module:false*/
module.exports = function (grunt) {

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default task.
    grunt.registerTask('default', ['clean', 'concat', 'jade', 'compass']);
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

        watch: {
            files: ['src/**/*', 'test/**/*'],
            tasks: ['default'],
            options: {
                livereload: true
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
