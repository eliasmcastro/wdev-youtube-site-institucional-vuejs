<template>
  <footer>
    <a v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.link" target="_blank" class="social-link">
      <img :src="socialLink.icon" :alt="socialLink.label" :title="socialLink.label"/>
    </a>
  </footer>
</template>

<script>
import api from '@/services/api.js';

export default {
  name: 'Footer',

  data() {
    return {
      socialLinks: [],
    };
  },

  mounted() {
    api.get('/social-links').then((res) => {
      this.socialLinks = res.data;
    });
  },
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--color-background-nav);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-text-light);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.social-link img {
  width: 20px;
}
</style>
