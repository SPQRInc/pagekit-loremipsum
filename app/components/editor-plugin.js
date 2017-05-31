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

            new this.$parent.$options.utils['text-picker']({
                parent: this,
                data: {
                    text: {
                        count: 150,
                        type: 'words',
                        wrapping: ''
                    }
                }
            })
                .$mount()
                .$appendTo('body')
                .$on('select', function (text) {
                    this.$http.get('api/loremipsum{/type}{/count}{/wrapping}', {
                        type: text.type,
                        count: text.count,
                        wrapping: text.wrapping
                    }).then(function (res) {
                        editor.editor.replaceRange(res.data.content, cursor);
                    });
                });
        }
    },

    components: {}

};

window.Editor.components['editor-plugin'] = module.exports;
window.Editor.utils['text-picker'] = Vue.extend(require('./text-picker.vue'));
