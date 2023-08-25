import "../App.css"


const MainSec1 = () => {
  return (
    <div class="grid grid-cols-3 gap-5 max-[1024]:gap-0  max-sm:flex max-sm:flex-col-reverse     justify-between mb-[3rem]  mx-[10rem] max-sm:mx-[3rem] items-center">
      <div class=" col-span-2 mr-[5rem]">
        <div class="text-[5rem] max-sm:text-[1.5rem]  font-bold text-[#1e293b] ">
          Hi, I am John, <br />
          Creative Technologist
        </div>
        <div class="my-[1rem] text-[1.4rem] max-sm:text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.assumenda,
          imilique numquam. Voluptatibus mollitia unde reprehenderit adipisci
          quibusdam ipsa labore, vero, et veritatis in explicabo reiciendis?
        </div>
        <button class="py-[0.5rem] px-[1rem] bg-[#f87171] text-white text-[1rem] rounded-sm mt-[1rem]">
          Download Resume
        </button>
      </div>
      <div class="w-[15rem] max-[1024px]:ml-[8rem] border-2 h-[15rem] rounded-[50%] drop-shadow-xl ">
        <img
          src="./images/avatar3.jpg"
          alt=""
          class="w-[15rem] h-[15rem] rounded-[50%]"
        />
      </div>
    </div>
  );
};

export default MainSec1;
