import '../styles/services.css'
import { Link } from "react-router";



export default function Services(){
    

    

    return (

        <>  
         
        <div id="Container">
          <h1> Services-des-personnes-en-situation-d'handicapes</h1>
        
    <div className="container-A">

        <p className="Paragraph"> Services_d'education</p>
        <img id="img" src="/img/image des services/disability-kids-school-educational-projects-260nw-2036936300.webp" alt=""/>

    </div>


  <div className="container-B">

        <p className="Paragraph"> Services_Travail </p>
        <img  id="img"src="/img/image des services/istockphoto-1483052139-612x612.jpg" alt="" />

    </div>


   <div className="container-C">

            <p className="Paragraph"> Services_rééducation</p>
            <img id="img" src="/img/image des services\Lokomat.jpg" alt="" />

    </div>


    <div className="container-D">
 
 <link rel="stylesheet" href="http://localhost:5173/src/styles/services.css" />

        <p className="Paragraph"> Services_Sport </p>
        <Link className="link-D" to="/Nabda"> Nabda </Link> <br /> <br />
        <img id="img"src="/img/images des hadicapes/1b1be62b3a4ee08227435e656e11e254.webp" alt="" />


    </div>
       


    <div className="container-E">

        <p className="Paragraph"> Services_de-Mobilité </p>
        <img id="img"src="/img/materiels pour les hadicapes/rollator-dynamico-dinterieur-pour-enfant-6-a-8-ans.jpg" alt="" />

    </div>
       
</div>

     
        </>
    )
    
        
    
}
