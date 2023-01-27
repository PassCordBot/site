import type { ReactElement } from 'react';
import Fade from 'react-reveal/Fade';

const Text = ({ children }: { children: ReactElement | ReactElement[] | string }) => {
	return (
		<Fade bottom>
			<div className='md:mt-80 mt-56 grid place-items-center'>
				<h1 className='grid ml-14 font-unisans gap-8 text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>
					{children}
				</h1>
			</div>
		</Fade>
	);
};

export default Text;
