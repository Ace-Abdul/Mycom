
// console.log(e);
// ReactDOM.render(e, document.getElementById('game'))

class AboutMe extends React.Component{

    state = {
        ready: false,
        lie_1:false,
        lie_2:false,
        lie_3:false,
        lie_4:false,
        lie_5:false,
        next: false,
        reason_1: "I started coding in Python. You can imagine how frustrating learning Java was — couldn't accept variable declaration for a day or two 😭",
        reason_2: "Flask is minimalistic and cool, but Django all day everyday",
        reason_3: "Working with TerraVision taught me a lot about databases, but I'm more in awe at what I accomplished in Code+ especially with no prior experience 💪",
        reason_4: "I was BORN outside the states 💀",
        reason_5: "Wow! Surprised you figured this one. Fridays are relaxing and fun, but weekends peak on Saturdays 👊",
    };
    
    render() {
        const correct_1 = ( <React.Fragment> 
                        <h4> Bingo!</h4>
                        <p> {this.state.reason_1}</p>
                        <button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({next:true}) }> next </button>
                        </React.Fragment>);
        const correct_2 = ( <React.Fragment> 
                        <h4> Bingo!</h4>
                        <p> Flask is minimalistic and cool, but Django all day everyday</p>
                        <button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({next:true}) }> next </button>
                        </React.Fragment>);
        
        const correct_3 = ( <React.Fragment> 
                        <h4> Bingo!</h4>
                        <p> Working with TerraVision taught me a lot about databases, but when looking back I'm more in awe at what I accomplished
                        in Code+ especially with no prior experience 💪 </p>
                        <button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({next:true}) }> next </button>
                        </React.Fragment>);

        const correct_4 = ( <React.Fragment> 
                        <h4> Bingo!</h4>
                        <p> I was BORN outside the states 💀</p>
                        <button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({next:true}) }> next </button>
                        </React.Fragment>);

        const correct_5 = ( <React.Fragment> 
                        <h4> Bingo!</h4>
                        <p> Wow! Surprised you figured this one. Fridays are relaxing and fun, 
                        but weekends peak on Saturdays 👊</p>
                        <button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({next:true}) }> next </button>
                        </React.Fragment>);

        const wrong = ( <React.Fragment> 
                        <h4> Bad Detective!</h4>
                        <button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({ready:true, lie_1:false,lie_2:false,lie_3:false,lie_4:false,lie_5:false, next: false}) }> Restart </button>
                        </React.Fragment>);

        const sent_1 = (  <React.Fragment>
                        <div>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_1:true,  next:false}) }> I first started coding in Java </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_1:false, ready:false, next:true}) }> My favorite programing language is python </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_1:false, ready:false, next:true}) }> I'm most skilled in C/C++ </button>
                        </div>
                    </React.Fragment>);
        
        const sent_2 = (<React.Fragment>
                        <div>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_2:false, ready:false, next:true}) }> My favorite data structure is an array </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_2:false, ready:false, next:true}) }> React>Vue>Angular </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_2:true, next:false}) }> My favorite backend framework is Flask </button>
                        </div>
                        </React.Fragment>);

        const sent_3 = (<React.Fragment>
                        <div>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_3:false, ready:false, next:true}) }> My favorite project was building a cpu in Logism </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_3:true, next:false}) }> My favorite job opportunity was with TerraVision </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_3:false, ready:false, next:true}) }> I hate MIPs </button>
                        </div>
                        </React.Fragment>);
        
        const sent_4 = (<React.Fragment>
                        <div>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_4:true, next:false}) }> Never been outisde the states </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_4:false, ready:false, next:true}) }> Winter is my favorite season </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_4:false, ready:false, next:true}) }> My favorite sport is football </button>
                        </div>
                        </React.Fragment>);

        const sent_5 = (<React.Fragment>
                        <div>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_5:true, next:false}) }> Friday is my favorite day of the week </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_5:false, ready:false, next:true}) }> I'm a first generation student </button>
                            <button className="btn btn-outline-info" onClick={()=> this.setState({lie_5:false, ready:false, next:true}) }> I've been growing my hair for a year in this picture </button>
                        </div>
                        </React.Fragment>);

        if (this.state.ready){
            if (this.state.lie_5){
                return ((this.state.next) ?  sent_5:correct_5);
            }
            if (this.state.lie_4){
                return ((this.state.next) ?  sent_5:correct_4);
            }
            if (this.state.lie_3){
                return ((this.state.next) ?  sent_4:correct_3);
            }
            if (this.state.lie_2){
                return ((this.state.next) ?  sent_3:correct_2);
            }
            
            if (this.state.lie_1){
                return ((this.state.next) ?  sent_2:correct_1);
            }
            
            
            return (sent_1);
        }
        
        if(this.state.next && !this.state.ready){return wrong;}


        return(<button style={{marginLeft:"50%"}} className = "btn btn-success" onClick={()=> this.setState({ready:true}) }>Game on!</button>);
    }
}

ReactDOM.render( <AboutMe/>,document.getElementById("game"))