<script>
	import { reveal } from 'svelte-reveal';
	import pyrite from '../assets/pyrite.webp';

	import '../assets/discord-messages.css';

	const date = new Date();
	const minutes = date.getMinutes();
	const time = `Today at ${date.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
</script>

<div use:reveal="{{ y: 100, transition: 'fly' }}" class="grid mb-40 place-items-center">
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
										<span>Ready to protect your server?</span>
									</div>
									<div class="discord-embed-description">Start using Pyrite Bot now to get this features and more!</div>
								</div>
							</div>
						</div>
					</div>
					<div class="discord-buttons">
						<a
							class="discord-button discord-button-link"
							href="https://discord.com/oauth2/authorize?client_id=1008400801628164096&amp;permissions=8&amp;scope=bot%20applications.commands"
							target="_blank"
							rel="noopener noreferrer"
						>
							Invite Me
							<span class="outbound-link-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									x="0px"
									y="0px"
									viewBox="0 0 100 100"
									width="15"
									height="15"
								>
									<path
										fill="currentColor"
										d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
									<polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
									></polygon>
								</svg>
							</span>
						</a>
						<a
							class="discord-button discord-button-link"
							href="https://discord.com/oauth2/authorize?client_id=1008400801628164096&amp;permissions=8&amp;scope=bot%20applications.commands"
							target="_blank"
							rel="noopener noreferrer"
						>
							Support Server
							<span class="outbound-link-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									x="0px"
									y="0px"
									viewBox="0 0 100 100"
									width="15"
									height="15"
								>
									<path
										fill="currentColor"
										d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
									<polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
									></polygon>
								</svg>
							</span>
						</a>
						<a class="discord-button discord-button-link" href="https://top.gg/bot/1008400801628164096" target="_blank" rel="noopener noreferrer">
							Vote
							<span class="outbound-link-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									focusable="false"
									x="0px"
									y="0px"
									viewBox="0 0 100 100"
									width="15"
									height="15"
								>
									<path
										fill="currentColor"
										d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
									<polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
									></polygon>
								</svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
