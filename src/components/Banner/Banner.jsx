import img from '../../assets/ante-samarzija-lsmu0rUhUOk-unsplash.jpg'

const Banner = () => {
    return (
        <div>
<div className="carousel w-full h-[400px] lg:h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img} className="w-full rounded-xl" />
    <div className="absolute h-full rounded-xl justify-left flex items-center  left-0 bottom-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className='text-white font-semibold space-y-4 w-1/2 pl-12 pt-4'>
            <h2 className=' text-2xl lg:text-4xl'>Would you like a Cup of Delicious Coffee?</h2>
            <p className='text-sm'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            
        </div>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;