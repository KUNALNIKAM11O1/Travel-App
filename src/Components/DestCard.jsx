function DestCard({name,img}){
     
    return(
        <>
  

   <style>
 {`
          .prt-ron {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }

          .prt-ron:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(12, 119, 219,  2);
          }

          .prt-img {
            transition: transform 0.3s ease;
            width:80%;
            
           
          }
            

          .prt-ron:hover .prt-img {
            transform: scale(1.02);
          }
        `}
</style>


        <div className="col-md-4 mb-3 overflow-hidden">
            <div className="ron prt-ron">
                <img src={img} className="ron-img-top prt-img" alt="img" style={{overflow:"hidden",borderRadius:"5px"}} />
                <div className="ron-body">
                    <h4><i>{name}</i></h4>
                </div>
                
            </div>
        </div>
        
        
        
        
        
        
        </>
    )






}

export default DestCard