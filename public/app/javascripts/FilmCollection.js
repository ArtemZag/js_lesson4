define(['backbone', 'Film'], function(backbone, Film) {
    var FilmCollection = backbone.Collection.extend({
        url: '/api/films',
        model: Film
    });

    return FilmCollection;
});