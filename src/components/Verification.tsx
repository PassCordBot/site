import type { FC } from 'react';
import '../assets/global.css';
import reply from '../assets/reply.webp';
import captcha from '../assets/captcha.png';
import angelnext from '../assets/angelnext.png';
import Fade from 'react-reveal/Fade';

const Verification: FC = () => {
	const date = new Date();
	return (
		<Fade bottom>
			<div className='mx-10 mt-[26rem] mb-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='block md:hidden my-9 font-unisans'>
					<h3 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Verification</h3>
					<p className='text-gray-500 text-lg'>
						This will keep your server safe, from bots and more. Its our super useful captcha verification. Easy to setup and secure, start protecting
						your server now.
					</p>
				</div>
				<div className='discord-messages'>
					<div className='discord-message'>
						<div className='discord-message-content'>
							<div className='discord-author-avatar'>
								<img src='/favicon.svg' alt='Favicon' />
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
													<img className='relative top-[2px] float-left mr-1 self-start' width='16' height='16' src='/check.webp' alt='Check Icon' />
													<span>Verification</span>
												</div>
												<div className='discord-embed-description'>
													<img className='float-left mr-1 self-start' width='16' height='16' src={reply} alt='Reply Icon' /> Are you a human? Lets
													find out. Simply type the following captcha below so I can verify that you are human. The captcha will only last 10 seconds
													so be quick!
												</div>
												<img className='discord-embed-image' src={captcha} alt='' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='discord-message'>
						<div className='discord-message-content'>
							<div className='discord-author-avatar'>
								<img src={angelnext} alt='' />
							</div>
							<div className='discord-message-body'>
								<div>
									<span className='discord-author-info'>
										<span className='discord-author-username'>AngelNext</span>
									</span>
									<span className='discord-message-timestamp'>
										Today at {date.getHours()}:{date.getMinutes()}
									</span>
								</div>
								EBFCDD
							</div>
						</div>
					</div>
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
												<div className='discord-embed-description'>
													<img className='float-left mr-1 self-start' width='16' height='16' src='/check.webp' alt='Check Icon' /> Successfully
													verified you!
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
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Verification</h1>
					<p className='text-gray-500 text-lg'>
						This will keep your server safe, from bots and more. Its our super useful captcha verification. Easy to setup and secure, start protecting
						your server now.
					</p>
				</div>
			</div>
		</Fade>
	);
};

export default Verification;
