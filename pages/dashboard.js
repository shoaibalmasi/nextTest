import Button from "@/components/Button";
import Categorycard from "@/components/CategoryCard";
import Image from "next/image";
import { FaSearch,  } from 'react-icons/fa';
import { BsBell, BsThreeDots, BsDot, BsFillClockFill } from 'react-icons/bs'
import {FiCalendar} from 'react-icons/fi'
import { Bar } from 'react-chartjs-2';
import Link from "next/link";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function DashboardPage() {

  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 75, 120],
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="grid grid-cols-12 h-screen">

      <div className="panelBg col-span-7 grid grid-cols-4">

        <div className="flex justify-start flex-col border-r-2 col-span-1 px-6 py-8">

          <div className="text-center pb-8">
            <h3 className="font-bold">SKILEX.</h3>
          </div>

          <div className="flex flex-col items-center h-1/3">
            <div className="rounded-full p-0 overflow-hidden outline outline-offset-2 outline-lime-500 w-16">
              <Image
                className="rounded-full"
                src="/images/images.jpeg"
                height={60}
                width={60}
                alt="p"
              />
            </div>
            <h4 className="my-2 font-bold">Shoaib Almasi</h4>
            <div className="flex flex-row justify-stretch px-1 w-14 bg-white rounded-xl text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fdc528"
                class="mr-1 h-4 w-4 mt-1 text-warning"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="font-medium">7.5</span>
            </div>
          </div>

          <div className="flex justify-center h-1/2">
            <ul className="flex justify-start flex-col">
                <li className="mb-6">Dashboard</li>
                <li className="mb-6">My Tasks</li>
                <li className="mb-6">Statistics</li>
                <li className="mb-6">Courses</li>
            </ul>
          </div>
          
          <div className="text-center text-sm font-bold" >
            <span>join skilex community to learn together</span>
          </div>

        </div>


        <div className="col-span-3 px-6 py-8">
          
            <div className="flex flex-col justify-normal  h-1/2 mb-0">
              <div className="pb-10 flex justify-start">
                <FaSearch  className="text-gray-400 text-2xl pr-2" />
                <input type="text" placeholder="Search Somthing..." className="panelBg focus:outline-none"/>
              </div>
                <h1 className="text-6xl font-bold">Good morning,<br/>Jeromi</h1>
                <p className="my-10">here you can track your activity and find <br/> a suitable course to learn a new skill</p>
                <div className="">

                <Button size="large">send seggestion</Button>
                </div>
            </div>

            <div className="flex flex-col h-1/4">

              <div className="flex justify-between w-full">
                <h3 className="text-xl font-bold">Categories</h3>
                {/* <Button size="small"  >...</Button> */}
                <BsThreeDots/>
              </div>

              <div className="w-full flex justify-around my-5 h-3/4 py-2">
                <Categorycard color='orange-400' icon='FaCoffee'>Writing</Categorycard>
                <Categorycard color='green-400' icon='FaCoffee'>Lifistyle</Categorycard>
                <Categorycard color='blue-400' icon='FaCoffee'>Food</Categorycard>
                <Categorycard color='blue-600' icon='FaCoffee'>Music</Categorycard>
                <Categorycard color='purple-500' icon='FaCoffee'>Design</Categorycard>
              </div>
            </div>

            <div className="h-1/4 grid grid-cols-5 grid-rows-7 pt-3">
              <div className="col-span-4 row-span-1 text-lg font-bold mb-4">
                <h4>Dynamic</h4>
              </div>
              <div className="panelBg col-span-1 row-span-1 flex justify-end items-start focus:outline-none mb-4">
              <select id="my-select" name="options" className="border-2 border-gray-800 panelBg rounded-full w-3/4">
                    <option value="option1">01-07 may</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
               </select>
              </div>
              <div className="col-span-4 row-span-6">
                {/* <Bar data={data} /> */}
              </div>
              <div className="col-span-1 row-span-3 flex flex-col items-center">
                <div className="flex justify-center">
                <p className="font-bold text-2xl pr-1 items-center">78</p>
                <BsDot className="text-orange-400 text-4xl"/>
                </div>
                <p className="">Your point</p>
              </div>


              <div className="col-span-1 row-span-3 flex flex-col items-center">
              <div className="flex justify-center">
              <p className="font-bold text-2xl pr-1 items-center">56</p>
              <BsDot className="text-green-400 text-4xl"/>
              </div>
                <p className="">Average</p>
              </div>
            </div>
        </div>
      </div>
      <div className="bg-white col-span-5 grid grid-rows-10 px-6 py-8">
        <div className="row-span-1 flex justify-end px-2 my-0">
          <div className="pr-3">
            <BsBell className="text-black text-2xl"/>
          </div>
          <div className="pr-3">
            <FiCalendar className="text-black text-2xl"/>
          </div>
          <div className="flex justify-start w-14">
            <div className="relative flex justify-start">
            <div className="w-7 h-7 bg-green-500 rounded-full left-0 border-2 border-white"></div>
            <div className="w-7 h-7 bg-red-400 rounded-full absolute left-5 border-2 border-white"></div>
            <div className="w-7 h-7 bg-yellow-400 rounded-full absolute left-10 border-2 border-white"></div>

            </div>
          </div>
        </div>

        <div className="relative row-span-5 ">
          <div className="flex justify-start absolute -left-32 -top-10 h-full big-child" >
          <div className="rounded-xl bg-white w-1/3 h-full  shadow-gray-400 shadow-md mr-12 flex justify-end items-start flex-col p-4">
          <div>
            <p className="font-bold text-lg ">weekly progress</p>
            <p className="text-gray-500">4/5 tasks done</p>

            </div>
          </div>
          <div className="rounded-xl bg-orange-300 w-1/3 h-full shadow-gray-400 shadow-md mr-12 flex justify-end items-start flex-col p-4">
            <div>
            <p className="font-bold text-lg ">try skillex library</p>
            <p className="text-gray-500">15$/month</p>

            </div>
          </div>
          <div className="rounded-xl bg-green-400 w-1/3 h-full shadow-gray-400 shadow-md p-4">
          <p className="font-bold text-lg">sales marketing <br/> workshop</p>

          </div>
          </div>
        </div>
        <div className="row-span-3"></div>
        <div className="row-span-1 flex flex-col">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">Webinars</h3>
            <Link href='' className="text-gray-400 italic">see all</Link>
          </div>
          <div className="flex justify-between">
            <div className="pt-5 flex justify-between w-full ">
              <div className="flex">
              <div className="w-12 h-12 bg-orange-400 rounded-lg mr-5"></div>
              <div className="">
                <p className="font-bold">color theory: the color wheel</p>
                <p className="text-gray-400">3 sep | 8 pm</p>
              </div>
              </div>
             
              <div className="flex justify-center items-center justify-self-end">
                <BsFillClockFill className="text-gray-400"/>
                <p className="font-bold pl-2">2h</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex justify-between">
            <div className="pt-5 flex justify-between w-full ">
              <div className="flex">
              <div className="w-12 h-12 bg-green-400 rounded-lg mr-5"></div>
              <div className="">
                <p className="font-bold">revisiting the double diamond </p>
                <p className="text-gray-400">3 sep | 8 pm</p>
              </div>
              </div>
             
              <div className="flex justify-center items-center justify-self-end">
                <BsFillClockFill className="text-gray-400"/>
                <p className="font-bold pl-2">2h</p>
              </div>
            </div>
            <div></div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardPage;
