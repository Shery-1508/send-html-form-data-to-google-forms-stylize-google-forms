$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
//      Change names accordingly
        var name = $("input[name='entry.2005620554']").val();
        var email = $("input[name='entry.1674305454']").val();
        var number = $("input[name='entry.1166974658']").val();
        var message = $("textarea[name='entry.1568600166']").val();
        $.ajax({
//          again change name url and names as in you form
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScr0Dm-uy20c-JCKfR2EOA-mt2cU10vBy9ZGPtJm1p8NRQfjw/formResponse",
            data: { "entry.2005620554": name, "entry.1674305454": email, "entry.1166974658": number, "entry.1568600166": message },
            type: "POST",
            dataType: "xml",
            statusCode: {
//              Message to display if from is sent succesfully or failed to sent 
                0: function () {
                    $("#form-status").html("Thank you for your message! We will get back to you soon.").addClass("success");
                    $('#contact-form')[0].reset();
                },
                200: function () {
                    // Error - show an error message
                    $('#form-status').text('Sorry, there was an error sending your message. Please try again later.').removeClass('success').addClass('error');
                }
            }
        });
    });
});
