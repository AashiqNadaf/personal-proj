import React from 'react';
import './Accepted.scss';
import together1 from '../images/together1.jpg';
import together2 from '../images/together2.jpg';
import together3 from '../images/together3.jpg';
import together4 from '../images/together4.jpg';
import marriagePic from '../images/marriagePic.jpg';

const Accepted = () => {
	return (
		<div className="accepted--container">
			<div className='row--container'>
				<div className='pic--container'>
					<div className='pic--border shadow-2xl'><img className="bg-pics" src={together1} /></div>
				</div>
				<div className='pic--container'>
					<div className='pic--border'><img className="bg-pics" src={together2} /></div>
				</div>
			</div>
			<div className='row--container'>
				<div className='pic--container'>
					<div className='pic--border shadow-2xl'><img className="bg-pics" src={together3} /></div>
				</div>
				<div className='pic--container'>
					<div className='pic--border'><img className="bg-pics" src={together4} /></div>
				</div>
			</div>
			<div className='hero--container'>
				<div className='hero--border'><img className='hero--image' src={marriagePic} /></div>
			</div>
			<div id="background-wrap">
				<div className="bubble x1"></div>
				<div className="bubble x2"></div>
				<div className="bubble x3"></div>
				<div className="bubble x4"></div>
				<div className="bubble x5"></div>
				<div className="bubble x6"></div>
				<div className="bubble x7"></div>
				<div className="bubble x8"></div>
				<div className="bubble x9"></div>
				<div className="bubble x10"></div>
			</div>
			<div className='hero--text'>
			Congratulations!!!! Now you are Neha Aashiq Nadaf❤️💕❤️
			</div>
		</div>
	);
};

export default Accepted;
