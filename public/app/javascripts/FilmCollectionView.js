define(['marionette', 'FilmItemView'], function(marionette, FilmItemView) {
    var FilmCollectionView = marionette.CollectionView.extend({
        childView: FilmItemView,

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

    return FilmCollectionView;
});