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
  asyncData(context) {
    console.log('asyncData is loaded');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve({
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

        // reject(new Error());
      }, 1500);
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      context.error(e);
    });
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
    console.log(this.$store.getters.loadedPosts);
  }
}
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>