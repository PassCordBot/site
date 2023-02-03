<script>
	import reply from '../assets/reply.webp';
	import pyrite from '../assets/pyrite.webp';
	import captcha from '../assets/captcha.webp';
	import angelnext from '../assets/angelnext.webp';
	import check from '../assets/check.webp';
	import { reveal } from 'svelte-reveal';

	import '../assets/discord-messages.css';

	const date = new Date();
	const minutes = date.getMinutes();
</script>

<div
	use:reveal="{{ y: 100, transition: 'fly' }}"
	class="mx-10 mt-[26rem] mb-40 justify-center items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl"
>
	<div class="block md:hidden my-9">
		<h3 class="font-agrandir text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-700">Verification</h3>
		<p class="text-gray-500 text-lg">
			This will keep your server safe, from bots and more. Its our super useful captcha verification. Easy to setup and secure, start protecting your
			server now.
		</p>
	</div>
	<div class="discord-messages">
		<div class="discord-message">
			<div class="discord-message-content">
				<div class="discord-author-avatar">
					<img src="{pyrite}" alt="pyrite avatar" />
				</div>
				<div class="discord-message-body">
					<div>
						<span class="discord-author-info">
							<span class="discord-author-username">Pyrite</span>
							<span class="discord-author-bot-tag">Bot</span>
						</span>
						<span class="discord-message-timestamp">
							Today at {date.getHours()}:{minutes < 10 ? '0' : ''}{minutes}
						</span>
					</div>
					<div class="discord-embed">
						<div class="discord-embed-left-border" style="background-color: #2f3136;"></div>
						<div class="discord-embed-container">
							<div class="discord-embed-content">
								<div>
									<div class="discord-embed-title">
										<img class="relative top-[2px] float-left mr-1 self-start" width="16" height="16" src="{check}" alt="Check Icon" />
										<span>Verification</span>
									</div>
									<div class="discord-embed-description">
										<img class="float-left mr-1 self-start" width="16" height="16" src="{reply}" alt="Reply Icon" /> Are you a human? Lets find out. Simply
										type the following captcha below so I can verify that you are human. The captcha will only last 10 seconds so be quick!
									</div>
									<img class="discord-embed-image" width="{450}" height="{150}" src="{captcha}" alt="pyrite captcha" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="discord-message">
			<div class="discord-message-content">
				<div class="discord-author-avatar">
					<img src="{angelnext}" alt="pyrite user example icon" />
				</div>
				<div class="discord-message-body">
					<div>
						<span class="discord-author-info">
							<span class="discord-author-username">AngelNext</span>
						</span>
						<span class="discord-message-timestamp">
							Today at {date.getHours()}:{minutes < 10 ? '0' : ''}{minutes}
						</span>
					</div>
					DAACBC
				</div>
			</div>
		</div>
		<div class="discord-message">
			<div class="discord-message-content">
				<div class="discord-author-avatar">
					<img src="{pyrite}" alt="pyrite avatar" />
				</div>
				<div class="discord-message-body">
					<div>
						<span class="discord-author-info">
							<span class="discord-author-username">Pyrite</span>
							<span class="discord-author-bot-tag">Bot</span>
						</span>
						<span class="discord-message-timestamp">
							Today at {date.getHours()}:{minutes < 10 ? '0' : ''}{minutes}
						</span>
					</div>
					<div class="discord-embed">
						<div class="discord-embed-left-border" style="background-color: #57F287;"></div>
						<div class="discord-embed-container">
							<div class="discord-embed-content">
								<div>
									<div class="discord-embed-description">
										<img class="float-left mr-1 self-start" width="16" height="16" src="{check}" alt="Check Icon" /> You have been verified successfully,
										you can now continue to the server!
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hidden md:block ml-9 mt-9 font-agrandir">
		<h1 class="text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-900">Verification</h1>
		<p class="text-gray-500 text-lg">
			This will keep your server safe, from bots and more. Its our super useful captcha verification. Easy to setup and secure, start protecting your
			server now.
		</p>
	</div>
</div>
