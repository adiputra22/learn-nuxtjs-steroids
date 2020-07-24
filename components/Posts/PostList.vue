<template>
    <section class='post-list'>
        <PostPreview 
            id="1"
            thumbnail="https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg"
            title="Hello there!"
            previewText="This is preview text bla bla bla"
            />
        <PostPreview 
            id="2"
            thumbnail="https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg"
            title="Hello there 2!"
            previewText="This is preview text bla bla bla"
            />
        <PostPreview 
            id="2"
            thumbnail="https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg"
            title="Hello there 3!"
            previewText="This is preview text bla bla bla"
            />
    </section>    
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
    components: {
        PostPreview
    }    
}
</script>

<style scoped>
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>