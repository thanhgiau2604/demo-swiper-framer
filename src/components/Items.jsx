import React, { useState } from 'react';
import { ListItem } from '../contants';
import { motion, usePresence } from 'framer-motion';

const Items = () => {
	const [items, setItems] = useState(ListItem);
	const [isPresent, safeToRemove] = usePresence();

	const transition = { type: 'spring', stiffness: 500, damping: 80 };
	const animation = {
		layout: true,
		initial: 'out',
		style: {
			position: isPresent ? 'static' : 'absolute',
		},
		animate: isPresent ? 'in' : 'out',
		variants: {
			in: { scaleX: 1, opacity: 1 },
			out: { scaleX: 0, opacity: 0, zIndex: -1 },
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
		transition,
	};

	const handleRemoveSelf = item => {
		setItems([...items.filter(i => i.id !== item.id)]);
	};

	const handleGoFirst = (e, item) => {
		e.stopPropagation();
		setItems([item, ...items.filter(i => i.id !== item.id)]);
	};

	const handleSwap = (e, index) => {
		e.stopPropagation();
		const cloneItems = [...items];
		[cloneItems[index], cloneItems[index + 1]] = [
			cloneItems[index + 1],
			cloneItems[index],
		];
		setItems(cloneItems);
	};

	return (
		<>
			{items.map((item, index) => {
				return (
					<motion.div
						{...animation}
						style={{ background: item.color }}
						key={item.id}
						className='motion-element'
						onClick={() => handleRemoveSelf(item)}
					>
						{index < items.length - 1 && (
							<button className='swap-next' onClick={e => handleSwap(e, index)}>
								Swap next
							</button>
						)}

						<button className='go-first' onClick={e => handleGoFirst(e, item)}>
							Go first
						</button>
					</motion.div>
				);
			})}
		</>
	);
};

export default Items;
