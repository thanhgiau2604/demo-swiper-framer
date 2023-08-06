import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Items from '../components/Items';

const DemoAnimation = () => {
	return (
		<AnimatePresence initial={false}>
			<div className='motion-list'>
				<Items />
			</div>
		</AnimatePresence>
	);
};

export default DemoAnimation;
