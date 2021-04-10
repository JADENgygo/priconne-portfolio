<template>
	<div class="uk-container uk-margin-small-top uk-margin-bottom">
		<div class="uk-text-muted">サイト作成者: <a class="uk-link-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
		<div class="uk-text-lead uk-text-center uk-margin-top">
			作成したプリコネツール
		</div>
		<div class="uk-text-muted uk-text-center uk-margin-top">Twitterのプロフィールに収まらなくなってきたので</div>
		<div class="uk-flex uk-flex-middle uk-child-width-1-2 uk-margin-top">
			<div class="uk-margin-small-right uk-text-center"><img v-bind:src="stickersPath"></div>
			<div class="uk-margin-small-left uk-text-center">
				<a href="https://princess-connect-stickers.netlify.app">プリコネスタンプ</a>
			</div>
		</div>
		<div class="uk-flex uk-flex-middle uk-child-width-1-2 uk-margin-xlarge-top">
			<div class="uk-margin-small-right uk-text-center">
				<a href="https://princess-connect-like-counter.netlify.app">いいねカウンター</a>
			</div>
			<div class="uk-margin-small-left uk-text-center"><img v-bind:src="likeCounterPath"></div>
		</div>
		<div class="uk-flex uk-flex-middle uk-child-width-1-2 uk-margin-xlarge-top">
			<div class="uk-margin-small-right uk-text-center"><img v-bind:src="clanProfileGeneratorPath"></div>
			<div class="uk-margin-small-left uk-text-center">
				<a href="https://princess-connect-clan-profile-card-generator.netlify.app">クランプロフカードジェネレーター</a>
			</div>
		</div>
		<div class="uk-flex uk-flex-middle uk-child-width-1-2 uk-margin-xlarge-top">
			<div class="uk-margin-small-right uk-text-center">
				<a href="https://princess-connect-loot-box-announcement-image-generator.netlify.app">ガチャ告知画像ジェネレーター</a>
			</div>
			<div class="uk-margin-small-left uk-text-center"><img v-bind:src="lootBoxAnnouncementImageGeneratorPath"></div>
		</div>
		<div class="uk-flex uk-flex-middle uk-child-width-1-2 uk-margin-xlarge-top">
			<div class="uk-margin-small-right uk-text-center"><img v-bind:src="priconneMatchPath"></div>
			<div class="uk-margin-small-left uk-text-center">
				<a href="https://princess-connect-clan-matcher.netlify.app">ぷりこねまっち</a>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import UIkit from 'uikit';

@Component
export default class Host extends Vue {
	private stickersPath: string = './img/stickers.jpg';
	private likeCounterPath: string = './img/like_counter.jpg';
	private clanProfileGeneratorPath: string = './img/clan_profile_card_generator.jpg';
	private lootBoxAnnouncementImageGeneratorPath: string = './img/loot_box_announcement_image_generator.jpg';
	private priconneMatchPath: string = './img/priconne_match.jpg';
}
</script>
<style scoped>
</style>
