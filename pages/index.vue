<template>
  <v-container class="d-flex">
    <p class="mr-10 text-justify">{{ indexContent.text }}</p>
    <v-img :src="indexContent.image" width="300"></v-img>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    indexContent: []
  }),
  async mounted() {
		this.indexContent = await this.$axios.$get('https://demo-api.vsdev.space/api/elonus/home_page')
	}
}
</script>