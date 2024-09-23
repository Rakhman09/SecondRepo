import Facebook from '../../public/images/Facebook.png';
import Pinterest from '../../public/images/pinterest.png';
import WhatsApp from '../../public/images/WhatsApp.svg.webp';
import GApp from '../../public/images/gym-app.png';

const Footer = () => {
    return (
        <div className=" bg-gray-600 p-5">
            <div className=" flex justify-center">
                <div className="bg-green-600 text-center w-[80%] rounded-2xl py-5 brightness-90">
                    <div className='font-bold py-1'>FOLLOW ALONG</div>
                    <div className='flex justify-center gap-5 bg-image'>
                        <img className='w-[5%]' src={GApp} alt="gym-app" />
                        <img className='w-[5%]' src={Facebook} alt="facebook" />
                        <img className='w-[5%]' src={Pinterest} alt="pinterest" />
                        <img className='w-[5%]' src={WhatsApp} alt="whatsapp" />
                    </div>
                </div>
            </div>
            <div className=" md:flex md:justify-around md:py-10 ">
                <div className="md:w-[400px] md:ml-20 py-5">
                    <div className="mb-5 font-bold">SmartCook</div>
                    <div className="text-sm hidden md:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, veniam ducimus voluptatibus hic impedit quisquam debitis soluta.</div>
                </div>
                <div className="md:bg-black md:h-[150px] md:w-1 md:m-5"></div>
                <div className="py-5">
                    <div className="mb-5 font-bold">MAIL</div>
                    <div className="text-sm  hidden md:block">smartcook@gmail.com</div>
                </div>
                <div className="md:bg-black md:h-[150px] md:w-1 md:m-5"></div>
                <div className="py-5">
                    <div className="mb-5 font-bold">CALL</div>
                    <div className="text-sm hidden md:block">+7(747)-567-34-34</div>
                </div>
                <div className="md:bg-black md:h-[150px] md:w-1 md:m-5"></div>
                <div className="md:mr-20 py-5">
                    <div className="mb-5 font-bold">FIND US</div>
                    <div className="text-sm hidden md:block">Almaty.kz</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;