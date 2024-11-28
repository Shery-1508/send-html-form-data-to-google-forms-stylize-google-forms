$(document).ready(function () {
    // Set form field names from config
    $('#name').attr('name', formConfig.fields.name);
    $('#email').attr('name', formConfig.fields.email);
    $('#subject').attr('name', formConfig.fields.subject);
    $('#message').attr('name', formConfig.fields.message);

    $('#contact_form').submit(function (e) {
        e.preventDefault();
        
        // Get form data using config field IDs
        var formData = {};
        formData[formConfig.fields.name] = $('#name').val();
        formData[formConfig.fields.email] = $('#email').val();
        formData[formConfig.fields.subject] = $('#subject').val();
        formData[formConfig.fields.message] = $('#message').val();

        $.ajax({
            url: formConfig.formUrl,
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $("#form-status")
                        .html(formConfig.messages.success)
                        .addClass("success")
                        .show();
                    $('#contact_form')[0].reset();
                },
                200: function () {
                    $('#form-status')
                        .text(formConfig.messages.error)
                        .addClass("error")
                        .show();
                }
            }
        });
    });
});
