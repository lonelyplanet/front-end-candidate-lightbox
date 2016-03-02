var $ = require('jquery');
require('./sass/main.scss');
require('./sass/lightbox.scss');


Lightbox = function Lightbox( options )
{
    var settings = $.extend({
        content: ''
    }, options);

    var context = this;
    // add lightbox/shadow <div/>'s if not previously added
    if($('#lightbox').length === 0){
        this.$lightbox = $('<div class="challenge-lightbox" />');
        this.$overlay = $('<div class="challenge-overlay"/>');
        this.$overlay.click($.proxy(this.close, this));
        var $close = ($('<div class="close">&times;</>'));
        $('body').append(this.$lightbox);
        $('body').append(this.$overlay);

    }

    //close lightbox on escape
    $(document).on('keydown', function(e) {
        if (e.which == 27 ) {
            context.close();
        }
    });

    //close lightbox on click
    this.$lightbox.on('click', '.close', function(e) {
        context.close();
    });

    // remove any previously added content
    this.$lightbox.empty();

    // insert AJAX content
    if(settings.content !== ''){
        // temporarily add a "Loading..." message in the lightbox
        this.$lightbox.append('<p class="loading">Loading...</p>');

        // request AJAX content
        $.ajax({
            context: this,
            type: 'GET',
            url: settings.content,
            success:function(data){
                // remove "Loading..." message and append AJAX content
                this.$lightbox.empty().append(data).append($close);
            },
            error:function(response){
                this.$lightbox.html(response.responseText);
            }
        });
    }

    return this;
};

Lightbox.prototype.open = function()
{
    // display the lightbox
    this.$lightbox.show();
    this.$overlay.show();
};

Lightbox.prototype.close = function()
{
    this.$lightbox.hide();
    this.$overlay.hide();

    // remove contents of lightbox in case a video or other content is actively playing
    this.$lightbox.remove();
    this.$overlay.remove();
    window.location.reload();
}
;



$('.js-lightbox-opener').click(function(e){
    e.preventDefault();
    var content = e.currentTarget.href;
    var lightbox = new Lightbox({
        content: content
    });
    lightbox.open();
});