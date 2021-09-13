import React from 'react';

import Loading from './Loading';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          allMemeImgs: data.data.memes
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const randNum = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    const randomMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randomMemeImg });
    event.preventDefault();
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <section className="container">
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
              autoComplete="false"
            />

            <input
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
              autoComplete="false"
            />

            <button>Generate</button>
          </form>

          <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </section>
      );
    }
  }
}

export default MemeGenerator;
