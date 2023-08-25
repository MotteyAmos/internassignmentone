import "../App.css"
import { avatar2,avatar3,avatar4 } from "../../public/images";


import Feature from "./Feature";

const features = [
    {
        image: avatar3,
        title: "Designing Dashboards",
        year:"2020",
        dashboard:"Dashboard",
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates recusandae iusto similique, impedit eos provident? Quibusdam earum vitae nemo illo."
    },
    {
        image: avatar2,
        title: "Vibrant Portraits of 2020",
        year:"2020",
        dashboard:"Dashboard",
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates recusandae iusto similique, impedit eos provident? Quibusdam earum vitae nemo illo."
    },
    {
        image: avatar4,
        title: "36 Days of Malayalam type",
        year:"2020",
        dashboard:"Dashboard",
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates recusandae iusto similique, impedit eos provident? Quibusdam earum vitae nemo illo."
    }
]


const Features = () => {
  return (
    <div className="px-[1rem] mb-[8rem] mx-[10rem] max-sm:mx-[3rem]">
        <p class="ml-[1rem] text-[1.5rem] p-[1rem] ">Featured Works</p>
        <div>
            {
                features.map((feature, key)=>{
                    
                   return  <Feature key={key} value={feature}/>
                })
            }
        </div>
      
    </div>
  )
}

export default Features
