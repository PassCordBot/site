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

<div use:reveal="{{ y: 100, transition: 'fly' }}" class="grid lg:grid-cols-2 place-items-center gap-10">
	<div class="grid gap-5 font-agrandir">
		<h2 class="text-white text-2xl lg:text-5xl">Logs</h2>
		<p class="text-gray-300 text-sm md:text-lg">
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
