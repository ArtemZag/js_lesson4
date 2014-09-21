define(['marionette'], function(marionette) {
	var AddFilmButtonView = marionette.ItemView.extend( {
		template: '#add-film-button-template',
		events: {
			'click' : 'addFilm'
		},
		addFilm: function() {
			this.trigger('addFilmClick');
		},
		initialize: function() {
			this.render();
		},
        show: function() {
            this.$el.show();
        },
        hide: function() {
            this.$el.hide();
        }
	});

	return AddFilmButtonView;
});