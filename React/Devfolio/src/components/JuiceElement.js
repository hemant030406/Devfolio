import React from 'react'

export default function JuiceElement(props) {
  return (
    <div className='container d-flex justify-content-center align-items-center mx-5'>
    <div className='row'>
        <div className='col-md-4 my-4' >
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{ width: '18rem', height: '12rem' }} />
                <div className="card-body" style={{backgroundColor:'rgb(175 173 74)'}}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
