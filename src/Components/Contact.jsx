import Cont from "./Cont";
import ContactCard from "./ContactCard";


const Contact=()=>{
    return(
        <>

      
        <section className="contact d-flex align-items-center text-dark" style={{backgroundImage:"url('europe.jpg')",backgroundSize:"cover",backgroundPosition:"center",height:"50vh"}} >
           
           
        </section>
        <section className="py-5">
            
            <div className="container text-center">
               <div className="row">
                {Cont.map((item)=>(
                    <ContactCard key={item.id} ico={item.ico} hea={item.hea} lin1={item.lin1} lin2={item.lin2}/>
                ))}
               </div>
            </div>
        </section>
        <section className="py-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.739033665608!2d73.80770317601454!3d18.49547638259318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc438065285%3A0x1fba0b79b72de79b!2sDurga%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1764938511461!5m2!1sen!2sin" 
            style={{width:"100%",height:"400px"}} allowFullScreen=""loading="lazy" title="Google Map">
            
            </iframe>
        </section>
        <section className="py-5  " style={{backgroundColor:"cadetblue"}}>
            
            <div class="container py-5 ">
  <div class="form-container  p-4 mx-auto shadow rounded " style={{ maxwidth: "600px"}}>
    <h1 class="text-center text-dark mb-3">Get in Touch</h1>
  

    <form>
      <div class="row g-3">

       
        <div class="col-12">
          <input
            type="text"
            class="form-control"
            placeholder="Full Name"
            required
          />
        </div>

       
        <div class="col-md-6 col-12">
          <input
            type="tel"
            class="form-control"
            placeholder="Phone Number"
            required
          />
        </div>
       
        <div class="col-md-6 col-12">
          <input
            type="email"
            class="form-control"
            placeholder="Mail ID"
            required
          />
        </div>

       
        <div class="col-12">
          <select class="form-select" required>
            <option value="">Select Office Location</option>
            <option value="mumbai">Mumbai,Maharashtra</option>
            <option value="jaipur">Jaipur, Rajasthan</option>
            <option value="noida">Noida, Delhi</option>
            <option value="jabalpur">Jabalpur, MP</option>
             <option value="ooty">Ooty, TN</option>
            <option value="pune">Pune,Maharashtra</option>
          </select>
        </div>
       
        <div class="col-12">
          <input
            type="text"
            class="form-control"
            placeholder="Type Your Feedback"
            required
          />
        </div>
       
        <div class="col-12 d-flex justify-content-between mt-3">
          <button type="submit" class="btn btn-success px-4">Submit</button>
          <button type="reset" class="btn btn-danger px-4">Reset</button>
        </div>

      </div>
    </form>
  </div>
</div>
            
        </section>

        </>
    )
}

export default Contact;




