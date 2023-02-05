import React, {  useLayoutEffect } from "react";
import menu from "./../assets/icons/menu.png";
import hash from "./../assets/icons/hash.png";
import laptop from "./../assets/images/laptop.png";
import disk from "./../assets/images/disk.png";
import drug from "./../assets/images/drug.png";
import lady from "./../assets/images/lady.png";
import arrow from "./../assets/images/arrow.png";
import arrowdown from "./../assets/images/arrowdown.png";
import googl from "./../assets/images/googl.png";
import dolby from "./../assets/images/dolby.png";
import equis from "./../assets/images/equis.png";
import giorgio from "./../assets/images/giorgio.png";
import nest from "./../assets/images/nest.png";
import truckstop from "./../assets/images/truckstop.png";
import cravings from "./../assets/images/cravings.png";
import chase from "./../assets/images/chase.png";
import meet from "./../assets/images/meet.png";
import phone from "./../assets/images/phone.png";
import question from "./../assets/images/question.png";
import love from "./../assets/images/love.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollow from "./Mouse";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".navtem", {
        y: 200,
        duration: 0.7,
        stagger: 0.1,
      }).from(
        ".groow",
        {
          y: 200,
          stagger: 0.1,
          duration: 0.7,
          rotate: 5,
        },
        "<"
      )
      .to(".stl",{
        height: "160px",
        duration:1,
        scrollTrigger:{
          trigger:".stl",
          start: "bottom bottom",
          end: "bottom top",
          scrub:true
        }
      })
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
    <MouseFollow />
    <div className="flex flex-col w-full min-h-[100vh] bg-green_dark items-center">
      <nav className="flex justify-between items-center px-[80px] py-[15px] border-b-[0.5px] border-[#54B093] w-full   max-[900px]:px-[20px] overflow-hidden  ">
        <span className="flex items-center font-cormorant text-text_white text-[24px] cursor-pointer max-[900px]:text-[14px] navtem">
          MENU
          <img
            src={menu}
            alt="menu"
            className="w-[24px] h-[21px] ml-[5px]  max-[600px]:h-[12px]  max-[600px]:w-[20px]"
          />
        </span>
        <span className="font-cormorant text-text_white text-[32px] cursor-pointer italic font-normal max-[900px]:text-[14px] navtem">
          groow
        </span>
        <span className="font-cormorant text-text_white text-[24px] cursor-pointer  font-normal max-[900px]:text-[14px] navtem">
          CONTACT
        </span>
      </nav>

      <div className=" w-[70%] text-left mt-[70px] mb-20  max-[900px]:px-[20px] max-[900px]:w-[90%] cursor-default ">
        <div className="w-full  overflow-hidden">
          <span className="font-cormorant text-text_white text-[140px]   font-medium block leading-[160px] max-[900px]:leading-[150px] max-[900px]:text-[100px] max-[600px]:leading-[80px] max-[600px]:text-[50px] max-[900px]:mt-[100px] groow">
            GROWING
          </span>
        </div>
        <div className="w-full  overflow-hidden">
          <span className="font-cormorant text-green_light text-[140px]   font-medium flex items-center justify-end w-[90%] leading-[160px] max-[900px]:text-[100px] max-[900px]:leading-[150px] max-[600px]:leading-[80px] max-[600px]:text-[50px] groow">
            <img src={hash} alt="hash" className="max-[900px]:w-[50px]" />{" "}
            BRANDS
          </span>
        </div>
        <div className="w-full  overflow-hidden">
          <span className="font-cormorant text-text_white text-[140px]   font-medium block leading-[160px] max-[900px]:text-[100px] max-[900px]:leading-[150px] max-[600px]:leading-[80px] max-[600px]:text-[50px] groow">
            PEOPLE LOVE.
          </span>
        </div>

        <span className="text-text_white font-proza text-[18px] leading-[20px] max-w-[500px] flex mt-[50px] max-[900px]:mt-[50%] justify-self-end float-right max-[600px]:text-[14px]">
          Groow is a global design agency inspired by people and creating
          branded e-commerce experiences specializing in Motion, UI/UX and
          Digital Strategy.
        </span>
      </div>

      <div className=" w-full px-[80px] flex flex-row flex-wrap max-[900px]:px-[40px]">
        <div className="flex flex-col items-start w-[55%] mr-[10px] max-[900px]:w-[100%] max-[900px]:mr-[0px]">
          <p className="font-cormorant text-text_white text-[32px] text-start leading-[38px]">
            SELECTED <br /> WORKS
          </p>
          <span className="h-[0px] w-[1px] border-2 border-solid border-green_light stl  "></span>
          <p className="font-cormorant text-text_white text-[50px] text-start max-[600px]:text-[24px]">
            <sup className="text-[20px] -top-[1.5em] mr-[10px] max-[600px]:-top-[0.5em]">
              01
            </sup>
            VERY GOOD CREATIVE CO.
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={laptop}
              alt="laptop"
              className="h-[1000px] w-full max-[600px]:h-[auto] image hover:scale-150 duration-500 hover:brightness-50"
            />
          </div>
          <p className="font-proza text-text_white text-[24px] py-[10px] font-extralight max-[600px]:text-[14px]">
            CREATIVE STRATEGY/ DESIGN
          </p>
        </div>

        <div className="flex flex-col items-start w-2/5 mt-[35%] ml-[20px]  max-[900px]:w-[100%] max-[900px]:mt-[5%] max-[900px]:ml-[0px] ">
          <p className="font-cormorant text-text_white text-[50px] text-start  max-[600px]:text-[24px]">
            <sup className="text-[20px] -top-[1.5em] mr-[10px] max-[600px]:-top-[0.5em]">
              02
            </sup>
            ERBOLOGY
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={drug}
              alt="laptop"
              className="w-full h-[1000px]  max-[600px]:h-[auto] image hover:scale-150 duration-500 hover:brightness-50"
            />
          </div>
          <p className="font-proza text-text_white text-[24px] py-[10px] font-extralight">
            BRANDING/ DESIGN
          </p>
        </div>

        <div className="flex flex-col items-start w-[55%] -mt-[10%]  max-[900px]:w-[100%] max-[900px]:mt-[5%] ">
          <p className="font-cormorant text-text_white text-[50px] text-start  max-[600px]:text-[24px]">
            <sup className="text-[20px] -top-[1.5em] mr-[10px] max-[600px]:-top-[0.5em]">
              03
            </sup>
            DISKS & RODS
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={disk}
              alt="laptop"
              className="w-full h-[1000px]  max-[600px]:h-[auto] image hover:scale-150 duration-500 hover:brightness-50"
            />
          </div>
          <p className="font-proza text-text_white text-[24px] py-[10px] font-extralight">
            DESIGN/3D
          </p>
        </div>

        <div className="flex flex-col items-start w-2/5 ml-[20px] mt-[5%]  max-[900px]:w-[100%] max-[900px]:ml-[0px] ">
          <p className="font-cormorant text-text_white text-[50px] text-start  max-[600px]:text-[24px]">
            <sup className="text-[20px] -top-[1.5em] mr-[10px] max-[600px]:-top-[0.5em]">
              04
            </sup>
            LISTEN
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={lady}
              alt="laptop"
              className="w-full h-[823.5px]  max-[600px]:h-[auto] image hover:scale-150 duration-500 hover:brightness-50"
            />
          </div>
          <p className="font-proza text-text_white text-[24px] py-[10px] font-extralight">
            MOBILE APP/ DESIGN
          </p>
        </div>
        <div className="w-full flex justify-center mt-[50px]">
          <button className="font-proza text-[13px] text-text_white border-[1px] rounded-[20px] p-[10px] border-green_light justify-self-center  max-[600px]:text-[12px] ">
            SEE ALL PROJECTS
          </button>
        </div>
      </div>

      <div className="mt-[100px] w-full px-[40px] ">
        <p className="font-cormorant text-text_white text-[80px] leading-[60px] max-[600px]:text-[40px] max-[600px]:leading-[40px] ">
          <span className=" -ml-[200px] max-[600px]:-ml-[100px] flex items-center justify-center ">
            LET'S <span className="text-green_light">GROW</span>
            <img src={arrow} alt="arrow" className="max-[600px]:w-[50px] " />
          </span>
          <br /> <span className="-mr-[100px]">YOUR BRAND</span>
        </p>

        <div className="flex w-full mt-[100px] justify-between  max-[600px]:flex-col ">
          <div className="w-2/4  max-[600px]:w-full ">
            <p className="font-proza text-[18px] text-text_white text-start ">
              Our belief is that everything we make must be effective,
              beautiful, and a joy to interact with.As a full-service design
              agency, we work closely with our clients to define, design and
              develop transformative user experiences across all platforms and
              brand’s touchpoints.
            </p>
            <div className="flex justify-between w-2/4 max-[900px]:w-full ">
              <span className="flex flex-col item-start text-start text-text_white">
                <p className="font-proza text-[70px] ">14</p>
                <p className="font-proza text-[15px]">
                  years <br /> in business
                </p>
              </span>
              <span className="flex flex-col item-start text-start text-text_white">
                <p className="font-proza text-[70px] ">85</p>
                <p className="font-proza text-[15px]">
                  team <br /> of expert
                </p>
              </span>
            </div>
            <div className="w-full flex justify-start mt-[50px]">
              <button className="font-proza text-[13px] text-text_white border-[1px] rounded-[20px] p-[10px] border-green_light max-[600px]:text-[12px] ">
                ABOUT GROOW
              </button>
            </div>
          </div>

          <div className="flex flex-col  w-1/4  max-[600px]:w-full  max-[600px]:mt-[50px] ">
            <p className="flex font-cormorant text-text_white text-[20px] items-baseline mb-[15px]">
              Digital Strategy
              <img src={arrowdown} alt="arrow" className="w-[12px] ml-[5px]" />
            </p>
            <p className="flex font-cormorant text-text_white text-[20px] items-baseline mb-[15px]">
              Branding
              <img src={arrowdown} alt="arrow" className="w-[12px] ml-[5px]" />
            </p>
            <p className="flex font-cormorant text-text_white text-[20px] items-baseline mb-[15px]">
              Enteprise UX
              <img src={arrowdown} alt="arrow" className="w-[12px] ml-[5px]" />
            </p>
            <p className="flex font-cormorant text-text_white text-[20px] items-baseline mb-[15px]">
              Developement
              <img src={arrowdown} alt="arrow" className="w-[12px] ml-[5px]" />
            </p>
            <p className="flex font-cormorant text-text_white text-[20px] items-baseline mb-[15px]">
              Immersion
              <img src={arrowdown} alt="arrow" className="w-[12px] ml-[5px]" />
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-[40px] mt-[100px] ">
        <div className="w-full flex justify-start flex-col">
          <p className="font-cormorant text-text_white text-[32px] text-start leading-[38px]">
            OUR <br /> CLIENTS
          </p>
          <span className="h-[160px] w-[1px] border-2 border-solid border-green_light  "></span>
        </div>

        <div className="w-full flex flex-col items-center max-[600px]:flex-col  max-[900px]:items-start  max-[600px]:items-center ">
          <div className="flex justify-between w-3/5 my-[20px] [&>*]:my-[20px]  max-[600px]:flex-col  [&>*]:px-[10px]">
            <img className="w-[119px] h-[39px]" src={googl} alt="google" />
            <img className="w-[119px] h-[39px]" src={dolby} alt="logo" />
            <img className="w-[119px] h-[39px]" src={equis} alt="logo" />
            <img className="w-[119px] h-[39px]" src={truckstop} alt="logo" />
            <img className="w-[119px] h-[39px]" src={nest} alt="logo" />
          </div>
          <div className="flex justify-between w-2/5 max-[600px]:flex-col max-[600px]:w-3/5 [&>*]:my-[20px]  [&>*]:px-[10px]">
            <img className="w-[119px] h-[39px]" src={cravings} alt="logo" />
            <img className="w-[119px] h-[39px]" src={giorgio} alt="logo" />
            <img className="w-[119px] h-[39px]" src={chase} alt="logo" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-[200px] leading-[80px]">
          <p className="font-cormorant text-[80px] text-text_white -ml-[200px] max-[600px]:text-[40px] max-[600px]:leading-[40px] max-[600px]:-ml-[100px] ">
            WE ARE
          </p>
          <p className="font-cormorant text-[80px] text-green_light flex items-center -mr-[200px] max-[600px]:text-[40px] max-[600px]:leading-[80px] max-[600px]:-mr-[100px] ">
            <img src={hash} alt="has" className="w-[50px] mr-[10px]" /> CURIOUS.
          </p>
        </div>

        <div className="flex justify-center mt-[100px]  max-[900px]:flex-col items-center ">
          <div className="w-[500px] max-[600px]:w-[400px] flex flex-col items-start px-[20px]  max-[900px]:my-[20px]">
            <div className=" relative overflow-hidden">
              <img className="h-[400px]  hover:scale-150 duration-500 hover:brightness-50" src={meet} alt="meet" />
              <p className="absolute top-[8px] left-[16px] font-cormorant text-[32px] text-text_white ">
                AGENCY
              </p>
            </div>
            <p className=" font-cormorant text-[25px] max-[600px]:text-[25px]  text-text_white my-[10px] ">
              <sup>01</sup> IS GROOW THE BEST ?
            </p>
          </div>

          <div className="w-[500px] max-[600px]:w-[400px] flex flex-col items-start px-[20px]  max-[900px]:my-[20px]">
            <div className=" relative overflow-hidden">
              <img className="h-[400px] hover:scale-150 duration-500 hover:brightness-50 " src={phone} alt="meet" />
              <p className="absolute top-[8px] left-[16px] font-cormorant text-[32px] text-text_white ">
                DESIGN
              </p>
            </div>
            <p className=" font-cormorant text-[25px] text-text_white my-[10px] max-[600px]:text-[25px]  ">
              <sup>02</sup> DESIGNING TEST LOGISTICS
            </p>
          </div>

          <div className="w-[500px] max-[600px]:w-[400px] flex flex-col items-start px-[20px]  max-[900px]:my-[20px] max-[600px]:text-[25px] ">
            <div className=" relative overflow-hidden">
              <img
                className="h-[400px] w-[480px]  rounded hover:scale-150 duration-500 hover:brightness-50"
                src={drug}
                alt="meet"
              />
              <p className="absolute top-[8px] left-[16px] font-cormorant text-[32px] text-text_white ">
                BRANDING
              </p>
            </div>
            <p className=" font-cormorant text-[25px] text-text_white my-[10px] max-[600px]:text-[25px]  ">
              <sup>03</sup> BRANDING MOVEMENT
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[50px]">
          <button className="font-proza text-[13px] text-text_white border-[1px] rounded-[20px] px-[20px] py-[10px] border-green_light max-[600px]:text-[12px] ">
            READ MORE
          </button>
        </div>
      </div>

      <div className="py-[50px] bg-green_light w-full flex flex-col items-center mt-[100px] leading-[90px]">
        <p className="font-cormorant text-black text-[80px] flex items-center -ml-[200px] max-[600px]:text-[40px] max-[600px]:leading-[40px] max-[600px]:-ml-[100px] ">
          YOU ASKED{" "}
          <img
            src={question}
            alt="question"
            className="ml-[20px] max-[600px]:w-[20px] "
          />
        </p>
        <p className="font-cormorant text-black text-[80px] flex items-center -mr-[200px] max-[600px]:text-[40px] max-[600px]:leading-[40px] max-[600px]:-mr-[100px] ">
          WE ANSWERED
        </p>

        <div className="w-full px-[40px]">
          <p className="flex items-center font-cormorant text-[30px] max-[600px]:text-[20px] ">
            What process should I expect from your agency?
            <img src={arrowdown} className="invert ml-[10px]" alt="" />
          </p>
          <p className="flex items-center font-cormorant text-[30px] max-[600px]:text-[20px]  ">
            Do you work with startup brands?
            <img src={arrowdown} className="invert ml-[10px]" alt="" />
          </p>
          <p className="flex items-center font-cormorant text-[30px] max-[600px]:text-[20px] ">
            Will I get a proposal and quote for my project?
            <img src={arrowdown} className="invert ml-[10px]" alt="" />
          </p>
          <p className="flex items-center font-cormorant text-[30px] max-[600px]:text-[20px] ">
            How soon is your development result?
            <img src={arrowdown} className="invert ml-[10px]" alt="" />
          </p>
          <p className="flex items-center font-cormorant text-[30px] max-[600px]:text-[20px]  ">
            Do you also do Branding? Is it a separate cost?
            <img src={arrowdown} className="invert ml-[10px]" alt="" />
          </p>
        </div>
      </div>
      <div className="text-center w-full flex flex-col items-center mt-[50px]">
        <p className="font-cormorant text-[100px] text-text_white max-[600px]:text-[50px] ">
          LET’S HEAR FROM
        </p>
        <p className="font-cormorant text-[100px] text-green_light flex items-center  max-[600px]:text-[50px]">
          Y<img src={love} alt="love" className="max-[600px]:w-[50px]" />U{" "}
        </p>
        <div className="w-full flex justify-center mt-[50px]">
          <button className="font-proza text-[13px] text-text_white border-[1px] rounded-[20px] px-[20px] py-[10px] border-green_light max-[600px]:text-[12px] ">
            GET IN TOUCH
          </button>
        </div>

        <div className="w-full px-[40px] mt-[100px] ">
          <div className="w-full h-[1px] bg-green_light  "></div>
          <div className="w-full mt-[50px] flex justify-between max-[600px]:flex-col ">
            <div className=" w-2/5 flex justify-between max-[600px]:w-full ">
              <div className="flex flex-col items-start  [&>*]:py-[10px]">
                <p className="font-cormorant text-[30px] text-text_white">
                  MENU
                </p>
                <p className="font-proza text-[15px] text-text_white">
                  CASE STUDY
                </p>
                <p className="font-proza text-[15px] text-text_white">
                  TESTIMONIAL
                </p>
                <p className="font-proza text-[15px] text-text_white">PRESS</p>
                <p className="font-proza text-[15px] text-text_white">
                  CARRIERS
                </p>
                <p className="font-proza text-[15px] text-text_white">
                  ARTICLE
                </p>
              </div>
              <div className="flex flex-col items-start  [&>*]:py-[10px]">
                <p className="font-cormorant text-[30px] text-text_white">
                  FOLLOW US
                </p>
                <p className="font-proza text-[15px] text-text_white">
                  TWITTER{" "}
                </p>
                <p className="font-proza text-[15px] text-text_white">
                  TESTIMONIAL
                </p>
                <p className="font-proza text-[15px] text-text_white">
                  LINKEDIN
                </p>
                <p className="font-proza text-[15px] text-text_white">GITHUB</p>
                <p className="font-proza text-[15px] text-text_white">
                  INSTAGRAM
                </p>
              </div>
            </div>

            <div className="pt-[10px] w-2/5 flex flex-col items-start max-[600px]:w-full ">
              <p className="font-cormorant text-[30px] text-text_white">
                SUBSCRIBE
              </p>
              <p className="font-proza text-[15px] text-text_white text-start py-[10px]">
                Subscribe to our newsletter to receive regular updates on the
                latest insights, ideas, and discussions and creativity.
              </p>
              <input
                type="mail"
                placeholder="Your mail here"
                className="w-full mt-[20px] bg-[rgba(0,0,0,0)]  border-b border-text_white py-[10px] text-text_white focus:outline-none"
              />
              <div className="w-full flex justify-start mt-[50px]">
                <button className="font-proza text-[15x] text-text_white border-[1px] rounded-[20px] px-[40px] py-[15px] border-green_light max-[600px]:text-[12px] ">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-green_light mt-[20px] "></div>

          <p className="font-cormorant text-[20px] text-text_white py-[10px]">
            All right reserved. 2023. Groow
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
