import React from 'react'

const Login = () => {
  return (
    <>
    <div >
      <div class="my-1 mb-2 ms-5 ps-4 position-absolute   translate-middle">
        <button type="button" class="btn btn-outline-success rounded-pill mx-3 mb-3" onClick={()=>{alert(" Login page is alredy on display ")}}>Login</button>
        <button type="button" class="btn btn-outline-success rounded-pill mx-3 mb-3" onClick={()=>{alert(" Alredy have an account ")}}>Sign in</button>
          <div >Shipping information</div>
      </div>


      <br/>
      <div className='mt-5 '>
          <form>
            <div class="mt-5 text-center ">
              <div class="row my-4 ">
                <div class="col">
                <input class="form-control rounded-pill" type="text" placeholder="Email" aria-label="default input example"/></div>
               
                <div class="col">
                <input class="form-control rounded-pill" type="text" placeholder="Address" aria-label="default input example"/></div>
              </div>
              <div class="row my-4">
                <div class="col">
                <input class="form-control rounded-pill" type="text" placeholder="Firstname" aria-label="default input example"/></div>
                <div class="col">
                <input class="form-control rounded-pill" type="text" placeholder="City" aria-label="default input example"/></div>
              </div>
              <div class="row my-4">
                <div class="col">
                <input class="form-control rounded-pill" type="text" placeholder="Lastname" aria-label="default input example"/></div>
                <div class="col">
                <input class="form-control rounded-pill" type="text" placeholder="Postal code/ZIP" aria-label="default input example"/>
                </div>
              </div> 
              <div class="row my-4">
              <div class="col">
               <input class="form-control rounded-pill" type="text" placeholder="phone number" aria-label="default input example"/></div>
               <div class="col">
                <select class="form-select rounded-pill" aria-label="Default select example">
                    <option selected>poland</option>
                    <option value="1">India</option>
                    <option value="2">England</option>
                    <option value="3">China</option>
                </select>
                </div>
              </div> 
                
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default Login