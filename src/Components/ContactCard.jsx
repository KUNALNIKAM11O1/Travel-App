function ContactCard({ico,hea,lin1,lin2}){
    return(
        <>
        <div className="col-md-4 col-12 mb-4">
            <div className="d-flex">
                <div className="col-4">
                    <img src={ico} alt={hea} style={{width:"30px",marginLeft:"40px"}} />
                </div>
                <div className="col-8">
                    <h3>{hea}</h3>
                    <h5>{lin1}</h5>
                    <h5>{lin2}</h5>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default ContactCard