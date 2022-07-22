import React from 'react'
import PAYPAL from './photos/PAYPAL.jpg';
import v from './photos/visa.jpg';
import m1 from './photos/mastercard.jpg';
import m2 from './photos/mastro.jpg';
import i from './photos/ideal.jpg';
import ip from './photos/inpost-logo.jpg'
import d1 from './photos/DPD.jpg';
import d2 from './photos/dhl.jpg';
import { ReactDOM } from 'react';
function Method() {
  return (
        <>
        <span class="float-start ms-5">Payment method</span>
            <div class="mb-4 mt-4">
            <div >
                <button type="button" class="btn btn-light rounded-pill  mx-2 my-2">
                    <a href='https://www.paypal.com/in/signin' target={'_blank'}><img src={PAYPAL} width={70}/></a>
                </button>
                <button type="button" class="btn btn-light rounded-pill  mx-2 my-2">
                    <a href='https://www.visa.co.in/' target={'_blank'}><img src={v} width={70}/></a>
                </button>
                <button type="button" class="btn btn-light rounded-pill  mx-2 my-2">
                    <a href='https://www.mastercard.com/global/en.html' target={'_blank'}><img src={m1} width={70} /></a>
                </button>
            </div>
            <div >
                <button type="button" class="btn btn-light rounded-pill  mx-2 my-2">
                    <a href='https://quickpay.net/payment-methods/maestro/'><img src={m2} width={70} /></a>
                </button>
                <button type="button" class="btn btn-light rounded-pill  mx-2 my-2">
                    <a href='https://www.discover.com/'><img src='https://th.bing.com/th/id/R.9b35f4fabb714f64e3d6ce5e367c5772?rik=afXyuQxvmJIKPg&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f07%2fPNGPIX-COM-Discover-Logo-PNG-Transparent.png&ehk=odo%2bigfT0vZsAp9Hz7d4%2foTFt4iHEO5X%2fHF1maPAmCU%3d&risl=&pid=ImgRaw&r=0' width={90} /></a>
                </button>
                <button type="button" class="btn btn-light rounded-pill mx-2 my-2">
                    <a href='https://www.ideal.nl/en/'><img src={i} width={70} /></a>
                </button>
            </div>    
        </div>
        <span class="float-start ms-5">Delivery method</span>
        <div class="mt-5">
            <div >
                <button type="button" class="btn btn-light rounded-pill mx-2 my-2">
                    <img src={ip} width={70} /><span className='ms-3'>$20.00</span>
                </button>
                <button type="button" class="btn btn-light rounded-pill mx-2 my-2">
                    <img src={d1} width={75} /><span className='ms-3'>$12.00</span>
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-light rounded-pill mx-2 my-2">
                    <img src={d2} width={70} /><span className='ms-3'>$15.00</span>
                </button>
                <button type="button" class="btn btn-light rounded-pill mx-2 my-2">
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d747114f-d4d0-4093-8ac9-c30bbcfb9983/da55dfr-7a2a61fc-9583-44cc-b724-fc2468b317df.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3NDcxMTRmLWQ0ZDAtNDA5My04YWM5LWMzMGJiY2ZiOTk4M1wvZGE1NWRmci03YTJhNjFmYy05NTgzLTQ0Y2MtYjcyNC1mYzI0NjhiMzE3ZGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ldvxZxpQtRSfh2X5mFnE1JV22Q1W0JTA7JZZhvpAjRE' width={75} />
                    <span className='ms-3'>$10.00</span>
                </button>
            </div>
        </div>
        </>
        )
        }

export default Method