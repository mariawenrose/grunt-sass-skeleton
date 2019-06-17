module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'expanded'
        },
        
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*css', '!*min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: ['css/style.css'],
        tasks: ['cssmin']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('default', ['sass', 'cssmin']);
  grunt.registerTask('w', 'watch');





};