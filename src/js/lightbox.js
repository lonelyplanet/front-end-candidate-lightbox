class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
	  this.props.openbtn || this.showLightbox({keyboard: true});
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnMount() {
    this.props.openbtn;
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  showLightbox() {
    this.setState({ display: 'block' });
    document.body.classList.add('lightbox-open');
  }

  hideLightbox() {
    this.setState({ display: 'none' });
    document.body.classList.remove('lightbox-open');
  }

  handleKeyDown(e) {
    if (e.keyCode == 27) {
      this.hideLightbox();
    }
  }

  closeOnBackground(e) {
    if( e.target.className == 'lightbox') {
      this.hideLightbox();
    }
  }

  render() {
	var button;
	if (this.props.openbtn) { 
    var button = <button className='lightbox-open-btn' onClick={(e) => this.showLightbox(e)}>{this.props.opentext || 'Open Lightbox'}</button>;
    }
    return (
      <span>
		    {button}
        <div className="lightbox" style={this.state} onClick={(e) => this.closeOnBackground(e)} >
          <span className="lightbox-close" onClick={(e) => this.hideLightbox(e)}></span>
			    {this.props.content}
        </div>
      </span>
    );
  }
}

var democontent = <div className='content'><h1>Lightbox Demo using React</h1><p>I wanted to demonstrate to your team that I have a passion for learning new things. In my interview we talked about how your team was rebuilding parts of the site in React. We discussed how I hadn't done much yet because I work with other backend developers who take more lead on the JS front. However, I wanted to show you that I am up for the challenge and I want to grow and expand my JS knowledge.</p><p>Main Tools Used</p><ul><li>React</li><li>Babelify</li><li>Gulp</li><li>Autoprefixer</li><li>Nunjucks</li><li>SASS</li></ul><p>Thank you so much for your time and I hope you like what you see. I would be honored to be apart of your team and look forward to hearing from you.</p></div>;

React.render(<Lightbox openbtn={true} opentext="Open Lightbox" content={democontent} />, document.getElementById('js-lightbox-opener'));