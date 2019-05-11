import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let demotivationalPosters = {
    image: "https://res.cloudinary.com/dibjkdnch/image/upload/v1557550822/rocket.jpg",
    title: "potential",
    text: "Not Every One Gets To Be An Astronaut When They Grow Up."
}

function Poster({poster}) {
    return(
        <div>
            <div className="poster-div">
            <div className="poster-image"> <Image image={poster.image}/> </div>
            <div className="title-name"> <Title title={poster.title}/></div>
            <div className='title-text'> <Text text={poster.text}/> </div>
            </div>
        </div>
    )
}

let Text = ({text}) => {
    return(
        <div>
           <p> {text} </p>
        </div>
    )
}

let Title = ({title}) => {
    return(
        <div>
            <h1>{title.toUpperCase()}</h1>
        </div>    
    )
}

let Image = ({image}) => {
    return(
        <div>
           <img src={image} alt="Rocket"/>
        </div>
    )
}


ReactDOM.render(<Poster poster={demotivationalPosters}/>,document.querySelector('#root'))