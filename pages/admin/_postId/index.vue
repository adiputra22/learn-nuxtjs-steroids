<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
export default {
    layout: "admin",
    middleware: ['check-token','auth'],
    asyncData(context) {
        return context.app.$axios.$get(`/posts/${context.params.postId}.json`)
            .then(data => {
                return {
                    loadedPost: { ...data, id: context.params.postId }
                }
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmitted(editedPost) {
            this.$store.dispatch('editPost', editedPost)
                .then(() => {
                    this.$router.push('/admin');
                })
                .catch(error => console.log(error));
        }
    }
}
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>