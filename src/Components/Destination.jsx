import Dest from "./Dest";
import DestCard from "./DestCard";


const Destination=()=>{
    return(
        <>

        <style>

         {`
           body, html {
           overflow-x : hidden ! importnat;
           }
            
         `}



        </style>

        <section className="destiny d-flex align-items-center text-dark" style={{backgroundImage:"url('about.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"70vh"}} >
           
            <div className="container text-center">
                <h1 className="display-4 fw-bold">Destination</h1>
            </div>
        </section>

        <section className="py-5">
            <div className="container text-center">
                <h2 className="text-primary">Uncover Captivating Travel Experiences</h2>
                <p className="fs-5">From the bustling energy of cosmopolitan cities to the serene embrace of untouched wilderness, embark on incredible journeys to the planet's most enchanting destinations. We're here to help you craft memories that will last a lifetime.</p>
            </div>
        </section>
        <section className="py-5">
            <div className="container align-items-center">
                <div className="row">
                    
                    <div className="col-md-12  d-flex justify-content-center gap-3 flex-wrap">
                        <button className="btn btn-info text-center text-light px-4 py-2 rounded-pill">All Locales</button>
                        <button className="btn btn-info text-center text-light px-4 py-2 rounded-pill">Tropical</button>
                        <button className="btn btn-info text-center text-light px-4 py-2 rounded-pill">Heritage</button>
                        <button className="btn btn-info text-center text-light px-4 py-2 rounded-pill">Seaside</button>
                    </div>
                   
                </div>
            </div>
        </section>

       
            <section className="dest py-5 fw-bold ">
               <div className="container text-center">
            
                <div className="row">
                    {Dest.map((item)=>(
                        <DestCard  key={item.id}  name={item.name}  img={item.img}          />
                    ))}
                </div>
               </div>
   
            </section>

            <section>
                <div className="container text-center">
                    <h2 className="text-primary">Let Our Team Help Curate Your Perfect Expedition</h2>
                    <h4 className="fs-4 fw-light mb-4">Unsure which destination aligns with your travel aspirations? Our seasoned travel advisors are poised to design a bespoke itinerary tailored just for you.

</h4>
                <button className="btn btn-primary text-light mb-4 rounded-pill me-3">Receive Complementary Consulation</button>
                
                <button className="btn btn-primary text-light mb-4 rounded-pill">Explore all availale tours</button>
                </div>
            </section>

        </>
    )
}

export default Destination;