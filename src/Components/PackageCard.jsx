

function PackageCard({ name, price, img }) {
  return (

    <>
      <style>
 {`
          .pkg-card {
            transition: transform 0.3s ease, box-shadow 0.5s ease;
            cursor: pointer;
          }

          .pkg-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.8);
          }

          .pkg-img {
            transition: transform 0.5s ease;
          }

          .pkg-card:hover .pkg-img {
            transform: scale(1.15);
          }
        `}
</style>




    <div className="col-md-4 mb-3">
      <div className="card pkg-card" style={{overflow:"hidden",borderRadius:"10px"}}>
        <img src={img} className="card-img-top pkg-img" style={{height:"300px",objectFit:"cover"}} alt={name} />

        <div className="card-body text-center">
          <h5>{name}</h5>
          <p>{price}</p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>

    </>
  );
}

export default PackageCard;