import React, { useState ,Suspense, lazy } from 'react';
import { motion } from "framer-motion";

// Lazy load the LightBox component
const LightBox = lazy(() => import('./LightBox'));
const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHFyGj0c1K-Mk106ZGT-juvcp-4Z8aMocHw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0BICoGKZPPfmA1qNXC64tLT9HRqtN-Gwgw&s',
    'https://cdn.blastness.biz/media/820/top/thumbs/full/1920-HOME-2024-1.jpg',
    'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMisv_7XqCi3Wk1SAuCfZsoWLYuOwF7HzqqQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlbvFyPssHnbVThr0EpS8cN76F46NhCyFtQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ6f_hwbynm5MwElDuJSHk1t8pT1HmcmsxA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTt71GS3V04pa7_zpOH-eKR9vrfbedjD_4Ng&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNrpkZOagxoni-lQ4sCIJNrQTaJRndyKdFw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKYpa1PKvAzU82k0vdYIry-dR6eW8q8BffA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahlag9oad7JGTWFYwQICduV5d4gC12--0Rg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNKIvURYX_v9IZIT6FY2y5j2SPWtzy2QgNQ&s',
  ];

const ImageGallery = () => {
 let [isModalOpen,setisModalOpen]=useState(false)
 let [CurrentImageInClick,setCurrentImageInClick]=useState("")

  let LightBoxOpen=(imageurl)=>{
    setisModalOpen(!isModalOpen);
    setCurrentImageInClick(imageurl)
  }
  return (
    <>
     <Suspense fallback={<>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    /> </>}>
        <LightBox isOpen={isModalOpen} images={images} currentimage={CurrentImageInClick} closeModel={LightBoxOpen}/>
        </Suspense>
   <div  className="grid justify-items-center sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 grid-cols-1 gap-5 mt-4"
   id='containerImage'
   >
{images.map((e,i)=>{
  return ( <>
<div className="col-span-1" key={i} id="containerpreview">
   <img src={e} alt="...image" style={{width:"250px",height:"300px",}} className="mb-5" id="ImagePreview"
   onClick={()=>{LightBoxOpen(e)}}
   />
   <button className="text-white font-bold py-2 px-4 rounded "
   id="Button"
   onClick={()=>{LightBoxOpen(e)}}
   >
    View
   </button>
    </div>
    </>
  )
})}
</div>

    </>
  );
};

export default ImageGallery