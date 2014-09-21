require.config({
    baseUrl: "/app/javascripts",
    paths: {
        Film: "Film",
        FilmDetails: "FilmDetails",
        FilmCollection: "FilmCollection",
        FilmUtemView: "FilmItemView",
        FilmCollectionView: "FilmCollectionView",
        borderOnHoverBehavior: "borderOnHoverBehavior",
        AddFilmButtonView: "AddFilmButtonView",
        PageFilmListView: "PageFilmListView",
        PageFilmDetailsView: "PageFilmDetailsView",
        jquery: "/bower_components/jquery/dist/jquery",
        underscore: "/bower_components/underscore/underscore",
        backbone: "/bower_components/backbone/backbone",
        requirejs: "/bower_components/requirejs/require",
        marionette: '/bower_components/backbone.marionette/lib/backbone.marionette.min'
    },
    shim: {
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        },
        jquery: {
            exports: "jQuery"
        },
        underscore: {
            exports: "_"
        }
    },
    waitSeconds: 15,
    packages: []
});

require(['backbone', 'marionette', 'PageFilmListView', 'PageFilmDetailsView', 'borderOnHoverBehavior'],
    function(backbone, marionette, PageFilmListView, PageFilmDetailsView, borderOnHoverBehavior) {

        var behaviors = {
            BorderOnHoverBehavior: borderOnHoverBehavior
        };

        marionette.Behaviors.behaviorsLookup = function() {
            return behaviors;
        };

        var myApp = new marionette.Application();
        myApp.addRegions({
            appRegion: '#page-container'
        });

        var Controller = backbone.Router.extend({
            routes: {
                "": 'showIndex',
                "FilmDetails/:filmId": 'showFilmDetails'
            },
            showIndex: function() {
                var pageFilmListView = new PageFilmListView();
                pageFilmListView.fetch();
                myApp.appRegion.show(pageFilmListView);
            },
            showFilmDetails: function(filmId) {
                var pageFilmDetailsView = new PageFilmDetailsView();
                pageFilmDetailsView.fetchById(filmId);
                myApp.appRegion.show(pageFilmDetailsView);
            }
        });

        var controller = new Controller();

        backbone.history.start();
    });