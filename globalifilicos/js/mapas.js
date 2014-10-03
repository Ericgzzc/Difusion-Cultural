function initialize() {
	  var latlng1 = new google.maps.LatLng(25.650637,-100.285631);/*elizondo*/
	  var latlng2 = new google.maps.LatLng(25.668934,-100.309115);/*teatro de la ciudad*/
  	  var latlng3 = new google.maps.LatLng(25.652127,-100.285974);/*estadio tecnológico*/
   	  var latlng4 = new google.maps.LatLng(25.65145,-100.29121);/*rectoría*/
   	  var latlng5 = new google.maps.LatLng(25.650773,-100.285631);/*Sala 1 del ALE*/
	  var latlng6 = new google.maps.LatLng(25.65084,-100.288912);/*Jardín de las carreras*/
//	  var latlng7 = new google.maps.LatLng(25.65084,-100.288912);/*PENDIENTE recorridos turísticos*/
	  var latlng8 = new google.maps.LatLng(25.65145,-100.29121);/*Jardín de las carreras*/
	  var latlng9 = new google.maps.LatLng(25.650676,-100.285811);/*Vestíbulo del ALE*/
	  var latlng10 = new google.maps.LatLng(25.676399,-100.34479);/*concha acústica del obispado*/
	  
	  var aux = document.getElementsByClassName("mapa");

	  if(aux.item(0).id == "map_canvas1"){
		 // ***** AUDITORIO LUIS ELIZONDO ***** 
		  var myOptions = {
		  zoom: 16,
		  center: latlng1,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);
		var marker1 = new google.maps.Marker({
			position: latlng1, 
			map: map,
			title:"Auditorio Luis Elizondo"
		});
	 }
	else if(aux.item(0).id == "map_canvas2"){
		var myOptions = {
		  zoom: 16,
		  center: latlng2,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng2, 
			map: map,
			title:"Teatro de la Ciudad"
		});
	}
	
	else if(aux.item(0).id == "map_canvas3"){
		var myOptions = {
		  zoom: 16,
		  center: latlng3,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas3"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng3, 
			map: map,
			title:"Estadio Tecnológico"
		});
		
	}
	
		else if(aux.item(0).id == "map_canvas4"){
		var myOptions = {
		  zoom: 16,
		  center: latlng4,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas4"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng4, 
			map: map,
			title:"Rectoría ITESM"
		});
		
	}
	
		else if(aux.item(0).id == "map_canvas5"){
		var myOptions = {
		  zoom: 16,
		  center: latlng5,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas5"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng5, 
			map: map,
			title:"Sala 1 del ALE"
		});
		
	}
	
	
		else if(aux.item(0).id == "map_canvas6"){
		var myOptions = {
		  zoom: 16,
		  center: latlng6,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas6"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng6, 
			map: map,
			title:"Jardín de las carreras"
		});
		
	}
	
		else if(aux.item(0).id == "map_canvas8"){
		var myOptions = {
		  zoom: 16,
		  center: latlng8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas8"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng8, 
			map: map,
			title:"Mural de rectoria"
		});
		
	}
	
		else if(aux.item(0).id == "map_canvas9"){
		var myOptions = {
		  zoom: 16,
		  center: latlng9,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas9"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng9, 
			map: map,
			title:"Vestíbulo del ALE"
		});
		
	}
	
	else if(aux.item(0).id == "map_canvas10"){
		var myOptions = {
		  zoom: 16,
		  center: latlng10,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("map_canvas10"), myOptions);
		var marker = new google.maps.Marker({
			position: latlng10, 
			map: map,
			title:"Concha Acústica del Obispado"
		});
		
	}
	
	
	}