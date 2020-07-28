<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>

    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
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
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-intro.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
