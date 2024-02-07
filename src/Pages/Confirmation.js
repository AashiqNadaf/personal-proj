
import React, { useEffect, useState } from 'react';
import './Confirmation.scss';
import bubugif from '../gifs/bubu-proposal.gif';
import bubuAngrygif from '../gifs/angry-bubu.gif';

// eslint-disable-next-line react/prop-types
const Confirmation = ({setPageNum}) => {
	const [textValue, setTextValue] = useState('');
	const [clicked, setClicked] = useState(0);
	useEffect(() => {
		if (clicked === 0) {
			setTextValue('Do you take me as your newly married husband?');
		}else if (clicked  < 4) {
			setTextValue('WTF!!!!!!! Why are you trying to click on no?');
		} else {
			setTextValue('No is not an option for you, HAHAHA!!!');

		}
	}, [clicked]);
	useEffect(() => {
		const button = document.getElementById('moveButton');
		const maxWidth = window.innerWidth - button.clientWidth;
		const maxHeight = window.innerHeight - button.clientHeight;
	
		button.addEventListener('mouseover', () => {
			button.style.left = Math.floor(Math.random() * maxWidth) + 'px';
			button.style.top = Math.floor(Math.random() * maxHeight) + 'px';
			setClicked((prev) => prev + 1);

		});
	}, []);
	return (
		<div className='flex justify-center items-center flex-col welcome--container bg-purple-100'> 
			<div className='mt-12 mb-12 flex justify-center items-center flex-col gif-container'>
				<img src={clicked === 0 ? bubugif : bubuAngrygif} className='mb-4 gif--image' />
				<span className='text-pink-600 text-lg font-bold question--text'>{textValue}</span>
			</div>
			<div className='flex justify-center items-start grow'>
				<button
					className='bg-[#2ecc71] text-[#fff] cursor-pointer yes-no--button'
					onClick={() => setPageNum(2)}
				>
			Yes
				</button>
				<button
					id="moveButton"
					style={{
						position: 'absolute',
						left: '55%',
						transition: 'left 0.8s ease, top 0.8s ease',
					}}
					className='bg-[#3498db] mr-1 text-[#fff] cursor-pointer yes-no--button'
				>
			No
				</button>
			</div>
		</div>
	);
};

export default Confirmation;