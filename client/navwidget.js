Template.navwidget.events({
    'click a': function(event) {
        var _currentTarget = event.currentTarget;
        $('#content').removeClass('animated fadeIn').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
            Router.current().redirect(_currentTarget.attributes['data-route'].value);
        });
    }
});