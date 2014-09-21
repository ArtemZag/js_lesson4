define(['marionette', 'FilmDetails', 'FilmDetailsView'], function(marionette, FilmDetails, FilmDetailsView) {
    var PageFilmDetailsView = marionette.ItemView.extend({
        initialize: function() {
            this.filmDetailsView = new FilmDetailsView({
                model: new FilmDetails()
            });
        },
        template: "#page-film-details-template",
        fetchById: function(filmId) {
			this.filmDetailsView.fetchById(filmId);
        },
        onRender: function() {
            this.$("#film-details-container").append(this.filmDetailsView.$el);
        }
    });

    return PageFilmDetailsView;
});