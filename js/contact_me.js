$('form#ContactForm').validate({

  messages: { },

  submitHandler: function(form) {

    $.ajax({

      url: "//formspree.io/steveriedo@hotmail.com",

      method: "POST",

      data: $(form).serialize(),

      dataType: "json",

      success: function(data) {

          $("form#ContactForm :input").prop("disabled", true);

          $('#thanks').show();

      }

    });

    return false;

  }

});