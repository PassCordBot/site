import type { FC } from 'react';
import pkg from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css';
import Fade from 'react-reveal/Fade';

const { DiscordMessages, DiscordMessage, DiscordEmbed, DiscordButtons, DiscordButton } = pkg;

const Ready: FC = () => {
	return (
		<Fade bottom>
			<div className='mx-10 my-40 items-center grid bg-gray-900 p-10 rounded-3xl'>
				<DiscordMessages>
					<DiscordMessage bot avatar='/favicon.svg' author='Pyrite'>
						<DiscordEmbed embedTitle='Ready to protect your server?' borderColor='#5865f2'>
							Start using Pyrite Bot now!
						</DiscordEmbed>
						<DiscordButtons>
							<DiscordButton
								type='link'
								url='https://discord.com/oauth2/authorize?client_id=1008400801628164096&permissions=8&scope=bot%20applications.commands'
							>
								Invite Me
							</DiscordButton>
						</DiscordButtons>
					</DiscordMessage>
				</DiscordMessages>
			</div>
		</Fade>
	);
};

export default Ready;
