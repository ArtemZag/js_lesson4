define(['backbone'], function(backbone) {
    var Film = backbone.Model.extend({
        url: function() {
            if (this.id === undefined)
                return '/api/films';
            else
                return '/api/films/' + this.id;
        },
        defaults: {
            year: 2014,
            name: '',
            id: undefined
        }
    });

    return Film;
});