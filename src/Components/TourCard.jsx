function TourCard({img,titl,par,days}){
    return(
       
        <>

           <style>
 {`
          .pmt-card {
            transition: transform 0.3s ease, box-shadow 0.5s ease;
            cursor: pointer;
          }

          .pmt-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.8);
          }

          .pmt-img {
            transition: transform 0.5s ease;
          }

          .pmt-card:hover .pmt-img {
            transform: scale(1.15);
          }
        `}
</style>

        
        <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 pmt-card" style={{overflow:"hidden",borderRadius:"10px",border:"1px solid white"}}>
                <img src={img} alt={titl} className="card-img-top pmt-img" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                <div className="card-body">
                    <h4 className="card-title">{titl}</h4>
                    <p className="card-text">{par}</p>
                    <h5>{days}</h5>
                   <button className="btn btn-success mb-2">Book Now</button>
                </div>
            </div>
        </div>

        
        </>


    )
}
export default TourCard