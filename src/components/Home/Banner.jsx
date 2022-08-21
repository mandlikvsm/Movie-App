import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.scss';
// import './Home.scss'
const imgUrl = "https://image.tmdb.org/t/p/original/";


const Banner = ({arr = [{}]}) => {
    
    // console.log(arr);
    
    
    return (
     
 <Carousel fade  >

 {arr.map((item,index)=>(
    
    <Carousel.Item key={index}  id="banner" interval={500} >
<img
className="bannerImg"
id="bannerImage"
src= {`${imgUrl}/${item.poster_path}`}
             alt={`${index} banner`}
             
/>
{/* <Carousel.Caption> */}
{/* <h3>{item.name}</h3> */}
{/* <p>{item.description}</p> */}
{/* <p>{item.source}</p> */}
{/* <u>Read more</u> */}
         {/* </Carousel.Caption> */}
         
</Carousel.Item>

 ))}


</Carousel>
    )
}

export default Banner



// import Carousel from 'react-bootstrap/Carousel';

// function Banner() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Banner;