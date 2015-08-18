KISSY.add(function (S) {

	"use strict";

	if(typeof window._storage_A == 'undefined'){
		window._storage_A = 0;
	}

	window._storage_A ++;

	return window._storage_A;

});
