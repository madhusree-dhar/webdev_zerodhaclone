import React from 'react';
function Education() {
    return (
      <div className='container p-3'>
        <div className='row p-3'>
            <div className='col-6 p-3'>
              <img src='media/images/index-education.svg' width={"75%"}/>
            </div>
            <div className='col-6'>
                <h1 className='fs-3 mb-3'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
      );
}

export default Education;