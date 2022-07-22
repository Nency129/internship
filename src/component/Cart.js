import React from 'react'

function Cart() {
  return (
    <>
        <div>
            <span class="float-start ms-3">Your cart</span><br/>
            <div class="container mt-3">
                <div class="row mb-3">
                    <div class="col-md-auto">
                    <button type='button' class="btn btn-light rounded-pill"><img src='https://cdnc.lystit.com/photos/8c6b-2015/06/22/another-influence-white-longline-plain-t-shirt-product-0-236994181-normal.jpeg' width={40} /></button></div>
                    <div class="col-md-auto">
                    <p>T-Shirt<br/><span class="ps-5">Summer Vibes</span> <br/><small>#261311</small></p></div>
                    <div class="col">$89.99</div>
                </div>
            
            <div class="mb-2 row mb-3">
                <div class="col-md-auto">
                    <button type='button' class="btn btn-light rounded-pill me-4"><img src='https://th.bing.com/th/id/OIP.RwGwJz5CQ98V9uOtrBOscAAAAA?pid=ImgDet&w=310&h=465&rs=1'  width={40}/></button></div>
                <div class="col-md-auto">
                    <p className='ps-2'>Basic Slim <br/><span className='ps-3'>Fit T-Shirt</span><br/><small>#212315</small></p></div>
                <div class="col ms-4">$69.99</div>
            </div>
            <div >
                <button type="button" class="btn btn-secondary rounded-pill px-3"><span class="me-5">Total cost</span><span class="ms-5">$159,91</span></button>
            </div>
            <div class="mt-4">
                <i class="fa fa-truck" aria-hidden="true"></i>
                <small class="ms-2 ">You are $30,02 away<br/>from free shipping!</small>
            </div>
            </div>
        </div>
    </>
  )
}


export default Cart