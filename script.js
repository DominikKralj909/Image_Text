const toggleContent = () => {
	const moreContent = document.getElementsByClassName('more-content')[0];
	const learnMoreButton = document.getElementsByClassName('learn-more-button')[0];

	const contentIsVisible = moreContent && moreContent.offsetWidth > 0 && moreContent.offsetHeight > 0;

	if (!contentIsVisible) {
		moreContent.style.display = 'inline';
		moreContent.classList.add('fade-in');
		moreContent.classList.remove('fade-out');
	} else {
		moreContent.classList.remove('fade-in');
		moreContent.classList.add('fade-out');

		setTimeout(() => {
			moreContent.style.display = 'none';
			hiddenContent.classList.remove('fade-out');
		  }, 500); 
	}
};