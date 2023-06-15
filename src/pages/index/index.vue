<template>
	<view class="public-phone">
		<view class="size32">{{ title }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	async onLoad() {
		console.log('-----------------', await this.$format.date.getCurrentDown('2023.05.30', ''))
	},
	methods: {

	}
}
</script>

<style></style>
