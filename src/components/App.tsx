import * as React from 'react'
import LightboxProvider from '~/components/LightboxProvider'
import HomeView from '~/routes/Home'

interface AppProps {}
class App extends React.Component<AppProps> {
  render() {
    return (
      <LightboxProvider>
        <HomeView />
      </LightboxProvider>
    )
  }
}

export default App
