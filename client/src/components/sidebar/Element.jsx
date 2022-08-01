import React,{useRef} from 'react'
import './Sidebar.scss'
function Element(props) {
    let element = useRef(null)
    function handleClick({callback}){
        let siblings =element.current.parentElement.children
        for (let el in siblings){
            if (siblings[el].classList)
            siblings[el].classList.remove("element_clicked")

        }
        element.current.classList.add("element_clicked");
        callback();

    }
  return (
      
          <li ref={element} onClick={handleClick} >
            {props.children}
        </li>
     
   
  )
}

export default Element