<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>

        <AppControlInput
        control-type="textarea"
        v-model="editedPost.previewText">Preview Text</AppControlInput>

        <AppControlInput
        control-type="textarea"
        v-model="editedPost.content">Content</AppControlInput>

        <AppButton type="submit">Save</AppButton>

        <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</AppButton>
    </form>    
</template>

<script>
import AppButton from '@/components/UI/AppButton';
import AppControlInput from '@/components/UI/AppControlInput';

export default {
    data() {
        // console.log('this post: ');
        // console.log(this.post)

        return {
            editedPost: this.post ? { ...this.post } : {
                author: '',
                title: '',
                thumbnail: '',
                previewText: '',
                content: ''
            }
        }
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    methods: {
        onSave() {
            this.$emit('submit', this.editedPost);
        },
        onCancel() {
            this.$router.push('/admin');
        }
    },
    components: {
        AppControlInput,
        AppButton
    }
}
</script>

<style scoped>

</style>