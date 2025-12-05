function AdventureCard({icon,main,para}){
    return(

        <>
        
        <div className="col-md-4">
            <div className="p-4 rounded text-center">
               <img src={icon} alt="" />
                <h3>{main}</h3>
                <p>{para}</p>
            </div>
        </div>
        
        
        </>
    )

}

export default AdventureCard