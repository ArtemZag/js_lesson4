define(['backbone'], function(backbone) {
    var FilmDetails = backbone.Model.extend({
        url: function() {
            if (this.id === undefined)
                return '/api/filmdetails';
            else
                return '/api/filmdetails/' + this.id;
        },
        defaults: {
            poster: '',
            year: 2014,
            name: '',
            id: undefined,
            details1: "",
            details2: "",
            details3: "",
            details4: "",
            details5: "",
            details6: "",
            details7: "",
            details8: "",
        }
    });

    return FilmDetails;
});