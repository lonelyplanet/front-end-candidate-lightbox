import * as React from 'react'
import * as PropTypes from 'prop-types'

// prettier-ignore
const EXAMPLE_IMAGES = new Map([
  ['small',  'http://www.themistermen.co.uk/images/Mr_Small.jpg'],
  ['medium', 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg'],
  ['large',  'https://images7.alphacoders.com/671/671281.jpg'],
])

interface HomeProps {}
class Home extends React.Component<HomeProps> {
  static contextTypes = {
    lightbox: PropTypes.object,
  }

  _onOpenLightbox = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const size = (e.target as any).getAttribute('data-size')
    this.context.lightbox.open(EXAMPLE_IMAGES.get(size), {
      title: 'Mock Image Title',
      description: 'Here is some mock copy that helps describe this image.',
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Hello Lonely Planet</h1>
        <section>
          <hr />
          {['small', 'medium', 'large'].map(size => (
            <button
              key={size}
              className="btn btn-primary"
              data-size={size}
              onClick={this._onOpenLightbox}
            >
              Open {size} lightbox
            </button>
          ))}
        </section>
        <hr />
        <p>
          Snackwave single-origin coffee fam retro YOLO typewriter. Gentrify
          four dollar toast cliche, leggings poutine truffaut gluten-free
          forage. IPhone kickstarter jean shorts stumptown lyft. Try-hard
          meggings hella health goth XOXO prism. Tote bag truffaut asymmetrical
          taiyaki humblebrag post-ironic microdosing direct trade. Narwhal YOLO
          organic, synth stumptown ethical taxidermy salvia.
        </p>
        <p>
          Messenger bag sriracha asymmetrical cardigan man braid coloring book
          kogi celiac intelligentsia viral poutine palo santo. Wayfarers offal
          tumeric unicorn YOLO aesthetic farm-to-table street art keytar artisan
          four loko. Hammock distillery stumptown pour-over, pok pok tattooed
          fingerstache. 3 wolf moon seitan polaroid tumeric chambray coloring
          book. Kickstarter 90's four loko, artisan brunch wayfarers fashion axe
          kitsch try-hard. Wayfarers +1 hell of sustainable mlkshk tousled paleo
          try-hard affogato flannel master cleanse af enamel pin heirloom
          keffiyeh.
        </p>
        <button
          className="btn btn-primary"
          data-size="medium"
          onClick={this._onOpenLightbox}
        >
          Open Demo Lightbox
        </button>
        <p>
          Readymade fixie authentic green juice banjo, pork belly live-edge
          retro man braid waistcoat skateboard gastropub forage intelligentsia.
          Williamsburg hella food truck deep v butcher taiyaki echo park photo
          booth 8-bit. Live-edge 8-bit vaporware, portland coloring book jean
          shorts iceland intelligentsia craft beer put a bird on it shoreditch
          ugh venmo 90's kogi. Readymade shabby chic viral vaporware,
          vexillologist blog green juice succulents food truck 90's raw denim.
          Pok pok chicharrones bespoke, fam put a bird on it poke slow-carb
          cold-pressed thundercats.
        </p>
        <p>
          Knausgaard gochujang fashion axe hexagon vape swag. Blue bottle
          kinfolk pabst taxidermy normcore enamel pin 8-bit truffaut mustache.
          Banh mi subway tile readymade narwhal cloud bread jianbing, tumblr
          pour-over thundercats pitchfork flannel yuccie woke. Salvia kogi
          leggings, street art put a bird on it whatever +1 austin thundercats.
          Banjo four dollar toast irony humblebrag selfies tacos williamsburg
          pok pok.
        </p>
        <p>
          Pug iPhone williamsburg, flannel viral trust fund cardigan taxidermy.
          Pour-over tote bag unicorn waistcoat franzen, kogi truffaut. Affogato
          sustainable edison bulb, cloud bread tofu cray bushwick gochujang
          slow-carb chillwave helvetica YOLO hammock palo santo dreamcatcher.
          Before they sold out jianbing blog venmo typewriter, helvetica tumeric
          single-origin coffee adaptogen retro sriracha hexagon glossier tumblr.
          Vice brooklyn distillery biodiesel lumbersexual, letterpress ethical
          flannel kickstarter.
        </p>
        <button
          className="btn btn-primary"
          data-size="large"
          onClick={this._onOpenLightbox}
        >
          Open Demo Lightbox
        </button>
        <p>
          Knausgaard gochujang fashion axe hexagon vape swag. Blue bottle
          kinfolk pabst taxidermy normcore enamel pin 8-bit truffaut mustache.
          Banh mi subway tile readymade narwhal cloud bread jianbing, tumblr
          pour-over thundercats pitchfork flannel yuccie woke. Salvia kogi
          leggings, street art put a bird on it whatever +1 austin thundercats.
          Banjo four dollar toast irony humblebrag selfies tacos williamsburg
          pok pok.
        </p>
        <p>
          Pug iPhone williamsburg, flannel viral trust fund cardigan taxidermy.
          Pour-over tote bag unicorn waistcoat franzen, kogi truffaut. Affogato
          sustainable edison bulb, cloud bread tofu cray bushwick gochujang
          slow-carb chillwave helvetica YOLO hammock palo santo dreamcatcher.
          Before they sold out jianbing blog venmo typewriter, helvetica tumeric
          single-origin coffee adaptogen retro sriracha hexagon glossier tumblr.
          Vice brooklyn distillery biodiesel lumbersexual, letterpress ethical
          flannel kickstarter.
        </p>
      </div>
    )
  }
}

export default Home
