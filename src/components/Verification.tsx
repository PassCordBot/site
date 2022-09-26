import type { FC } from 'react';
import pkg from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css';
import '../assets/global.css';
import reply from '../assets/reply.webp';
import captcha from '../assets/captcha.png';
import angelnext from '../assets/angelnext.png';
import Fade from 'react-reveal/Fade';

const { DiscordMessages, DiscordMessage, DiscordEmbed } = pkg;

const Verification: FC = () => {
	return (
		<Fade bottom>
			<div className='mx-10 mt-[26rem] mb-40 items-center flex flex-col md:inline-grid grid-cols-2 bg-gray-900 p-10 rounded-3xl'>
				<div className='block md:hidden my-9 font-unisans'>
					<h1 className='text-5xl mb-5 font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>Verification</h1>
					<p className='text-gray-500 text-lg'>
						This will keep your server safe, from bots and more. Its our super useful captcha verification. Easy to setup and secure, start protecting
						your server now.
					</p>
				</div>
				<DiscordMessages>
					<DiscordMessage bot avatar='/favicon.svg' author='Pyrite'>
						<DiscordEmbed image={captcha} borderColor='#5865f2' embedTitle='Verification'>
							<img className='float-left mr-1 self-start' width={16} height={16} src={reply} alt='Reply Icon' /> Are you a human? Lets find out.
							Simply type the following captcha below so I can verify that you are human. The captcha will only last 10 seconds so be quick!
						</DiscordEmbed>
					</DiscordMessage>
					<DiscordMessage avatar={angelnext} author='AngelNext'>
						EBFCDD
					</DiscordMessage>
					<DiscordMessage bot avatar='/favicon.svg' author='Pyrite'>
						<DiscordEmbed borderColor='#5865f2'>
							<img className='float-left mr-1 self-start' width={16} height={16} src='/check.webp' alt='Check Icon' /> Successfully verified you!
						</DiscordEmbed>
					</DiscordMessage>
				</DiscordMessages>
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
