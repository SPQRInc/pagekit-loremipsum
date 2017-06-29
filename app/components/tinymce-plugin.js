module.exports = {

    plugin: true,

    created: function () {
        var vm = this;

        if (typeof tinyMCE === 'undefined') {
            return;
        }

        this.$parent.editor.plugins.push('-loremipsum');
        tinyMCE.PluginManager.add('loremipsum', function (editor) {

            var showDialog = function () {
                var element = editor.selection.getNode();

                if (element.nodeName === 'DIV' && !!element.attributes['data-loremipsum'].value) {
                    editor.selection.select(element);
                }

                new vm.$parent.$options.utils['text-picker']({
                    parent: vm,
                    data: {
                        text: {
                            count: 150,
                            type: 'words',
                            wrapping: ''
                        }
                    }
                }).$mount()
                    .$appendTo('body')
                    .$on('select', function (text) {
                        this.$http.get('api/loremipsum{/type}{/count}{/wrapping}', {
                            type: text.type,
                            count: text.count,
                            wrapping: text.wrapping
                        }).then(function (res) {
                            editor.selection.setContent(res.data.content);
                        });
                        editor.fire('change');
                    });
            };

            editor.addButton('textPicker', {
                tooltip: vm.$trans('Insert Loremipsum'),
                icon: 'none uk-icon-pencil" style="font-family: FontAwesome;',
                onclick: showDialog
            });

            editor.addContextToolbar(function (element) {
                return element && element.nodeName === 'DIV' && !!element.attributes['data-loremipsum'].value;
            }, 'textPicker');

            editor.addMenuItem('textPicker', {
                text: vm.$trans('Insert Loremipsum'),
                icon: 'none uk-icon-pencil" style="font-family: FontAwesome;',
                context: 'insert',
                onclick: showDialog
            });
        });
    },

    methods: {}

};

window.Editor.components['plugin-loremipsum'] = module.exports;