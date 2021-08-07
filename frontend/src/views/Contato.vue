<template>
  <main>
    <section class="container">
      <h1>Contato</h1>
      <section class="contacts">
        <div v-for="(contact, index) in contacts" :key="index" class="contact">
          <div class="contact-title">{{ contact.title }}</div>
          <a :href="contact.link" target="_blank">{{ contact.label }}</a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import api from '@/services/api.js';

export default {
  name: 'Contato',

  data() {
    return {
      contacts: [],
    };
  },

  mounted() {
    api.get('/contacts').then((res) => {
      this.contacts = res.data;
    });
  },
}
</script>

<style scoped>
main {
  align-items: center;
}

.contacts {
  margin-bottom: 40px;
  color: var(--color-text-dark)
}

.contact-title {
  font-weight: bold;
  font-size: 18px;
}

.contact {
  margin-bottom: 20px;
}

.contact a {
  color: var(--color-text-dark);
}
</style>