define(['marionette'], function(marionette) {
    return marionette.Behavior.extend({
        defaults: {
            width: '1px',
            color: 'red',
            style: 'solid'
        },

        events: {
            'mouseenter': 'onMouseEnter',
            'mouseleave': 'onMouseLeave'
        },

        onMouseEnter: function() {            
            this.previousWidth = this.$el.css('border-width');
            this.previousColor = this.$el.css('border-color');
            this.previousStyle = this.$el.css('border-style');
            this.$el.css('border-width', this.options.width);
            this.$el.css('border-color', this.options.color);
            this.$el.css('border-style', this.options.style);
        },

        onMouseLeave: function() {            
            this.$el.css('border-width', this.previousWidth);
            this.$el.css('border-color', this.previousColor);
            this.$el.css('border-style', this.previousStyle);
        }
    });
});