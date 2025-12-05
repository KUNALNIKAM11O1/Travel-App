import FeatureCard from "./FeatureCard";
import StatCard from "./StatCrad";
import PackageCard from "./PackageCard";
import Features from "./Features";
import Stats from "./Stats";
import Packages from "./Packages";




const Home=()=>{
    return(
        <>

       <section className="hero d-flex align-items-center text-dark bg-secondary" style={{height:"80vh",background:" url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg) center/cover no-repeat"}}>
        <div className="container text-center">
        <h1 className="display-4 fw-bold">Explore The World</h1>
        <p className="mt-3 fs-3">Discover beautiful destinations with best travel deals</p>
        <button className="btn btn-light btn-lg mt-3">Book Now</button>
        </div>
       </section>


       <section className="py-5 bg-secondary">
        <div className="container text-center">
            <h2 className="fw-bold mb-4">Why Choose Us?</h2>

            <div className="row">
                {Features.map((item)=>(
                    <FeatureCard key={item.id} title={item.title} desc={item.desc}  />
                ))}
            </div>
        </div>
       </section>

            <section className="stats py-5 fw-bold bg-info" style={{background:"blue"}}>
                <div className="container text-center">
                    <div className="row">
                        {Stats.map((item)=>(
                            <StatCard key={item.id} number={item.number} label={item.label}/>
                        ))}
                    </div>
                </div>
            </section>


            <section className="package py-5 fw-bold align-items-center bg-secondary">
               <div className="container text-center">
                <h2 className="fw-bold mb-4">Popular Packages</h2>


                <div className="row">
                    {Packages.map((item)=>(
                        <PackageCard key={item.id} name={item.name} price={item.price} img={item.img}/>
                    ))}
                </div>
               </div>
   
            </section>



























        </>
    )
}

export default Home;