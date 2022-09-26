import type { FC } from 'react';
import { DiscordMessage, DiscordMessages, DiscordEmbed } from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css';
import '../assets/global.css';
import premium from '../assets/premium.svg';
import arrow from '../assets/arrow.webp';
import reply from '../assets/reply.webp';
import Fade from 'react-reveal/Fade';

const Lockdown: FC = () => {
	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='block md:hidden my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Lockdown</h1>
					<p className='text-gray-500 text-lg'>
						Has your server been raided, do you want to revamp it? Lockdown helps you lock your server and give updates to your members!
					</p>
				</div>
				<DiscordMessages>
					<DiscordMessage bot avatar='/favicon.svg' author='Pyrite'>
						<DiscordEmbed authorIcon={premium} authorName='Pyrite Support' borderColor='#5865f2'>
							This server is currently on lockdown. Meaning no one can chat in this server. Please wait until the owners unlock the server.
							<div>
								<img className='float-left mr-1 self-start' width={16} height={16} src={arrow} alt='Arrow Icon' /> <strong>Update #1</strong>
							</div>
							<div>
								<img className='float-left mr-1 self-start' width={16} height={16} src={reply} alt='Reply Icon' /> You can add updates!
							</div>
						</DiscordEmbed>
					</DiscordMessage>
				</DiscordMessages>
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
