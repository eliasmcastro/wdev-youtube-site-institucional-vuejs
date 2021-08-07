<template>
  <main>
    <div class="text-top">Vídeos novos toda <strong>quinta</strong> às <strong>20h</strong></div>
    <a href="https://youtube.com/wdevoficial" target="_blank">
      <img src="@/assets/subscribe.svg" class="subscribe" alt="Inscreva-se">
    </a>
    <div class="text-bottom">youtube.com/wdevoficial</div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
main {
  justify-content: center;
  background-color: var(--color-background-home);
  text-align: center;
}

.text-top {
  color: var(--color-text-light);
  font-size: 22px;
  margin-bottom: 20px;
}

.subscribe {
  width: 340px;
}

.text-bottom {
  color: var(--color-text-light);
  font-size: 18px;
  margin-top: 20px;
}

@media (min-width: 700px) {
  .subscribe {
    width: 370px;
  }
}
</style>