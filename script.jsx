const Title = ()=>{

    const titleStyle = {
        // color: 'blue',
        fontSize: '40px',
        
      };

    return(
        <h2 className="title" style={titleStyle}>Topics covered</h2>
    );
};

const Para = ()=>{
    return(
        <p>The following is a list of all the topics we cover in the MDN learning area.</p>
    );
};

const Link1 = ()=>{
    return(
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">Getting started with the web</a>
    )
}

const Para1 = ()=>{

    const paragraph3 = {
        marginLeft: '10px'
    }
    
    return(
        <p className="para3" style={paragraph3}>
            Provides a practical introduction to web development for complete beginners.
        </p>
    )
}

const Link2 = ()=>{
    return(
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML — Structuring the web</a>
    )
}

const Para2 = ()=>{

    const paragraph3 = {
        marginLeft: '10px'
    }
    return(
        <p className="para3" style={paragraph3}>
           HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
        </p>
    )
}

const Link3 = ()=>{
    return(
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS — Styling the web</a>
    )
}

const Para3 = ()=>{
    const paragraph3 = {
        marginLeft: '10px'
    }
    return(
        <p className="para3" style={paragraph3}>
          CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
        </p>
    )
}




const MainContainer = () =>{

    const containerStyle = {
        width: '45%', // Set width to 80% of the parent container
        height: '400px', // Set height to 400px
        margin: '30px auto', // Center the container horizontally
        textAlign: 'left', // Center content within container
        border: '1px solid #ccc', // Optional border for visualization
        padding: '20px' ,
        // fontFamily: 'Courier New, Courier, monospace' ,
      };
    
    return(
       <div className="Main-container" style={containerStyle}>
        <Title/>
        <Para/>
        <Link1/>
        <Para1/>
        <Link2/>
        <Para2/>
        <Link3/>
        <Para3/>

       </div>
    );
};
   
ReactDOM.render(<MainContainer/>,document.querySelector("#root"));

