const domReady = function (callback) {
	const state = document.readyState;
	if (state === 'interactive' || state === 'complete') {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', callback);
	}
};

domReady(() => {
	const projectname = document.createElement('a');
	projectname.classList.add('project-name');
	projectname.text = 'aureooms/js-sat';
	projectname.href = './index.html';

	const header = document.querySelectorAll('header')[0];
	header.insertBefore(projectname, header.firstChild);

	const testlink = document.querySelector('header > a[data-ice="testLink"]');
	testlink.href = 'https://coveralls.io/github/aureooms/js-sat';
	testlink.target = '_BLANK';

	const searchBox = document.querySelector('.search-box');
	const input = document.querySelector('.search-input');

	// Active search box when focus on searchBox.
	input.addEventListener('focus', () => {
		searchBox.classList.add('active');
	});
});
