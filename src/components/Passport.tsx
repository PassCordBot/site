import type { FC } from 'react';
import '../assets/global.css';
import card from '../assets/card.webp';
import angelnext from '../assets/angelnext.webp';
import Fade from 'react-reveal/Fade';

const Lockdown: FC = () => {
	const date = new Date();
	const minutes = date.getMinutes();

	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='block md:hidden my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>PassPort</h1>
					<p className='text-gray-500 text-lg'>Every user has a card that helps you determine the danger they can bring to your server.</p>
				</div>
				<div className='discord-messages'>
					<div className='discord-message'>
						<div className='discord-interaction'>
							<img className='discord-interaction-author-avatar' src={angelnext} alt='' />
							<span className='discord-author-info discord-interaction-author-info'>
								<span className='discord-author-username'>AngelNext</span>
							</span>
							<span className='discord-interaction-command'>
								{' '}
								used <span className='discord-interaction-command-name'> /passport</span>
							</span>
						</div>
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
										Today at {date.getHours()}:{minutes < 10 ? '0' : ''}
										{minutes}
									</span>
								</div>
								<img width={431} height={375} src={card} alt='card' />
							</div>
						</div>
					</div>
				</div>
				<div className='hidden md:block ml-9 mt-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>PassPort</h1>
					<p className='text-gray-500 text-lg'>Every user has a card that helps you determine the danger they can bring to your server.</p>
				</div>
			</div>
		</Fade>
	);
};

export default Lockdown;
