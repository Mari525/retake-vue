<template>
  <v-app dark>
    <Header />
    <v-row>
      <v-col class="col-4 col-md-2">
        <nav class="d-flex flex-column ml-5">
          <nuxt-link to="/" class="white--text text-button text-center">Главная</nuxt-link>
          <nuxt-link to="/about" class="white--text text-button text-center">О нас</nuxt-link>
          <nuxt-link to="/events" class="white--text text-button text-center">События</nuxt-link>
        </nav>
        <div class="mt-10 ml-5">
          <p class="text-center">Зарегистрировано погодных событий: 
            <span class="font-weight-bold text-decoration-underline">{{ eventsCount.events }}</span>
          </p>
          <v-img :src="require('~/static/left_widget_img.jpg')" width="190px" class="ml-auto mr-auto"></v-img>
        </div>
      </v-col>
      <v-col class="col-10">
        <nuxt />
      </v-col>
    </v-row>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'DefaultLayout',
  components: { Header, Footer },
  data: () => ({
    eventsCount: []
  }),
  async mounted() {
		this.eventsCount = await this.$axios.$get('https://demo-api.vsdev.space/api/elonus/left_widget')
	}
}
</script>

<style>

a {
  text-decoration: none;
}

</style>
