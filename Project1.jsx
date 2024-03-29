import React from 'react'
import '../Component/Project1.css'
import image1 from '../images/cool-profile-picture-87h46gcobjl5e4xu.jpg'
import image2 from '../images/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg'
import image3 from '../images/fe1dbf5af17ca70896bc3ad711d3854f.jpg'
import image4 from '../images/handsome-young-man-profile-KEDB24.jpg'
import image5 from '../images/profile-picture.jpeg'
import image6 from '../images/unnamed.webp'

function hell() {
  return (
    <>
    <div className='main'>
      <div className='div1'>
        <div className='img'>
        <img src={image1} width={200} height={300} />
        </div>
        
        <div className='div2'>
          <h4>Mike Tyson</h4>
          <h5>--Developer--</h5>
        </div>
      </div>

      <div className='div12'>
        <div className='img'>
        <img src={image2}width={200} height={300} />
        </div>
        
        <div className='div2'>
          <h4>Travis scott</h4>
          <h5>--Developer--</h5>
        </div>
      </div>


      <div className='div12'>
        <div className='img'>
        <img src={image3} width={200} height={300} />
        </div>
        
        <div className='div2'>
          <h4>Virat kohli </h4>
          <h5>--Designer--</h5>
        </div>
      </div>




      <div className='div22'>
        <div className='img'>
        <img src={image4} width={200} height={300} />
        </div>
        
        <div className='div2'>
          <h4>Anderson</h4>
          <h5>--Manager--</h5>
        </div>
      </div>

      <div className='div23'>
        <div className='img'>
        <img src={image5} width={200} height={300} />
        </div>
        
        <div className='div2'>
          <h4>kevin Peterson</h4>
          <h5>----CTO----</h5>
        </div>
      </div>


      <div className='div23'>
        <div className='img'>
        <img src={image6} width={200} height={300} />
        </div>
        
        <div className='div2'>
          <h4>john cena </h4>
          <h5>----CEO----</h5>
        </div>
      </div>

</div>
    </>
    
  )
}

export default hell