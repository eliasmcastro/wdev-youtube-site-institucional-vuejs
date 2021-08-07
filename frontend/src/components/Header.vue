<template>
  <header>
    <nav class="container">
      <router-link to="/">
        <img src="@/assets/wdev.svg" class="logo" alt="WDEV">
      </router-link>
      <img src="@/assets/menu.svg" @click="openCloneMenu" class="menu-button" alt="Abrir Menu">

      <div v-if="menuActive" @click="openCloneMenu" class="menu-overlay"></div>

      <div class="menu-items" :class="{'active': menuActive}">
        <img src="@/assets/wdev.svg" class="menu-logo" alt="WDEV">
        <ul>
          <li @click="openCloneMenu"><router-link to="/">Home</router-link></li>
          <li @click="openCloneMenu"><router-link to="/videos">Vídeos</router-link></li>
          <li @click="openCloneMenu"><router-link to="/sobre">Sobre</router-link></li>
          <li @click="openCloneMenu"><router-link to="/contato">Contato</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      menuActive: false
    }
  },

  methods: {
    openCloneMenu() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--color-background-nav);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  width: 130px;
}

.menu-button {
  width: 30px;
}

.menu-overlay {
  width: 40%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
}

.menu-items {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
}

.menu-items.active {
  display: flex;
}

.menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0;
}

ul li a {
  color: var(--color-text-light)
}

@media (min-width: 700px) {
  .menu-button,
  .menu-logo,
  .menu-overlay {
    display: none;
  }

  .menu-items {
    display: flex;
    position: static;
    width: auto;
    height: 60px;
  }

  ul {
    display: flex;
    align-items: center;
    height: 60px;
  }

  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>