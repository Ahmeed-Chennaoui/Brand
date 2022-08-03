import React,{useRef} from 'react'
import './Sidebar.scss'
import { useNavigate } from 'react-router-dom';
function Element({goTo,children}) {
     let navigate = useNavigate();

    let element = useRef(null)


    function handleClick(){
        let siblings =element.current.parentElement.children
        for (let el in siblings){
            if (siblings[el].classList)
            siblings[el].classList.remove("element_clicked")

        }
        element.current.classList.add("element_clicked");
        if (goTo)
        navigate(`${goTo}`)
        

    }
  return (
      
          <li ref={element} onClick={handleClick} >
            {children}
        </li>
     
   
  )
}

export default Element