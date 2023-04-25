import { FaIcon, FaSearch } from 'react-icons/fa';

function Categorycard({children, icon, color}) {
  return (
    <div className="rounded-xl bg-white w-2/12 h-fll flex flex-col justify-center items-center hover:rounded-full">
      <FaSearch className={`text-${color} text-4xl pb-2`} icon = 'FaSearch' />
      <p>{children}</p>
    </div>
  );
}

export default Categorycard;
