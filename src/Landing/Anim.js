import React, { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Anim = () => {
  const tl = gsap.timeline();
  let load = 0;
  const navigate = useNavigate();
  let int = setInterval(loading, 150);

  function loading() {
    load += 5;
    if (load > 99) {
      clearInterval(int);
    }
    document.querySelector(".perc").innerText = `${load}`;
    document.querySelector(".line").style.width = `${load}%`;
  }

  useEffect(() => {
    gsap.context(() => {
      tl.from(".percent", {
        y: 200,
        duration: 0.7,
        ease: "none",
      })
        .to(".percent", {
          y: 200,
          duration: 0.7,
          delay: 3,
        })
        .to(".line", {
          opacity: 0,
          duration: 0.7,
        });
    });

    setTimeout(
      ()=>  navigate("/home")
      ,5500
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-green_dark flex items-start justify-center flex-col px-[40px]">
      <div className="w-full flex items-center justify-center px-[40px] overflow-hidden  h-[250px] ">
        <p className="font-cormorant text-text_white text-[200px] percent perc  w-2/4 max-[600px]:text-[50px] ">
          0
        </p>
        <p className="font-cormorant text-text_white text-[200px] percent w-2/4 max-[600px]:text-[50px]">
          %
        </p>
      </div>
      <div className="w-[0%] h-[1px] bg-green_light mt-[20px] line duration-300"></div>
    </div>
  );
};

export default Anim;
