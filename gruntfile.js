module.exports = function (grunt) {
  grunt.initConfig({
    jsvalidate: {
      options: {
        globals: {},
        esprimaOptions: {},
        verbose: false
      },
      all: {
        files: {
          src: ['<%=jshint.all%>']
        }
      }
    },
    jshint: {
      options: {
        node: true,
        globalstrict: true
      },
      all: ['tasks/**/*.js']
    },
    clean: {
      test: ['tmp']
    },
    image: {
      static: {
        options: {
          optimizationLevel: 3
        },  
        files: {
          'tmp/test.png': 'test/fixtures/test.png',
          'tmp/test.jpg': 'test/fixtures/test.jpg',
          'tmp/test.gif': 'test/fixtures/test.gif',
          'tmp/test-uppercase.PNG': 'test/fixtures/test-uppercase.PNG',
          'tmp/test-uppercase.JPG': 'test/fixtures/test-uppercase.JPG',
          'tmp/test-uppercase.GIF': 'test/fixtures/test-uppercase.GIF'
        }
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });
  
  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  
  grunt.loadTasks('tasks');

  grunt.registerTask('mkdir', grunt.file.mkdir);
  grunt.registerTask('test', [
    'clean',
    'mkdir:tmp',
    'image',
    'nodeunit',
    'clean'
  ]);
};