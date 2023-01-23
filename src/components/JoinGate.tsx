import type { FC } from 'react';
import '../assets/global.css';
import reply from '../assets/reply.webp';
import pyrite from '../assets/pyrite.webp';
import Fade from 'react-reveal/Fade';

const JoinGate: FC = () => {
	const date = new Date();
	const minutes = date.getMinutes();

	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='mr-9 my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Join Gate</h1>
					<p className='text-gray-500 text-lg'>The join gate helps you protect your server from many raiders entering your server simultaneously.</p>
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
									<div className='discord-embed-left-border' style={{ backgroundColor: '#2f3136' }}></div>
									<div className='discord-embed-container'>
										<div className='discord-embed-content'>
											<div>
												<div className='discord-embed-author'>
													<img className='discord-embed-author-icon' src={pyrite} alt='' />
													<span>Pyrite Support</span>
												</div>
												<div className='discord-embed-description'>
													<img className='float-left mr-1 self-start' width='16' height='16' src={reply} alt='Arrow Icon' />{' '}
													<strong>Join Gate</strong> is currently active in this server. Meaning no one can join at the moment.
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
		</Fade>
	);
};

export default JoinGate;
