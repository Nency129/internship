import React from 'react'

function Footer() {
  return (
    <div class="container text-center mt-5">
        <div class="row">
            <div class="col">
            <i class="fa fa-long-arrow-left float-start mt-1" aria-hidden="true" ></i>
                <span class="float-start">Back</span>
            </div>
            <div class="col">
                <button type="button" class="btn btn-outline-success rounded-pill mx-2 float-end" onClick={()=>{alert("You are on the Payment page")}} >PROCEED TO PAYMENT</button>
                <button type="button" class="btn btn-outline-success rounded-pill mx-2 float-end" onClick={()=>{alert("You want to continue Shopping")}} >CONTINUE SHOPPING</button>
            </div>
        </div>
    </div>
  )
}

export default Footer