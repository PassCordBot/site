import { useState } from 'react';
import '../assets/global.css';

const Switch = () => {
	const [isOn, setIsOn] = useState(false);
	return (
		<>
			<input onChange={() => setIsOn(!isOn)} className='react-switch-checkbox' id={`react-switch-new`} type='checkbox' />
			<label style={{ background: isOn ? '#06D6A0' : '' }} className='react-switch-label' htmlFor={`react-switch-new`}>
				<span className={`react-switch-button`} />
			</label>
		</>
	);
};

export default Switch;
