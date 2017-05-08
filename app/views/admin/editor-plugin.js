module.exports = {

    plugin: true,

    created: function () {
        var vm = this, editor = this.$parent.editor;

        if (!editor || !editor.htmleditor) {
            return;
        }

        editor.addButton('loremipsum', {
            title: 'Lorem Ipsum',
            label: '<i class="uk-icon-pencil"></i>'
        });

        editor.options.toolbar.push('loremipsum');

        editor
            .on('action.loremipsum', function (e, editor) {
                vm.openModal();
            })
            .on('renderLate', function () {
                while (vm.$children.length) {
                    vm.$children[0].$destroy();
                }
            });

        editor.debouncedRedraw();
    },


    methods: {

        openModal: function () {
            var editor = this.$parent.editor, cursor = editor.editor.getCursor();

            new this.$options.utils['text-picker']({
                parent: this,
                data: {
                    text: {
                        count: 150,
                        type: 'words'
                    }
                }
            })
                .$mount()
                .$appendTo('body')
                .$on('select', function (text) {
                    this.$http.get('api/loremipsum{/type}{/count}', {
                        type: text.type,
                        count: text.count
                    }).then(function (res) {
                        editor.editor.replaceRange(res.data.content, cursor);
                    });
                });
        }
    },

    components: {},

    utils: {
        'text-picker': Vue.extend(require('../../components/text-picker.vue'))
    }

};

window.Editor.components['editor-plugin'] = module.exports;