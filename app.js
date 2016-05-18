
var helpers = require('handlebars-helpers')({
  handlebars: Handlebars
});

var tmpl = "<h2>{{dashcase title}}</h2>";

var context = {
  title: 'this is foo'
};

var fn = Handlebars.compile(tmpl);
var content = fn(context);
console.log(content);
