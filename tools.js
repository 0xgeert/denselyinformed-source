
// Add DocPad to our Application
var docpadInstance,
	_ = require("lodash");

var docpadInstanceConfiguration = {
    env: 'static'
};

var balUtil = require('bal-util'),
	extractOptsAndCallback = require('extract-opts').extractOptsAndCallback;

docpadInstance = require('docpad').createInstance(docpadInstanceConfiguration, function(err){
    if (err)  return console.log(err.stack);

    var that = docpadInstance;

    var generateRender = function(opts, next) {
		var docpad, _ref1;
		_ref1 = extractOptsAndCallback(opts, next), opts = _ref1[0], next = _ref1[1];
		docpad = that;
		opts.templateData || (opts.templateData = that.getTemplateData());
		opts.renderPasses || (opts.renderPasses = that.getConfig().renderPasses);
		balUtil.flow({
		  object: docpad,
		  //ORIG
		  //action: 'contextualizeFiles renderFiles writeFiles',
		  action: 'contextualizeFiles',
		  args: [opts],
		  next: function(err) {
		    return next(err);
		  }
		});
		return that;
	};

    //overwrite
    docpadInstance.generateRender = generateRender;

    docpadInstance.action('generate', function(err){
		if(err){
			throw new err;
		}
		_.each(docpadInstance.getCollection('html').models, function(doc){
			//do stuff
		})
    });
});