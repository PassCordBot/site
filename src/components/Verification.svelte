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
	const time = `Today at ${date.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
</script>

<div use:reveal="{{ y: 100, transition: 'fly' }}" class="grid lg:grid-cols-2 place-items-center gap-10">
	<div class="grid lg:hidden gap-5 font-agrandir">
		<h2 class="text-white text-2xl lg:text-5xl">Verification</h2>
		<p class="text-gray-300 text-sm">
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
							{time}
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
							{time}
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
							{time}
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
	<div class="hidden lg:grid gap-5 font-agrandir">
		<h2 class="text-white text-2xl lg:text-5xl">Verification</h2>
		<p class="text-gray-300 text-lg">
			This will keep your server safe, from bots and more. Its our super useful captcha verification. Easy to setup and secure, start protecting your
			server now.
		</p>
	</div>
</div>
