import Fade from 'react-reveal/Fade';

const Text = () => {
	return (
		<Fade bottom>
			<div className='md:mt-80 mt-56 grid place-items-center'>
				<h1 className='grid ml-14 font-unisans gap-8 text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900'>
					<span>Know your members.</span>
					<span>Know your community.</span>
				</h1>
			</div>
		</Fade>
	);
};

export default Text;
