module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            compile: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/css/styles.css': 'src/css/importer.scss'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        uglify: {
            minify: {
                files: {
                    'dist/js/script.js': ['src/js/bootstrap.min.js', 'src/js/script.js']
                }
            }
        },

        watch: {
            style: {
                files: "css/**/*.scss",
                tasks: ['sass', 'htmlmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass'); 
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-uglify'); 

    grunt.registerTask('default', ['sass:compile', 'uglify', 'htmlmin', 'watch']);
}
