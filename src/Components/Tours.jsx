import FeaTour from "./FeaTour";
import TourCard from "./TourCard";
import Symbol from "./Symbol";
import SymbolCard from "./SymbolCard";



const Tours=()=>{
    return(
        <>

         <section className="about d-flex align-items-center text-dark" style={{backgroundImage:"url('about.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"70vh"}} >
           
            <div className="container text-center">
                <h1 className="display-4 fw-bold">Tours</h1>
               
            </div>
        </section>
         <section className="py-5">
            <div className="container text-center">
                <h2 className="text-primary">Find Your Perfect Tour</h2>
                <p className="fs-5">Discover unforgettable travel experiences with our curated collection of tours. Explore by destination, travel style, or date to find the adventure that's perfect for you.</p>
            </div>
        </section>
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                   
                    <div className="col-12 col-sm-6 col-md-3 mb-3 justify-content-center ">
                        <select required className="fs-4">
                            <option value="">Destination</option>
                            <option value="rome">Rome</option>
                            <option value="greece">Greece</option>
                             <option value="solvenia">Solvenia</option>
                            <option value="ecuador">Ecuador</option>
                            
                        </select>
                        
                        
                    </div>
                     <div className="col-12 col-sm-6 col-md-3 mb-3 justify-content-center">
                        <select required  className="fs-4">
                            <option value="">Tour Type</option>
                            <option value="adv">Adventure</option>
                            <option value="fam">Family</option>
                             <option value="lux">Luxury</option>
                            <option value="cul">Cultural</option>
                            
                        </select>
                        
                        
                    </div>
                     <div className="col-12 col-sm-6 col-md-3 mb-3 justify-content-center">
                        <select required  className="fs-4">
                            <option value="">Duration</option>
                            <option value="one">1-3 Days</option>
                            <option value="four">4-7 Days</option>
                             <option value="eight">8-14 Days</option>
                            <option value="fifteen">15+ Days</option>
                            
                        </select>
                        
                        
                    </div>
                     <div className="col-12 col-sm-6 col-md-3 mb-3 justify-content-center ">
                        <select required  className="fs-4">
                            <option value="">Price Range</option>
                            <option value="zero">$0-$500</option>
                            <option value="five">$500-$1000</option>
                             <option value="two">$1000-$2000</option>
                            <option value="three">$2000+</option>
                            
                        </select>
                        
                        
                    </div>
                  
                </div>
            </div>
        </section>
        <section className="py-5 bg-secondary ">
            <div className="container ">
                <h2 className="fw-bold">Featured Tours</h2>
                <div className="row">
                    {FeaTour.map((item)=>(
                        <TourCard  key={item.id} img={item.img} titl={item.titl} par={item.par} days={item.days}/>
                    ))}
                </div>
            </div>
        </section>
        <section className="py-5 ">
            <div className="container">
                <h2>Browse by Category</h2>
                <div className="row">
                    {Symbol.map((item)=>(
                        <SymbolCard key={item.id} img={item.img} nam={item.nam}/>
                    ))}
                </div>
            </div>
        </section>
       
        </>
    )
}

export default Tours;