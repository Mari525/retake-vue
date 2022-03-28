<template>
  <v-container class="d-flex">
    <p class="mr-10 text-justify">{{ aboutContent.text }}</p>
  </v-container>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
    aboutContent: []
  }),
  async mounted() {
		this.aboutContent = await this.$axios.$get('https://demo-api.vsdev.space/api/elonus/about_page')
	}
}
</script>