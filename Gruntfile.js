module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      "jsfiles_static_zepto-pack": {
        "src": grunt.option('scriptToPack_zepto') ? JSON.parse(grunt.option('scriptToPack_zepto')) : [],
        "dest": "out/scripts/zepto-pack.min.js"
      },
      "jsfiles_static_jquery-pack": {
        "src": grunt.option('scriptToPack_jquery') ? JSON.parse(grunt.option('scriptToPack_jquery')) : [],
        "dest": "out/scripts/jquery-pack.min.js"
      }
    },
    copy:{
      "jsfiles_dev": {
        files:[
          {
            expand: true,
            flatten: true,
            src: [
              "src/documents/scripts/modernizr.js",
              "node_modules/foundation/js/vendor/zepto.js",
              "node_modules/foundation/js/foundation/foundation.js",
              "node_modules/foundation/js/foundation/foundation.topbar.js"
            ],
            dest: 'out/scripts/',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask("buildJS", "build javascript depending on environment", function(env){
      if(env === "static"){
        grunt.task.run([
          'uglify:jsfiles_static_zepto-pack',
          'uglify:jsfiles_static_jquery-pack'
        ]);
      }else if(env === "development"){
        // console.log(JSON.parse(grunt.option('scriptToPack_zepto'));
        grunt.task.run(['copy:jsfiles_dev']);
      }else{
         grunt.warn("env must be defined with 'development' or 'static' i.e: 'buildJS:development' or 'buildJS:static'");
      }
  });

};