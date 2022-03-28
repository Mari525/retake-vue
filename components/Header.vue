<template>
	<v-container fluid>
      <v-app-bar
      color="deep-purple"
      class="d-flex"
      >	
        <v-img :src="require('~/static/earthquake_img.jpg')" class="mr-3 ml-5" height="50" width="50" />
        <p class="mr-16 mt-4 text-uppercase font-weight-medium">Илонус</p>
        <p class="mt-4">Регистрация погодных событий на Марсе "Илонус"</p>
      </v-app-bar>
    </v-container>
</template>

<script>
export default {
  name: "Header"
}
</script>