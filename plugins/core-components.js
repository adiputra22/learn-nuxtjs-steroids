import Vue from 'vue';

import PostList from '@/components/Posts/PostList';
import AppButton from '@/components/UI/AppButton';
import AdminPostForm from '@/components/Admin/AdminPostForm';

Vue.component('AppButton', AppButton);
Vue.component('PostList', PostList);
Vue.component('AdminPostForm', AdminPostForm);