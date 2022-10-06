import type { FC } from 'react';
import '../assets/global.css';
import premium from '../assets/premium.svg';
import arrow from '../assets/arrow.webp';
import reply from '../assets/reply.webp';
import Fade from 'react-reveal/Fade';

const Lockdown: FC = () => {
	const date = new Date();
	const minutes = date.getMinutes();

	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='block md:hidden my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Lockdown</h1>
					<p className='text-gray-500 text-lg'>
						Has your server been raided, do you want to revamp it? Lockdown helps you lock your server and give updates to your members!
					</p>
				</div>
				<div className='discord-messages'>
					<div className='discord-message'>
						<div className='discord-message-content'>
							<div className='discord-author-avatar'>
								<img src='/favicon.png' alt='' />
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
													<img className='discord-embed-author-icon' src={premium} alt='' />
													<span>Pyrite Support</span>
												</div>
												<div className='flex flex-col gap-2 discord-embed-description'>
													This server is currently on lockdown. Meaning no one can chat in this server. Please wait until the owners unlock the
													server.
													<div>
														<img className='float-left mr-1 self-start' width='16' height='16' src={arrow} alt='Arrow Icon' />{' '}
														<strong>Update #1</strong>
														<div>
															<img className='float-left mr-1 self-start' width='16' height='16' src={reply} alt='Reply Icon' /> You can add updates!
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
				<div className='hidden md:block ml-9 mt-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Lockdown</h1>
					<p className='text-gray-500 text-lg'>
						Has your server been raided, do you want to revamp it? Lockdown helps you lock your server and give updates to your members!
					</p>
				</div>
			</div>
		</Fade>
	);
};

export default Lockdown;
