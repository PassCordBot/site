import type { FC } from 'react';
import '../assets/global.css';
import arrow from '../assets/arrow.webp';
import angelnext from '../assets/angelnext.webp';
import premium from '../assets/premium.svg';
import Fade from 'react-reveal/Fade';

const Logs: FC = () => {
	const date = new Date();
	const month = date.getMonth() + 1;
	const minutes = date.getMinutes();

	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='mr-9 my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Logs</h1>
					<p className='text-gray-500 text-lg'>
						Know what your members/moderators/admins are doing in your server, from deleting messages to trying to raid, logs will help you manage
						your community easily!
					</p>
				</div>
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
										Today at {date.getHours()}:{minutes < 10 ? '0' : ''} {minutes}
									</span>
								</div>
								<div className='discord-embed'>
									<div className='discord-embed-left-border' style={{ backgroundColor: '#5865f2' }}></div>
									<div className='discord-embed-container'>
										<div className='discord-embed-content'>
											<div>
												<div className='discord-embed-author'>
													<img className='discord-embed-author-icon' src={angelnext} alt='' />
													<span>AngelNext</span>
												</div>
												<div className='discord-embed-description'>
													<div>
														<img className='float-left mr-1 self-start' width='16' height='16' src={arrow} alt='Arrow Icon' />{' '}
														<span className='discord-mention'>@eldi mindcrafter</span> has been warned by{' '}
														<span className='discord-mention'>@AngelNext</span>
													</div>
													<div>
														<img className='float-left mr-1 self-start' width='16' height='16' src={arrow} alt='Arrow Icon' />{' '}
														<strong>Executor:</strong> <span className='discord-mention'>@AngelNext</span>
													</div>
													<div>
														<img className='float-left mr-1 self-start' width='16' height='16' src={arrow} alt='Arrow Icon' />{' '}
														<strong>Reason:</strong>{' '}
														<span className='discord-markdown'>
															<span className='discord-markdown-content'>
																<code>Spamming many times</code>
															</span>
														</span>
													</div>
													<div>
														<img className='float-left mr-1 self-start' width='16' height='16' src={arrow} alt='Arrow Icon' /> <strong>Time:</strong>{' '}
														<span className='rounded-[3px] bg-zinc-700'>2 days ago</span>
													</div>
												</div>
											</div>
										</div>
										<div className='discord-embed-footer'>
											<img className='discord-embed-footer-icon' src={premium} alt='' />
											<span>
												<span slot='footer'>Pyrite Support</span>
												<span className='discord-embed-footer-separator'>•</span>
												<span>
													{date.getDate()}/{month < 10 ? '0' : ''}
													{month}/{date.getFullYear()}
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Logs;
