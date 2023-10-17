import Image from "next/image";
import user from "../assets/img/unsplash_jFAG_ixCrsM.png";

const TeamChats = () => {
  return (
    <div className="my-[30px] ">
      <h1 className="text-[40px] font-bold mb-[30px]">
        Chat With Support Team
      </h1>
      <div>
        <div className="bg-white lg:h-[908px] flex flex-col justify-between  rounded-[10px]">
          <div>
            <div className="p-[30px]">
              <div className="flex justify-between  items-center">
                <div className="flex space-x-5">
                  <div className="flex -space-x-2">
                    <div className="users w-[48px] h-[48px] ">
                      <Image src={user} alt="" />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <circle cx="7.5" cy="7.5" r="7.5" fill="#4BDE97" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[16px] text-[#394149] ">
                      Designer
                    </p>
                    <span>online</span>
                  </div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 10C11.6044 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1522 11.2346C10.0009 11.6001 9.96126 12.0022 10.0384 12.3902C10.1156 12.7781 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0387 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.6629 13.1111C13.8827 12.7822 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM5 10C4.60444 10 4.21776 10.1173 3.88886 10.3371C3.55996 10.5568 3.30362 10.8692 3.15224 11.2346C3.00087 11.6001 2.96126 12.0022 3.03843 12.3902C3.1156 12.7781 3.30608 13.1345 3.58579 13.4142C3.86549 13.6939 4.22186 13.8844 4.60982 13.9616C4.99778 14.0387 5.39992 13.9991 5.76537 13.8478C6.13082 13.6964 6.44318 13.44 6.66294 13.1111C6.8827 12.7822 7 12.3956 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10ZM19 10C18.6044 10 18.2178 10.1173 17.8889 10.3371C17.56 10.5568 17.3036 10.8692 17.1522 11.2346C17.0009 11.6001 16.9613 12.0022 17.0384 12.3902C17.1156 12.7781 17.3061 13.1345 17.5858 13.4142C17.8655 13.6939 18.2219 13.8844 18.6098 13.9616C18.9978 14.0387 19.3999 13.9991 19.7654 13.8478C20.1308 13.6964 20.4432 13.44 20.6629 13.1111C20.8827 12.7822 21 12.3956 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10Z"
                    fill="#394149"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <hr className="bg-[#F0F0F0] " />
            <div className="p-[30px] ">
              <div className="flex space-x-7">
                <div className="users w-[48px] h-[48px] space-x-2 flex">
                  <Image src={user} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="bg-[#F8F9FA] h-[48px] rounded-[10px] flex items-center justify-between p-[20px] text-[#394149]">
                    <span className="text-[#394149] font-normal leading-[155.6%]">
                      Hi John - no problem, I will look at it.
                    </span>
                  </p>
                  <div className="flex space-x-2 px-[20px] py-[10px]">
                    <span className="text-[#39414999] font-400">
                      june 29, 2022, 3:42 PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3 mt-[30px]">
                <div className="users w-[48px] h-[48px] space-x-2 flex">
                  <Image src={user} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="bg-[#F8F9FA] h-[48px] rounded-[10px] flex items-center justify-between pl-[30px] pr-[5px] py-[10px] text-[#394149]">
                    <span className="text-[#394149] font-normal leading-[155.6%]">
                      Hi John - no problem, I will look at it.
                    </span>
                  </p>
                  <div className="flex space-x-2 pl-[30px] pr-[5px] py-[10px]">
                    <span className="text-[#39414999] font-400">
                      june 29, 2022, 3:42 PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <p className="bg-[#F8F9FA] h-[48px] rounded-[10px] flex items-center justify-between pl-[30px] pr-[5px] py-[10px] text-[#394149]">
                  <span className="text-[#394149] font-normal leading-[155.6%]">
                    Sure. Makes sense.
                  </span>
                </p>
              </div>
              <div className="lg:flex hidden space-x-3 mt-[30px]">
                <div className="users w-[48px] h-[48px] space-x-2 flex">
                  <Image src={user} alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="bg-[#F8F9FA]  rounded-[10px] flex items-center justify-between pb-[40px] px-[15px] pt-[10px]  text-[#394149]">
                    <span className="text-[#394149] w-[406px] font-normal leading-[155.6%]">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century.
                    </span>
                  </p>
                  <div className="flex space-x-2 pl-[30px] pr-[5px] py-[10px]">
                    <span className="text-[#39414999] font-400">
                      june 29, 2022, 3:42 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[30px]">
            <div className="flex my-[20px] justify-between">
              <span className="text-[#39414999]">Type Something...</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M1.07963 0.0768483L24.048 11.3942C24.1732 11.456 24.2787 11.5515 24.3524 11.6701C24.4262 11.7886 24.4653 11.9255 24.4653 12.0651C24.4653 12.2047 24.4262 12.3416 24.3524 12.4601C24.2787 12.5787 24.1732 12.6743 24.048 12.736L1.07813 24.0534C0.949447 24.1166 0.805307 24.1415 0.662875 24.1251C0.520443 24.1087 0.385724 24.0517 0.27476 23.9609C0.163797 23.8702 0.0812664 23.7494 0.0369984 23.613C-0.00726952 23.4767 -0.0114094 23.3304 0.0250716 23.1918L2.30022 14.5983C2.3371 14.4592 2.4133 14.3338 2.51969 14.2369C2.62608 14.1401 2.75814 14.076 2.90004 14.0523L13.1928 12.3366C13.2541 12.3264 13.312 12.3012 13.3611 12.263C13.4102 12.2249 13.449 12.1751 13.474 12.1182L13.5009 12.0285C13.5149 11.9453 13.5003 11.8598 13.4596 11.786C13.4189 11.7121 13.3544 11.6542 13.2766 11.6216L13.1928 11.5977L2.8432 9.87298C2.70157 9.84904 2.56983 9.78483 2.46373 9.68801C2.35762 9.59119 2.28164 9.46586 2.24487 9.32701L0.0250716 0.939937C-0.0117888 0.801184 -0.00793539 0.654754 0.0361721 0.518132C0.0802796 0.38151 0.162777 0.260469 0.273814 0.169463C0.38485 0.0784577 0.519733 0.0213327 0.662356 0.00490994C0.804979 -0.0115128 0.949316 0.0134608 1.07813 0.0768483H1.07963Z"
                  fill="#6D6CE3"
                />
              </svg>
            </div>
            <hr className="bg-[#F0F0F0] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamChats;
