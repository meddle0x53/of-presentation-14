(function () {
  'use strict';

  Handlebars.registerHelper('step', function (data) {
    var ret = '';
    for (var key in data) {
      ret = ret + ' data-' + key + '="' + data[key] + '"';
    }
    return ret;
  });

  function appendSlides (data) {

    var steps = data;
    var htmltemplate = $('#step-template').html();
    var htmltempl = Handlebars.compile(htmltemplate);
    steps.forEach(function (step, index) {
      var templ = htmltempl;

      $.ajax({
        url: '/steps/' + step.uri,
        success: function (data) {
          $('.steps').append(templ({file: data, data: step.data,
                                   class: step.class, id: step.id}));
        },
        async: false
      });
    });
  };

  document.addEventListener("keyup", function (event) {
    console.log(event.keyCode)
    if (event.keyCode === 83) {
      // 's'
      impressApi.goto('title');
    }
    if (event.keyCode === 84) {
      // 't'
      impressApi.goto('terms-1');
    }
    if (event.keyCode === 67) {
      // 'c'
      impressApi.goto('content');
    }
    if (event.keyCode === 65) {
      // 'a'
      impressApi.goto('companies-1');
    }
    if (event.keyCode === 77) {
      // 'm'
      impressApi.goto('menagement-1');
    }
    if (event.keyCode === 85) {
      // 'u'
      impressApi.goto('about-us-1');
    }
    if (event.keyCode === 87) {
      // 'w'
      impressApi.goto('the-world-1');
    }
    if (event.keyCode === 70) {
      // 'f'
      impressApi.goto('freedom-1');
    }
    if (event.keyCode === 79) {
      // 'o'
      impressApi.goto('coda-1');
    }
    if (event.keyCode === 69) {
      // 'e'
      impressApi.goto('coda-2');
    }


    if (event.keyCode === 66) {
      // 'b'
      window.history.back()
    }
  }, false);

  window.Presentation = {
    appendSlides: appendSlides
  };

})();
