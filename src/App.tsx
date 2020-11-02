import React from 'react';
import { Provider } from 'mobx-react';
import RootStore from './stores';
import Home from './components/Home';


type AppProps = {}

const App: React.FunctionComponent<AppProps> = () => {
	return (
		<Provider {...RootStore.stores}>
      <Home />
		</Provider>
	);
}
export default App;
