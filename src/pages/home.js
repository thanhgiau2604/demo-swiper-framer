// import Swiper core and required modules
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Home = () => {
	const [swiper, setSwiper] = useState();
	const slides = Array.from({ length: 1000 }).map(
		(el, index) => `Slide ${index + 1}`
	);

	return (
		<div>
			<Swiper slidesPerView={3} spaceBetween={20} cssMode onSwiper={setSwiper}>
				{slides.map((slideContent, index) => (
					<>
						<SwiperSlide key={slideContent}>
							<div className='bg-blue-200 h-[100vh] relative'>
								{slideContent}
								<button
									onClick={() => swiper.slideNext()}
									className='absolute bottom-5 bg-red-200 px-3 py-2 rounded-[10px]'
								>
									Next
								</button>
							</div>
						</SwiperSlide>
					</>
				))}
			</Swiper>
		</div>
	);
};

export default Home;
