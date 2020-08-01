var MarcoTemplates = ((function(MarcoTemplates){
	
	"use strict";
	
	if(MarcoTemplates === undefined){
		MarcoTemplates = {};
	}
	
	MarcoTemplates.imgThumbnail = function(paramObj){
		var html =  "<img id='%id%' class='img-thumbnail' data-file-name='%fileName%' src='data:%mime%; base64,%base64%'/>";
		return MarcoUtils.template(html, paramObj);
	}
	
	return MarcoTemplates;
})(MarcoTemplates));
