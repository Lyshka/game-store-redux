import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import {Provider} from "react-redux";
import { store } from "./redux/store";

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;