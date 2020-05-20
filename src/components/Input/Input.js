import React from 'react';
import './Input.css';

const Input = ({onInputChange, onSubmitButton}) => {
	return (
		<div >
		<p className='serif f3'>This magic brain will detect faces in your picture. Give it a try. </p>
  		<form className="myBack mw7 center pa4 br2-ns ba b--black-10 shadow-2">
    	<fieldset className="cf bn ma0 pa0">
      	<div className="cf">
        <input className="f6 f5-l input-reset bn fl black-80 bg-white 
        		pa3 lh-solidw-100 w-75-m w-80-l br2-ns br--left-ns" 
        		placeholder="Image Url" type="text" name="link" onChange={onInputChange}/>
        <input className="w-30 f3 link ph3 pv2 dib white bg-black-70 hover-bg-black
        		pointer w-100 w-25-m w-20-l br2-ns bg-animate tc fl" 
        		type="button" value="Detect" onClick={onSubmitButton}/>
	      </div>
	    </fieldset>
	  </form>
	</div>
	);
}

export default Input;
/*      f6 f5-l fl pv3 tc bn bg-animate 
        bg-black-70 hover-bg-black white pointer w-100 w-25-m 
        w-20-l br2-ns br--right-ns   */