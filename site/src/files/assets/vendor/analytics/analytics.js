var _gaq = _gaq || [];
var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', 'UA-39060941-1']);
_gaq.push(['_setDomainName', 'camunda.org']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$('#download-modeler').click(
  _gaq.push(['_trackEvent', 'Downloads', 'camunda-modeler', this.href])
);

$('#download-bpm').click(
  _gaq.push(['_trackEvent', 'Downloads', 'camunda-bpm', this.href])
);