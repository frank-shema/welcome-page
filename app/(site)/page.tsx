
// export default function Home() {
// 	return (
// 		<div className="w-[100vw] h-[100vh] overflow-hidden">
// 			<div className="w-[100px] h-[100px] rounded-full absolute left-[50%] top-[-50px] bg-[#a673ea]"/>
// 			<div className="w-[100px] h-[100px] rounded-full absolute top-[50%] right-[-50px] bg-[#a673ea]"/>
// 			<div className="w-[60px] h-[60px] rounded-full absolute bottom-3  right-[20%] bg-[#a673ea]"/>
// 			<div className="w-[40px] h-[40px] rounded-full absolute bottom-[50%]  right-[25%] bg-[#a673ea]"/>
// 			<div className="w-[40px] h-[40px] rounded-full absolute bottom-[17%]  right-[34%] bg-[#a673ea]"/>
// 			<div className="w-[40px] h-[40px] rounded-full absolute bottom-[35%]  left-[28%] bg-[#a673ea]"/>
// 			<div className="w-[60px] h-[60px] rounded-full absolute bottom-10  left-[15%] bg-[#a673ea]"/>
// 			<div className="w-full h-full flex justify-center items-center">
// 				<div className="text-center w-[35vw]">
// 					<p className="text-3xl font-900 my-2">We're Coming Soon</p>
// 					<p className="text-gray-500">There are many variations of passages of Lorem  fored  alteration in some form,by injected even slightly believable</p>
// 					<button className="bg-[#3266cc] px-4 rounded-full py-2 font-bold text-2xl text-white my-8">CONTACT US</button>
// 					<div className="flex flex-row gap-5 mx-auto my-2 justify-center">
// 						<a href="" className="border-r-[2px] pr-4 border-black">facebook</a>
// 						<a href="" className="border-r-[2px] pr-4 border-black">twitter</a>
// 						<a href="" className="border-r-[2px] pr-4 border-black">linkedin</a>
// 						<a href="" className="border-r-[2px] pr-4 border-black">instagram</a>
// 					</div>
// 				</div>
// 			</div>		
// 		</div>
// 	)
// }


export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div className="w-[100px] h-[100px] rounded-full absolute left-[50%] top-[-50px] bg-[#a673ea] -z-10"/>
      <div className="w-[100px] h-[100px] rounded-full absolute top-[50%] right-[-50px] bg-[#a673ea] -z-10"/>
      <div className="w-[60px] h-[60px] rounded-full absolute bottom-3 right-[20%] bg-[#a673ea] -z-10"/>
      <div className="w-[40px] h-[40px] rounded-full absolute bottom-[50%] right-[25%] bg-[#a673ea] -z-10"/>
      <div className="w-[40px] h-[40px] rounded-full absolute bottom-[17%] right-[34%] bg-[#a673ea] -z-10"/>
      <div className="w-[40px] h-[40px] rounded-full absolute bottom-[35%] left-[28%] bg-[#a673ea] -z-10"/>
      <div className="w-[60px] h-[60px] rounded-full absolute bottom-10 left-[15%] bg-[#a673ea] -z-10"/>
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-center lg:w-[35vw] md:w-[40%] sm:w-[45%] mx-auto">
          <p className="text-3xl font-900 my-2">We're Coming Soon</p>
          <p className="text-gray-500">There are many variations of passages of Lorem fored alteration in some form,by injected even slightly believable</p>
          <button className="bg-[#3266cc] px-4 rounded-full py-2 font-bold text-2xl text-white my-8">CONTACT US</button>
          <div className="flex flex-row gap-5 items-center my-2 justify-center ">
            <a href="" className="border-r-[2px] pr-4 border-black">facebook</a>
            <a href="" className="border-r-[2px] pr-4 border-black">twitter</a>
            <a href="" className="border-r-[2px] pr-4 border-black">linkedin</a>
            <a href="" className=" ">instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

