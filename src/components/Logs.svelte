<script>
	import arrow from '../assets/arrow.webp';
	import angelnext from '../assets/angelnext.webp';
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
	<div class="mr-9 my-9 font-agrandir">
		<h1 class="text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-700">Logs</h1>
		<p class="text-gray-500 text-lg">
			Know what your members/moderators/admins are doing in your server, from deleting messages to trying to raid, logs will help you manage your
			community easily!
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
										<img class="discord-embed-author-icon" src="{angelnext}" alt="pyrite user example icon" />
										<span>AngelNext</span>
									</div>
									<div class="discord-embed-description">
										<div>
											<img class="float-left mr-1 self-start" width="16" height="16" src="{arrow}" alt="Arrow Icon" />{' '}
											<span class="discord-mention">@eldi mindcrafter</span> has been warned by{' '}
											<span class="discord-mention">@AngelNext</span>
										</div>
										<div>
											<img class="float-left mr-1 self-start" width="16" height="16" src="{arrow}" alt="Arrow Icon" />{' '}
											<strong>Executor:</strong> <span class="discord-mention">@AngelNext</span>
										</div>
										<div>
											<img class="float-left mr-1 self-start" width="16" height="16" src="{arrow}" alt="Arrow Icon" />{' '}
											<strong>Reason:</strong>{' '}
											<span class="discord-markdown">
												<span class="discord-markdown-content">
													<code>Spamming many times</code>
												</span>
											</span>
										</div>
										<div>
											<img class="float-left mr-1 self-start" width="16" height="16" src="{arrow}" alt="Arrow Icon" /> <strong>Time:</strong>{' '}
											<span class="rounded-[3px] bg-zinc-700">2 days ago</span>
										</div>
									</div>
								</div>
							</div>
							<div class="discord-embed-footer">
								<img class="discord-embed-footer-icon" src="{pyrite}" alt="pyrite avatar footer" />
								<span>
									<span>Pyrite Support</span>
									<span class="discord-embed-footer-separator">•</span>
									<span>{time}</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
