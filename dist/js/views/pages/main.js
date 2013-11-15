(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("views/pages/main",["views/pages/PageView","views/IconSelectView","models/IconSelectModel","underscore"],function(e,n,r,i){var s,o;return s=function(e){function s(){return o=s.__super__.constructor.apply(this,arguments),o}return t(s,e),s.prototype.template="#main-template",s.prototype.className="cf",s.prototype.events={"click .js-download":"download"},s.prototype.initialize=function(){return this.isNoPageAnima=!0,s.__super__.initialize.apply(this,arguments),this},s.prototype.render=function(){var e=this;return s.__super__.render.apply(this,arguments),this.iconSelectView=new n({model:new r,$el:this.$("#js-icons-select-view-place"),isRender:!0}),this.$mainLogo=this.$(".main-logo-b"),this.$melon=this.$(".logo-large-e"),this.$mainSection=this.$("#js-icons-select-view-place"),this.$downloadBtn=this.$(".js-download"),i.defer(function(){return!App.mainAnimated&&e.animate(),App.mainAnimated&&e.show()}),this},s.prototype.download=function(){if(App.iconsSelected.length===0){App.notifier.show({type:"error",text:"select at least one icon to download"});return}return this.$downloadBtn.addClass("loading-eff"),$.ajax({type:"post",url:"/download-icons",data:{icons:App.iconsSelected,filters:App.filtersSelected},success:function(e){return location.href="/generated-icons/"+e+".zip"},error:function(e){return console.error(e)},complete:function(){return this.$downloadBtn.removeClass("loading-eff")}})},s.prototype.animate=function(){var e=this;return this.$mainLogo.addClass("animated fadeInRightBig"),this.$melon.addClass("animated swing"),setTimeout(function(){return e.$mainSection.addClass("animated fadeInDown"),App.mainAnimated=!0},1e3)},s.prototype.show=function(){return this.$mainLogo.addClass("is-no-translateX"),this.$melon.removeClass("is-rotated"),this.$mainSection.addClass("animated fadeInDown"),this.$mainLogo.addClass("animated fadeInDown")},s}(e),s})}).call(this);