import AdventureCard from "./AdventureCard"
import Adventure from "./Adventure"

const About=()=>{
    return(
      
        <>

        <style>

        {`
           
          .pcg-img {
            transition: transform 0.4s ease;
          }

          
          .pcg-card:hover .pcg-img {
            transform: scale(1.05);
          }


        `}



        </style>


        <section className="about d-flex align-items-center text-dark" style={{backgroundImage:"url('about.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"70vh"}} >
           
            <div className="container text-center">
                <h1 className="display-4 fw-bold">About</h1>
            </div>
        </section>

        <section className="py-5 " >
            <div className="container text-center">
                <h2 className="fw-bold">Redefining Travel,</h2>
                 <h2 className="fw-bold mb-4">One Adventure at a Time</h2>
                 <p className="fs-4">Born from a love of exploration and discovery, we've spent the last decade turning wanderlust into life-changing experiences for adventurous souls around the globe.</p>
            </div>
        </section>

        <section className="py-5 " style={{backgroundColor:"burlywood"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-md-0 pcg-card ">
                        <img src="beach.png" alt="beach" className="img-fluid rounded shadow-lg pcg-img" style={{objectFit:"cover",width:"100%",height:"400px"}} />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mb-4 text-primary">Where Passion Meets Purpose</h2>
                        <p className="fs-5 mb-4 fw-bold">What started as weekend camping trips among college friends has evolved into a global network of travel enthusiasts dedicated to creating extraordinary journeys. We believe travel isn't just about seeing new places  it's about connecting with cultures, supporting communities, and discovering parts of yourself you never knew existed.</p>
                        <p className="fs-5 fw-bold">Every expedition we craft is infused with respect for local traditions and a commitment to leaving places better than we found them. Our team of cultural ambassadors and adventure specialists work hand-in-hand with indigenous guides to offer you authentic experiences that most tourists never see.</p>
                    </div>
                </div>
            </div>
        </section>

       

        <section className="py-5">
            <div className="container text-center">
                 <h2 className="fw-bold">What Makes Us Different</h2>
            <h4 className="fw-light mb-4">Six pillars that define every adventure we create</h4>

            <div className="row">

                {Adventure.map((item)=>(
                    <AdventureCard   key={item.id}  icon={item.icon}  main={item.main}   para={item.para}        />
                ))}
            </div>
            </div>
        </section>

<section className="milestones py-5">
  <div className="container text-center">
    <h1 className="fw-bold">Milestones in Our Adventure</h1>
    <h4 className="fw-light mb-5">Key moments that shaped who we are today</h4>

   
    <div className="row align-items-center mb-5">
      <div className="col-md-5 text-md-end text-center">
        <h3>The Beginning</h3>
        <p>
          Three university friends turned their passion for exploration into a
          mission to share hidden wonders with fellow adventurers across the continent.
        </p>
      </div>

      <div className="col-md-2 d-flex justify-content-center">
        <div
          className="bg-info text-light d-flex justify-content-center align-items-center"
          style={{
            height: "110px",
            width: "110px",
            borderRadius: "70px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          2014
        </div>
      </div>

      <div className="col-md-5"></div>
    </div>

   
    <div className="row align-items-center mb-5">
      <div className="col-md-5"></div>

      <div className="col-md-2 d-flex justify-content-center">
        <div
          className="bg-info text-light d-flex justify-content-center align-items-center"
          style={{
            height: "110px",
            width: "110px",
            borderRadius: "70px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          2017
        </div>
      </div>

      <div className="col-md-5 text-md-start text-center">
        <h3>Global Expansion</h3>
        <p>
          Established partnerships with local guides in Southeast Asia and South
          America, bringing our authentic travel philosophy to new continents.
        </p>
      </div>
    </div>

    
    <div className="row align-items-center mb-5">
      <div className="col-md-5 text-md-end text-center">
        <h3>Community Impact</h3>
        <p>
          Launched our sustainable tourism initiative, supporting over 200 local
          families through employment and fair trade partnerships.
        </p>
      </div>

      <div className="col-md-2 d-flex justify-content-center">
        <div
          className="bg-info text-light d-flex justify-content-center align-items-center"
          style={{
            height: "110px",
            width: "110px",
            borderRadius: "70px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          2020
        </div>
      </div>

      <div className="col-md-5"></div>
    </div>
  </div>
</section>
      
        </>
    )
}

export default About