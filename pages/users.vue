<template>
    <div>
        <input type="text" v-model="userId">
        <input @click="loadUser" type="button" value="LoadUser">
        
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        loadUser() {
            this.$router.push('/users/' + this.userId);
        }
    },
    layout: 'users',
}
</script>