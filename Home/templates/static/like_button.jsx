const e = <h1> HEY WORLD :))))</h1>;
console.log(e);
ReactDOM.render(e, document.getElementById('#game'))
// React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
// const domContainer = document.querySelector('#game');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));