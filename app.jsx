import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from './main-frame'

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(
	<div>
    <MainFrame />
	</div>, root);
});