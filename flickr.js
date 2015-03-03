var fotos;
$(document).ready(function() {
	var flickr = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada& tagmode=any&format=json&jsoncallback=?";

	$("#download").click(function(){
		$.getJSON(flickr,{
			tags: "fuenlabrada",
			tagmode: "any",
			format: "json"
	})
		.done(function(datos){
			fotos = datos;
			var lista = [];
			for(var i=0;i<fotos.items.length;i++){
				var fot = fotos.items[i].media.m;
				lista.push("<img id='foto" + i + "' src='" + fot + "'>");
			}
			$("<ul/>",{
				"class": "listafotos",
				html: lista.join("")
			}).appendTo("body");
		});
	});
});