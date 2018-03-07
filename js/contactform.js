$('form#contact_form').validate({

  messages: { },

  submitHandler: function(form) {

    $.ajax({

      url: "//formspree.io/hello@reecreate.com",

      method: "POST",

      data: $(form).serialize(),

      dataType: "json",

      success: function(data) {

          $("form#contact_form :input").prop("disabled", true);

          $('#thanks').show();

      }

    });

    return false;

  }

});