import React from 'react'

function Header() {
  return (
    <>
    <div class="container-fluid mt-3 mb-4 ">
        <div class="row mt-2">
            <div class="col-md-auto ms-2" >
                <img src='https://th.bing.com/th/id/OIP.TLg0T-YD39Zr5dOGIrqh-QHaHH?pid=ImgDet&rs=1' width={20}/>
                <span  class="ms-1" style={{color:'yellow'}}>E-</span>
                <span>Shop</span>
            </div>
            <div class="col">
                <span class="mx-4">Men</span>
                <span class="mx-4">Womens</span>
                <span class="mx-4">Kids</span>
            </div>
            <div class="col-md-auto me-3">
                <i class="fa fa-search mx-3" ></i>
                <i class="fa fa-shopping-cart mx-3"></i>
                <i class="fa fa-user-o mx-3" ></i>
            </div>
        </div>
        
        
    </div>
    
    </>
   
  )
}

export default Header