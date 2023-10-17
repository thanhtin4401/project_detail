import Image from "next/image";
import React from "react";
import product2 from "../assets/img/Rectangle 4501.png";

const ProductDetail = () => {
  return (
    <div className="hidden">
      <h1 className="text-[40px] font-bold mb-[30px]">Project Detail</h1>
      <div className="rounded-[20px] shadow-lg">
        <div className="grid grid-cols-2 mt-[10px] gap-[60px]">
          <div className=" bg-white col-span-2 overflow-hidden lg:col-span-1 border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Image className="rounded-t-lg" src={product2} alt="" />
            </div>
            <div className="card w-full rounded-[10px]  p-[20px]  bg-[#F7F7F9]">
              <h3 className="text-[20px] flex justify-between  text-[#212121] font-medium">
                App Development
              </h3>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                mattis cursus luctus accumsan cras. Orci at dolor tempor,
                pulvinar et.
              </p>
              <div className="flex flex-col mt-[30px] space-y-4 ">
                <div>
                  <h1 className="text-[24px] font-bold mb-[10px] text-[#0C273C]">
                    App Development using Django
                  </h1>
                  <p className="text-[#2E3E5C] text-[18px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eros, mattis cursus luctus accumsan cras. Orci at dolor
                    tempor, pulvinar et.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div>
                  <h1 className="text-[24px] font-bold  mb-[10px] text-[#0C273C]">
                    Project Status
                  </h1>
                  <div className="flex">
                    <p className="bg-[#F03738] rounded-tl-[10px] rounded-bl-[10px] w-[40%] h-[50px] flex items-center justify-center text-white text-[24px] font-bold">
                      40%
                    </p>
                    <div className="bg-[#f0f0f0] rounded-tr-[10px] rounded-br-[10px] w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-[20px] text-[#0C273C] font-medium my-[30px]">
            Milestone Step by Step
          </h1>
          <div>
            <div className="flex items-center">
              <div className="flex items-center relative">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="232"
                  height="2"
                  viewBox="0 0 232 2"
                  fill="none"
                >
                  <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                </svg>
              </div>
              <div className="flex items-center relative">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="232"
                  height="2"
                  viewBox="0 0 232 2"
                  fill="none"
                >
                  <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                </svg>
              </div>
              <div className="flex items-center relative">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="232"
                  height="2"
                  viewBox="0 0 232 2"
                  fill="none"
                >
                  <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                </svg>
              </div>
              <div className="flex items-center relative">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="232"
                  height="2"
                  viewBox="0 0 232 2"
                  fill="none"
                >
                  <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                </svg>
              </div>
              <div className="flex items-center relative">
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
              </div>
              <div></div>
            </div>
            <div className="flex ">
              <p className="text-[#0C273C] font-medium mt-2"> UI UX</p>
              <p className="ml-[166px] text-[#0C273C] font-medium mt-2">
                HTML/CSS & Java Script
              </p>
              <p className="ml-[166px] text-[#0C273C] font-medium mt-2">
                Dajango
              </p>
              <p className="ml-[215px] text-[#0C273C] font-medium mt-2">
                React JS
              </p>
              <p className="ml-[215px] text-[#0C273C] font-medium mt-2">
                Native JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
