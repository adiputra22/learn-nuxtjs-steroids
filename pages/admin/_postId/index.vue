<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    components: {
        AdminPostForm
    },
    layout: "admin",
    data() {
        return {
            loadedPost: {
                author: 'adiputra',
                title: 'my owesome post',
                content: 'super amazing, thanks for that!',
                thumbnailLink: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
            }
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