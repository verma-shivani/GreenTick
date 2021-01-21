import React from "react";


const ProgressBar = (props) => {
  const {bgcolor, completed,subtopics } = props;
  

 

  const containerStyles = {
    
    height: '18%',
    width: '85%',
    backgroundColor:"#e0e0de", /*"#e0e0de",*/
    borderRadius: 0,
    margin: '4%',
    textAlign: 'left',
    
    position: 'absolute',
    left: '3%',/*"0.1 rem",*/
    right: '0%',
    top: '26%',
    bottom: '0%',
    
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 0,
    textAlign: 'right',
    
    
  }
  
  const fillerText={
    padding: '0.5%',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'relative',
    left:'85%',
    /*right: 0,*/
    top: '-100%',
    fontSize:'2.0vh'
    
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  
  const subTitles={
    /*padding: '1%',*/
    color: 'black',
    margin: 5,
    position: 'absolute',
    left: '1%',
    right: 0,
    top: '115%',
    fontSize:'2.3vh'
    	
    
  }

  return (
  
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
       <span style={fillerText}>{`${100-completed}%`}</span>
      <span style={subTitles}>{`${subtopics} Completed`}</span>
      
    </div>
  );
};

export default ProgressBar;
