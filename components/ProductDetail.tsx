import Image from "next/image";
import React from "react";
import product2 from "../assets/img/Rectangle 4501.png";

const ProductDetail = () => {
  return (
    <div className="">
      <h1 className="text-[40px] font-bold mb-[30px]">Project Detail</h1>
      <div className="pb-5 lg:pb-[50px] lg:p-[50px] rounded-[20px] shadow-lg bg-white">
        <h3 className="text-[24px] text-[#212121] lg:block hidden">
          Projcect Detail
        </h3>

        <div className="grid grid-cols-2 mt-[10px] gap-4 lg:gap-14">
          <div className=" bg-white col-span-2 overflow-hidden lg:col-span-1 rounded-[20px] lg:shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="h-2/3">
              <Image
                className="w-full h-full object-container rounded-t-lg"
                src={product2}
                alt=""
              />
            </div>
            <div className="card w-full rounded-[10px]  p-[20px] bg-white lg:bg-[#F7F7F9] h-1/3">
              <h3 className="text-[20px] flex justify-between  text-[#212121] font-medium">
                App Development
              </h3>
              <div className="w-full flex items-center space-x-10 mt-2">
                <p className="text-second-color text-[8px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  mattis cursus luctus accumsan cras. Orci at dolor tempor,
                  pulvinar et.
                </p>
                <div className="flex space-x-4 items-center lg:hidden">
                  <div className="w-[7px] h-[7px] bg-orange-300 rounded-full"></div>
                  <span className="text-orange-300">spaceing</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1 space-y-14 px-5 lg:px-x">
            <div>
              <h1 className="text-[24px] font-bold mb-[10px] text-[#0C273C]">
                App Development using Django
              </h1>
              <p className="text-[#2E3E5C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                mattis cursus luctus accumsan cras. Orci at dolor tempor,
                pulvinar et.
              </p>
            </div>
            <div>
              <h1 className="text-[20px]  font-medium mb-[10px] text-[#0C273C]">
                Project Status
              </h1>
              <div className="flex w-full">
                <p className="bg-[#F03738] rounded-tl-[10px] rounded-bl-[10px] w-[40%] h-[50px] flex items-center justify-center text-white text-[24px] font-bold">
                  40%
                </p>
                <div className="bg-[#F8FAFC] rounded-tr-[10px] rounded-br-[10px] w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-0 px-5">
          <h1 className="text-[20px] text-[#0C273C] font-medium my-[30px]">
            Milestone Step by Step
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start space-y-4 lg:space-y-0 relative">
            <div className=" h-[1px] hidden lg:block bg-[#6D6CE3] absolute top-[21px] right-0 translate-y-2/4 z-1 w-[94%] mr-[20px]"></div>
            <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="20.5"
                  fill="#6D6CE3"
                  stroke="#6D6CE3"
                />
                <path
                  d="M11 21L17.6667 28L31 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[1rem] font-[500] text-[#0C273C]">
                UX UI Design
              </span>
            </div>
            <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="20.5"
                  fill="#6D6CE3"
                  stroke="#6D6CE3"
                />
                <path
                  d="M11 21L17.6667 28L31 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[1rem] font-[500] text-[#0C273C]">
                HTML/CSS & Java Script
              </span>
            </div>
            <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                <path
                  d="M11 21L17.6667 28L31 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[1rem] font-[500] text-[#0C273C]">
                Dajango
              </span>
            </div>
            <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                <path
                  d="M11 21L17.6667 28L31 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[1rem] font-[500] text-[#0C273C]">
                React JS
              </span>
            </div>
            <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                <path
                  d="M11 21L17.6667 28L31 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[1rem] font-[500] text-[#0C273C]">
                Native JS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
