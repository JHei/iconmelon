// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('views/ThanxModalView', ['views/ProtoView', 'underscore', 'jquery', 'helpers'], function(ProtoView, IconModel, _, $, helpers) {
    var ThanxModalView, _ref;

    ThanxModalView = (function(_super) {
      __extends(ThanxModalView, _super);

      function ThanxModalView() {
        _ref = ThanxModalView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ThanxModalView.prototype.template = '#thanx-modal-view-template';

      ThanxModalView.prototype.className = 'modal-b';

      ThanxModalView.prototype.events = {
        'click #js-close': 'close',
        'click .js-findout': 'findout'
      };

      ThanxModalView.prototype.initialize = function(o) {
        var _this = this;

        this.o = o != null ? o : {};
        ThanxModalView.__super__.initialize.apply(this, arguments);
        this.blindedClickFun = function() {
          _this.close();
          return App.$blinded.off('click', _this.blindedClickFun);
        };
        this.render();
        return this;
      };

      ThanxModalView.prototype.render = function() {
        ThanxModalView.__super__.render.apply(this, arguments);
        this.$el.hide().appendTo(document.body).fadeIn();
        App.$blinded.fadeIn('fast').css({
          'border': '1px solid rgba(0,0,0,.75)'
        });
        App.$blinded.on('click', this.blindedClickFun);
        return this;
      };

      ThanxModalView.prototype.findout = function() {
        App.router.navigate('#/support-us', {
          trigger: true
        });
        return this.close();
      };

      ThanxModalView.prototype.close = function() {
        var _this = this;

        if (typeof this.onClose === "function") {
          this.onClose();
        }
        App.$blinded.hide();
        this.teardown();
        return this.$el.fadeOut('fast', function() {
          return _this.$el.remove();
        });
      };

      return ThanxModalView;

    })(ProtoView);
    return ThanxModalView;
  });

}).call(this);