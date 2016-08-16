var commonUtils = {

	getValidJSON: function(jsonString){
		try {
	        var o = JSON.parse(jsonString);
	       	if (o && typeof o === "object" && o !== null) {
	            return o;
	        }
	    }
	    catch (e) { }
	    return false;
	},

	generateRandomKey : function(prefix) {
    	    var key = prefix + ":" + Math.random().toString(36).substr(2,8);
    	    return key;
    	}
}

module.exports = commonUtils;