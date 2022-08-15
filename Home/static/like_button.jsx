
// console.log(e);
// ReactDOM.render(e, document.getElementById('game'))

class AboutMe extends React.Component{

    state = {
        count: 0,
        game:false};
    
    render() {
        if (this.state.game ==="khalid"){
            return (<h4> Your name is khalid. You worked on Uber for the past three days.</h4>);
        }
        if (this.state.game ==="azza"){
            return (<h4> Your name is azza. Your favorite website is facebook.</h4>);
        }
        if (this.state.game ==="hazem"){
            return (<h4> u r hazem and u gay boi. go pray u bum</h4>);
        }
        if (this.state.game ==="ahmed"){
            return (<h4> u r ahmed and u cool af</h4>);
        }

        return (
            <React.Fragment>
            <div>
                <span>{this.state.count}</span>
                <button onClick={()=> this.setState({game:"khalid"}) }> I first started coding in Java </button>
                <button onClick={()=> this.setState({game:"azza"}) }> My favorite programing language is python </button>
                <button onClick={()=> this.setState({game:"hazem"}) }> I'm most skilled in C/C++ </button>
            </div>
            <div>
                <span>{this.state.count}</span>
                <button onClick={()=> this.setState({game:"ahmed"}) }> My favorite data structure is a dictionary/hashmap </button>
                <button onClick={()=> this.setState({game:true}) }> My favorite backend framework is Flask </button>
                <button onClick={()=> this.setState({game:true}) }> My favorite frontend framework is React </button>
            </div>
            </React.Fragment>
        );
    }

    // isOn(){
    //     const {game} = this.state.game;
    //     this.setState({game:true});
    // }
}

ReactDOM.render( <AboutMe/>,document.getElementById("game"))