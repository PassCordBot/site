<script>
	import arrow from '../assets/arrow.webp';
	import reply from '../assets/reply.webp';
	import pyrite from '../assets/pyrite.webp';
	import { reveal } from 'svelte-reveal';

	import '../assets/discord-messages.css';

	const date = new Date();
	const minutes = date.getMinutes();
	const time = `Today at ${date.getHours()}:${minutes < 10 ? '0' : ''}${minutes}`;
</script>

<div
	use:reveal="{{ y: 100, transition: 'fly' }}"
	class="mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl"
>
	<div class="block md:hidden my-9 font-agrandir">
		<h1 class="uppercase text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-700">Lockdown</h1>
		<p class="text-gray-500 text-lg">
			Has your server been raided, do you want to revamp it? Lockdown helps you lock your server and give updates to your members!
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
									<div class="discord-embed-author">
										<img class="discord-embed-author-icon" src="{pyrite}" alt="pyrite support icon" />
										<span>Pyrite Support</span>
									</div>
									<div class="flex flex-col gap-2 discord-embed-description">
										This server is currently on lockdown. Meaning no one can chat in this server. Please wait until the owners unlock the server.
										<div>
											<img class="float-left mr-1 self-start" width="16" height="16" src="{arrow}" alt="Arrow Icon" />{' '}
											<strong>Update #1</strong>
											<div>
												<img class="float-left mr-1 self-start" width="16" height="16" src="{reply}" alt="Reply Icon" /> You can add updates!
											</div>
										</div>
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
		<h1 class="uppercase text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-700">Lockdown</h1>
		<p class="text-gray-500 text-lg">
			Has your server been raided, do you want to revamp it? Lockdown helps you lock your server and give updates to your members!
		</p>
	</div>
</div>
