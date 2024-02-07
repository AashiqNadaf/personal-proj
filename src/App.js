import React, { useState } from 'react';
import './App.scss';
import Welcome from './Pages/Welcome';
import Confirmation from './Pages/Confirmation';
import Accepted from './Pages/Accepted';

function App() {
	const [pageNum, setPageNum] = useState(0);
	if (pageNum === 0) {
		return <Welcome setPageNum={setPageNum} />;
	}
	if (pageNum === 1) {
		return <Confirmation setPageNum={setPageNum} />;
	}
	if (pageNum === 2) {
		return <Accepted />;
	}
}

export default App;
