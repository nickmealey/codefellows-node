module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'sass/application.scss'
        },
        options: {
          sourceMap: true,
          includePaths: [
            require('node-bourbon').includePaths,
            './bower_components/color-scale',
            './bower_components/type-rhythm-scale',
            './bower_components/rwd-toolkit'
          ]
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'sass/**/*.sass', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};