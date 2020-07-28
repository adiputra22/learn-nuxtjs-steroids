<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  asyncData(context, callback) {
    console.log('asyncData is loaded');
    
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'this is title',
            previewText: 'preview text here',
            content: 'this is content',
            thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
          },
          {
            id: '2',
            title: 'this is title 2',
            previewText: 'preview text here',
            content: 'this is content',
            thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
          },
          {
            id: '3',
            title: 'this is title 3',
            previewText: 'preview text here',
            content: 'this is content',
            thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
          },
          {
            id: '4',
            title: 'this is title 4',
            previewText: 'preview text here',
            content: 'this is content',
            thumbnail: 'https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg'
          }
        ]
      });
    }, 1500);
  },
}
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>