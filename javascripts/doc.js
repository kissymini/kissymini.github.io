(function(S) {
	var $ = S.all;
	var dir = location.pathname;

	$('table').addClass('table table-bordered table-hover');

	var nav = $('.navbox');
	nav.all('li').removeClass('selected');

	if (dir === '/') {
		nav.one('.home').addClass('selected');
	} else if (dir.indexOf('docs/quickstart') !== -1) {
		nav.one('.quickstart').addClass('selected');
	} else if (dir.indexOf('docs/api') !== -1) {
		nav.one('.api').addClass('selected');
	} else if (dir.indexOf('docs/component') !== -1) {
		nav.one('.component').addClass('selected');
	} else if (dir.indexOf('docs/tool') !== -1) {
		nav.one('.tool').addClass('selected');
	} else if (dir.indexOf('docs/example') !== -1) {
		nav.one('.example').addClass('selected');
	} else if (dir.indexOf('docs/about') !== -1) {
		nav.one('.about').addClass('selected');
	}
})(KISSY);