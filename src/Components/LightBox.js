import React, { useRef, useState ,  useEffect} from 'react'

const LightBox = ({isOpen,images ,currentimage ,closeModel}) => {

let LightBoxContainerRef=useRef();
let LightBoxRef=useRef();
let BackButtonRef=useRef();
let NextButtonRef=useRef();

// index of current photo
let currentindexImageArray=images.findIndex(item => currentimage===item)
console.log(currentindexImageArray)
let [currentindexImage,setcurrentindexImage]=useState(currentindexImageArray>= 0 ? currentindexImageArray : 0)
// slider logic 
// update each click in image ,what current image
useEffect(() => {
  setcurrentindexImage(currentindexImageArray)
}, [currentindexImageArray]);

// slide back
let SlideBack=()=>{
  setcurrentindexImage(--currentindexImage)
}
// slide next
let SlideNext=()=>{
  setcurrentindexImage(++currentindexImage)
}

// modal can be closed by clicking outside and x icon

let closeEntireModel=(event)=>{
  if (LightBoxContainerRef.current && !LightBoxRef.current.contains(event.target) 
    && !NextButtonRef.current.contains(event.target)
  && !BackButtonRef.current.contains(event.target)
  ) {
    closeModel(" ")
  }
}
// close model  with "Escape" key.
  useEffect(() => {
    if(isOpen){
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeModel(" ");
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [closeModel,isOpen]);


  if(isOpen)
  {  return ( <>
  <div className='bg-dark' id='LightBoxContainer' onClick={closeEntireModel} ref={LightBoxContainerRef}>


    <div className='container' id='LightBox' ref={LightBoxRef}>

    <i className="fa-solid fa-circle-xmark fa-2xl" id='xicon' onClick={()=>{closeModel(" ")}}></i>

    {/* condition to disable button from sliding  */}
  <button id='BackButton'  onClick={SlideBack} ref={BackButtonRef} disabled={currentindexImage===0?true:false}>
    <i className="fa-solid fa-chevron-left fa-2xl"></i></button>

    <img src={images[currentindexImage]} alt="" className='container' id='LightBox' ref={LightBoxRef}/>


  {/* condition to disable button from sliding  */}
  <button id='NextButton'  onClick={SlideNext} ref={NextButtonRef} disabled={currentindexImage===images.length-1?true:false}>
      <i className="fa-solid fa-chevron-right fa-2xl"></i></button>

    </div>
  

    </div>
    </>
  )}
else{
  return null;
}
}

export default LightBox














