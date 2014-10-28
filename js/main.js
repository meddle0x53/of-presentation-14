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
      impressApi.goto('management-1');
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


    if (event.keyCode === 49) {
      // '1' - populism in companies
      impressApi.goto('companies-8');
    }
    if (event.keyCode === 50) {
      // '2' - processes
      impressApi.goto('management-4');
    }
    if (event.keyCode === 51) {
      // '3' - late choices
      impressApi.goto('management-8');
    }
    if (event.keyCode === 52) {
      // '4' - talking
      impressApi.goto('about-us-4');
    }
    if (event.keyCode === 53) {
      // '5' - reasons why you took the road
      impressApi.goto('about-us-15');
    }
    if (event.keyCode === 54) {
      // '6' - things that you don't like in the industry as it is
      impressApi.goto('the-world-6');
    }
    if (event.keyCode === 55) {
      // '7' - freedom for you
      impressApi.goto('freedom-3');
    }
    if (event.keyCode === 56) {
      // '8' - Coda
      impressApi.goto('coda-1');
    }
    if (event.keyCode === 57) {
      // '9' - Resources and people
      impressApi.goto('companies-3');
    }
  }, false);

  window.Presentation = {
    appendSlides: appendSlides
  };

})();
