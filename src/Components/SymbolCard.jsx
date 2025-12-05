function SymbolCard({img,nam}){
    return(
        <>
        <div className="col-12 col-sm-6 col-md-2">
            <img src={img} alt={nam} className="symbol" style={{height:"80%",width:"80%",objectFit:"cover"}} />
            <h4 className="mb-2 text-center">{nam}</h4>
        </div>
        
        
        </>
    )
}

export default SymbolCard