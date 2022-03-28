<template>
  <v-app dark>
    <Header />
    <v-row>
      <v-col class="col-4 col-md-2">
        <nav class="d-flex flex-column ml-5">
          <v-btn outlined class="mb-5">
            <nuxt-link to="/" class="white--text">Главная</nuxt-link>
          </v-btn>
          <v-btn outlined class="mb-5">
            <nuxt-link to="/about" class="white--text">О нас</nuxt-link>
          </v-btn>
          <v-btn outlined>
            <nuxt-link to="/events" class="white--text">События</nuxt-link>
          </v-btn>
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
