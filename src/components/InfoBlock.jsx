import RippedMan from '../../public/images/ripped-men-2.jpg';
import PowerLifting from '../../public/images/download2.webp';
import ManGym from '../../public/images/man-gym.jpg';
import { Link } from 'react-router-dom'

const InfoBlock  = () => {
    return(
        <div className='bg-blue-900'>
            <div className=" flex justify-center items-center py-10 pt-20">
                <div>
                    <div className="text-amber-400 text-2xl sm:w-[500px] w-[300px] ">Are you ready to make GPT Gym requests?</div>
                    <div className=" text-white text-sm sm:w-[400px] w-[300px] py-5">Here you can create own training plan!</div>
                    <Link to={'/createplan'} className="bg-green-500 rounded-full px-10 py-2 mr-3">Create Plan</Link>
                    <Link to={'/generation'} className="bg-white rounded-full px-10 py-2">Gym Generate</Link>
                </div>
                <div >
                    <img className='md:block hidden rounded-3xl' src={RippedMan} alt="RippedMan" width={400}  />
                </div>
            </div>
            <div className=' flex justify-center'>
                <div className='w-[925px] pb-10 text-white'>
                    Getting ripped generally means being lean enough to have visible muscle definition. To get ripped, you have to lift weights, 
                    eat enough calories to build muscle, and prioritize protein. If you’re starting at a high body weight, you may have to eat in a 
                    calorie deficit to shed some body fat and achieve a shredded look.
                </div>
            </div>
            <div className='text-3xl text-white ml-[200px]'>The best exercises to be a ripped!</div>
            <div className='flex justify-center'>
                <img src={PowerLifting} alt="powerlifting" className='w-[400px] h-[200px] rounded-3xl brightness-50 m-5'/>
                <img src={ManGym} alt="mangym" className='w-[400px] h-[200px] rounded-3xl brightness-50 m-5'/>
            </div>
        </div>
    )
}

export default InfoBlock;