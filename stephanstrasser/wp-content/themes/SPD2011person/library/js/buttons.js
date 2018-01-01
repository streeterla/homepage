// JavaScript Document
(function() {
    tinymce.create('tinymce.plugins.mylink', {
        init : function(ed, url) {
            ed.addButton('rollout', {
                title : 'Roll-Out-Box',
                image : url+'/rollout-button.png',
                onclick : function() {
                     ed.selection.setContent('[rollout titel=""]' + ed.selection.getContent() + '[/rollout]');

                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('mylink', tinymce.plugins.mylink);
})();