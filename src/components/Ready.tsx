import type { FC } from 'react';
import '../assets/global.css';
import Fade from 'react-reveal/Fade';

const Ready: FC = () => {
	const date = new Date();
	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center grid bg-gray-900 p-10 rounded-3xl'>
				<div className='discord-messages'>
					<div className='discord-message'>
						<div className='discord-message-content'>
							<div className='discord-author-avatar'>
								<img src='/favicon.svg' alt='' />
							</div>
							<div className='discord-message-body'>
								<div>
									<span className='discord-author-info'>
										<span className='discord-author-username'>Pyrite</span>
										<span className='discord-author-bot-tag'>Bot</span>
									</span>
									<span className='discord-message-timestamp'>
										Today at {date.getHours()}:{date.getMinutes()}
									</span>
								</div>
								<div className='discord-embed'>
									<div className='discord-embed-left-border' style={{ backgroundColor: '#5865f2' }}></div>
									<div className='discord-embed-container'>
										<div className='discord-embed-content'>
											<div>
												<div className='discord-embed-title'>
													<span>Ready to protect your server?</span>
												</div>
												<div className='discord-embed-description'>Start using Pyrite Bot now!</div>
											</div>
										</div>
									</div>
								</div>
								<div className='discord-buttons'>
									<a
										className='discord-button discord-button-link'
										href='https://discord.com/oauth2/authorize?client_id=1008400801628164096&amp;permissions=8&amp;scope=bot%20applications.commands'
										target='_blank'
										rel='noopener noreferrer'
									>
										Invite Me
										<span className='outbound-link-icon'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												aria-hidden='true'
												focusable='false'
												x='0px'
												y='0px'
												viewBox='0 0 100 100'
												width='15'
												height='15'
											>
												<path
													fill='currentColor'
													d='M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z'
												></path>
												<polygon
													fill='currentColor'
													points='45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9'
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
		</Fade>
	);
};

export default Ready;
