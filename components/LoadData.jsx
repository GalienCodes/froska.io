import { useGlobalState } from '@/store';
import Loader from './Loader';


const LoadData = () => {
  const [loaddata] = useGlobalState('loaddata');

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-4
      flex items-center justify-center bg-black 
      bg-opacity-50
     transform transition-transform
      duration-300 ${loaddata.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className='flex gap-4 justify-start items-center
        bg-[#fff] shadow-xl  rounded
       font-globalFont min-w-min py-2 px-4 '
      >
        <p className='text-green-600 font-medium text-base'>{loaddata.msg}</p>
        <Loader/>
      </div>
    </div>
  );
};

export default LoadData;