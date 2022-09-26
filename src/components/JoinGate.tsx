import type { FC } from 'react';
import pkg from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css';
import '../assets/global.css';
import reply from '../assets/reply.webp';
import premium from '../assets/premium.svg';
import Fade from 'react-reveal/Fade';

const { DiscordMessages, DiscordMessage, DiscordEmbed } = pkg;

const JoinGate: FC = () => {
	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='mr-9 my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Join Gate</h1>
					<p className='text-gray-500 text-lg'>The join gate helps you protect your server from many raiders entering your server simultaneously.</p>
				</div>
				<DiscordMessages>
					<DiscordMessage bot avatar='/favicon.svg' author='Pyrite'>
						<DiscordEmbed authorIcon={premium} authorName='Pyrite Support' borderColor='#5865f2'>
							<img className='float-left mr-1 self-start' width={16} height={16} src={reply} alt='Arrow Icon' /> <strong>Join Gate</strong> is
							currently active in this server. Meaning no one can join at the moment.
						</DiscordEmbed>
					</DiscordMessage>
				</DiscordMessages>
			</div>
		</Fade>
	);
};

export default JoinGate;
