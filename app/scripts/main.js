require.config({
	paths: {
		"jquery": "vendor/jquery/jquery"
	}
});

requirejs(['jquery'], function(){
	console.log("Hello requirejs+jquery")
});