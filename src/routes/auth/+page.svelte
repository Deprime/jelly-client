<script>
	import ky from 'ky';
	import { Login } from 'sveltegram';

	import accessTokenStore from '$lib/stores/accessToken';
	import userStore from '$lib/stores/user';

	const onTelegramAuth = async (data) => {
		const result = await ky
			.post('https://nobly-square-curlew.cloudpub.ru/v1/auth/telegram', {
				json: { data }
			})
			.json();

		if (result.token) {
			accessTokenStore.set(result.token);
			userStore.set(result.user);
		}
	};
</script>

<header class="flex items-center justify-center py-10">
	<h1 class="text-2xl font-bold">
		{#if $accessTokenStore}
			<p>You are logged in</p>
			<p>
				Nickname: {$userStore.nickname}
				<br />
				UUID: {$userStore.uuid}
			</p>
		{:else}
			<p>You are not logged in</p>
		{/if}
	</h1>
</header>

<section class="mx-auto flex w-fit flex-col items-center justify-center">
	<div
		class="flex flex-col items-center justify-center gap-5 rounded-xl border-2 border-gray-200 bg-gray-50 p-4"
	>
		<div class="w-full">
			<Login
				username="CapyTesterBot"
				requestAccess
				redirectURL="/auth/telegram"
				buttonRadius={12}
				size="large"
				onauth={onTelegramAuth}
			/>
		</div>
		<div class="w-full">
			<button class="w-full rounded-lg bg-gray-200 p-2 font-semibold" disabled>
				Twitter auth (soon)
			</button>
		</div>
	</div>
</section>
