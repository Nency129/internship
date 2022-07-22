import React from 'react'

function Header1() {
  return (
    <>
    <div className='container mt-4 mb-3'>
    <div class="float-start ms-3 mt-3 text-left">Shipping and payment</div>
    <div class="float-end me-3 ">
        <button type="button" class="btn btn-outline-success rounded-pill  mx-2 my-2" >
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-outline-success rounded-pill  mx-1 my-1">
            <i class="fa fa-truck" aria-hidden="true"></i>
        </button>
    </div>

    </div>
    
    </>
  )
}

export default Header1