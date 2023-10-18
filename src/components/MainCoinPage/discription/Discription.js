import React, {useState} from 'react';
import './discription.css'

const Description = ({ data, changeTheme }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
  if (!data || !data.desc) {
    return null;
  }
  const shortDesc = data.desc.slice(0, 200);

  // Check if data.desc is defined before using slice
  const fullDesc = data.desc ? data.desc : '';

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionToShow = showFullDescription ? fullDesc : shortDesc;

  return (
    <div style={{backgroundColor, color:textColor}} className='discription_titles'>
     <h2 style={{color:textColor}} className='discription_h'>{data.name}</h2>
     <div>
        <span style={{color:textColor}} className='discription_desc' dangerouslySetInnerHTML={{ __html: descriptionToShow }} />
        {' '}
        <span className='change_reading' onClick={toggleDescription}>
              ....{showFullDescription ? 'Read Less' : 'Read More'}
        </span>
     </div>
      
    </div>
  );
};

export default Description;
