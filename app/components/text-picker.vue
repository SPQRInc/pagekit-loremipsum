<template>
    <div>
        <v-modal v-ref:modal :closed="close">
            <form class="uk-form uk-form stacked"  @submit.prevent="update">
                <div class="uk-modal-header">
                    <h2>{{ 'Insert Text' | trans }}</h2>
                </div>
                <div>
                    <div class="uk-form-row uk-grid uk-form-stacked">
                        <div class="uk-width-large-1-2">
                            <label for="form-loremipsum-count" class="uk-form-label">{{ 'Count' | trans }}</label>
                            <input id="form-loremipsum-count" type="number" min="1" v-model="text.count">
                        </div>
                        <div class="uk-width-large-1-2">
                            <span class="uk-form-label">{{ 'Type' | trans }}</span>
                            <div class="uk-form-controls uk-form-controls-text">
                                <p class="uk-form-controls-condensed">
                                    <label>
                                        <input type="radio" v-model="text.type" value="words">
                                        {{ 'Words' | trans }}
                                    </label>
                                </p>
                                <p class="uk-form-controls-condensed">
                                    <label>
                                        <input type="radio" v-model="text.type" value="sentences">
                                        {{ 'Sentences' | trans }}
                                    </label>
                                </p>
                                <p class="uk-form-controls-condensed">
                                    <label>
                                        <input type="radio" v-model="text.type" value="paragraphs">
                                        {{ 'Paragraphs' | trans }}
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}
                    </button>
                    <button v-if="text.count > 0" class="uk-button uk-button-link"
                            type="submit">{{ 'Update' | trans }}
                    </button>
                </div>
            </form>
        </v-modal>
    </div>
</template>
<script>
module.exports = {

    data: function () {
        return {
            text: {
                count: 150,
                type: 'words'
            }
        }
    },

    ready: function () {
        this.$refs.modal.open();
    },

    methods: {
        close: function () {
            this.$destroy(true);
        },
        update: function () {
            this.$refs.modal.close();
            this.$emit('select', this.text);
        }
    }
};
</script>