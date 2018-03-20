
var $ = require('jquery');
var helpers = require('handlebars-helpers')({
  handlebars: Handlebars
});

$(function() {
  var name = $('#name').on('keyup', function(e) {
    if (name.val().length > 1) {
      var data = {name: name.val()};
      render(data);
    }
  });

  name.focus();

  var tmpl = "<h2>{{dashcase name}}</h2>";
  var fn = Handlebars.compile(tmpl);

  function render(data) {
    var content = fn(data);
    $('#content').html(content);
  }
});
