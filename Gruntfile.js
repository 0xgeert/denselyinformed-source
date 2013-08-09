module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    uglify: {
      dist: {
        "src": [
          "src/documents/scripts/modernizr.js",
          "node_modules/foundation/js/vendor/zepto.js",
          "node_modules/foundation/js/foundation/foundation.js",
          "node_modules/foundation/js/foundation/foundation.topbar.js"
        ],
        "dest": "out/scripts/zepto-pack.min.js"
      },
      "jquery-pack": {
        "src": [
          "src/documents/scripts/modernizr.js",
          "node_modules/foundation/js/vendor/jquery.js",
          "node_modules/foundation/js/foundation/foundation.js",
          "node_modules/foundation/js/foundation/foundation.topbar.js"
        ],
        "dest": "out/scripts/jquery-pack.min.js"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};