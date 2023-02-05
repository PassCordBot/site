<script>
	import card from '../assets/card.webp';
	import angelnext from '../assets/angelnext.webp';
	import pyrite from '../assets/pyrite.webp';
	import { reveal } from 'svelte-reveal';

	import '../assets/discord-messages.css';

	const date = new Date();
	const minutes = date.getMinutes();
	const time = `Today at ${date.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
</script>

<div use:reveal="{{ y: 100, transition: 'fly' }}" class="grid lg:grid-cols-2 place-items-center gap-10">
	<div class="grid gap-5 font-agrandir">
		<h2 class="gradient text-2xl lg:text-5xl">Passport</h2>
		<p class="text-gray-500 text-sm md:text-lg">Every user has a card that helps you determine the danger they can bring to your server.</p>
	</div>
	<div class="discord-messages">
		<div class="discord-message">
			<div class="discord-interaction">
				<img class="discord-interaction-author-avatar" src="{angelnext}" alt="pyrite user example icon" />
				<span class="discord-author-info discord-interaction-author-info">
					<span class="discord-author-username">AngelNext</span>
				</span>
				<span class="discord-interaction-command">
					{' '}
					used <span class="discord-interaction-command-name"> /passport</span>
				</span>
			</div>
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
					<img width="{431}" height="{375}" src="{card}" alt="passport card" />
				</div>
			</div>
		</div>
	</div>
</div>
