import React from 'react'

const Translationinput = (props) => {
    return (
        <div>
            <div className="container">
            <form onSubmit={props.submitText}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input name = "text"
     type="text" 
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     onChange={props.editText}
     />
  </div>
  <button 
  type="submit" 
  className="btn btn-primary"
  id="button" >Submit</button>
</form>
            </div>
        </div>
    )
}

export default Translationinput
