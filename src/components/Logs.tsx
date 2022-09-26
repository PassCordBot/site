import type { FC } from 'react';
import pkg from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css';
import '../assets/global.css';
import arrow from '../assets/arrow.webp';
import angelnext from '../assets/angelnext.png';
import premium from '../assets/premium.svg';
import Fade from 'react-reveal/Fade';

const { DiscordMessages, DiscordMessage, DiscordEmbed, DiscordMention, DiscordMarkdown } = pkg;

const Logs: FC = () => {
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
				<DiscordMessages>
					<DiscordMessage bot avatar='/favicon.svg' author='Pyrite'>
						<DiscordEmbed footerIcon={premium} timestamp={new Date()} authorIcon={angelnext} authorName='AngelNext' borderColor='#5865f2'>
							<span slot='footer'>Pyrite Support</span>
							<div>
								<img className='float-left mr-1 self-start' width={16} height={16} src={arrow} alt='Arrow Icon' />{' '}
								<DiscordMention>eldi mindcrafter</DiscordMention> has been warned by <DiscordMention>AngelNext</DiscordMention>
							</div>
							<div>
								<img className='float-left mr-1 self-start' width={16} height={16} src={arrow} alt='Reply Icon' /> <strong>Executor:</strong>{' '}
								<DiscordMention>AngelNext</DiscordMention>
							</div>
							<div>
								<img className='float-left mr-1 self-start' width={16} height={16} src={arrow} alt='Reply Icon' /> <strong>Reason:</strong>{' '}
								<DiscordMarkdown>`Spamming many times`</DiscordMarkdown>
							</div>
							<div>
								<img className='float-left mr-1 self-start' width={16} height={16} src={arrow} alt='Reply Icon' /> <strong>Time:</strong>{' '}
								<span className='rounded-[3px] bg-zinc-700'>2 days ago</span>
							</div>
						</DiscordEmbed>
					</DiscordMessage>
				</DiscordMessages>
			</div>
		</Fade>
	);
};

export default Logs;
