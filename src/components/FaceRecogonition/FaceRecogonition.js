import React from 'react';
import './FaceRecogonition.css';

const FaceRecogonition = ({imageUrl, box}) => {
	return (
		<div className='ma myCenter'> 
			<div className='absolute mt2 '>
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='boundingBox' 
				style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
				</div>
			</div>
		</div>
	);
}

export default FaceRecogonition;