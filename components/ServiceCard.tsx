import React, { FunctionComponent } from 'react'
import { Iservice } from '../type'

const ServiceCard:FunctionComponent<{service:Iservice}> = ({service:{Icon,about,title}}) => {

    const createMarkup = () =>{
      return{

          __html:about
      } 
    }    

  return (
    <div className='flex items-center space-x-4 p-2'>
        <Icon className='w-12 h-12 text-green '/>
        <div>
            <h4 className='font-bold'>{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div>

    </div>
  )
}

export default ServiceCard