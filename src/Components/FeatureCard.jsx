 function FeatureCard({title,desc}) {
    return(
        <>

        <div className="col-md-4 mb-3">
            <div className="p-4 border rounded text-center">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
        
        </>
    )
 }

 export default FeatureCard;