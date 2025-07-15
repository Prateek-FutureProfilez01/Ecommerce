import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import { PiX } from 'react-icons/pi';


function Logo() {
    return (
        <div className='pl-[20px] pr-[36px] mt-3'>
            <Swiper
                // slidesPerView={5}
                // spaceBetween={30}
                breakpoints={{
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    
                }}
                    pagination={{
                    clickable: true,
                }}
            // autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false, // Autoplay restarts after interaction
            // }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-3h.png' alt="i 1" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-4h.png' alt="i 2" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-8h.png' alt="i 3" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-2h.png' alt="i 4" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-5h.png' alt="i 5" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-6h.png' alt="i 6" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-7h.png' alt="i 7" /></SwiperSlide>
            <SwiperSlide><img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/client-1h.png' alt="i 8" /></SwiperSlide>

        </Swiper>
        </div >
    );
}

export default Logo;