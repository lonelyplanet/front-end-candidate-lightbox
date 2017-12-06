import * as React from 'react'
import Lightbox from '~/components/Lightbox'

interface AppProps {}
interface AppState {
  showLightbox: boolean
}
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    showLightbox: false,
  }

  _onShowLightbox = () => {
    this.setState({ showLightbox: true })
  }

  _onCloseLightbox = () => {
    this.setState({ showLightbox: false })
  }

  render () {
    return (
      <div>
        <h1>Hello Lonely Planet</h1>
        <button onClick={this._onShowLightbox}>Open Demo Lightbox</button>
        {this.state.showLightbox && (
          <Lightbox onClose={this._onCloseLightbox} />
        )}
      </div>
    )
  }
}

export default App
