import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from './pages/GamePage/GamePage'
import OrderPage from './pages/OrderPage/OrderPage'
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/app/:title" element={<GamePage />} />
							<Route path="/order" element={<OrderPage />} />
						</Routes>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</div>
	);
};

export default App;