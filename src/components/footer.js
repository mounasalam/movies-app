import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    //   <div className="wrapper cont">
     <footer className="page-footer js-page-footer js-hide-in-app">
		<div className="content-wrap">
			
				<nav className="footer-nav js-footer-nav mx-auto mt-2">
					<ul>
						<li><a href="/about/">About</a></li>
						<li><a href="/welcome/">Help</a></li>
						<li><a href="/legal/terms-of-use/">Terms</a></li>
						<li><a href="/contact/">Contact</a></li>
					</ul>
				</nav>
	
			<p className="copyright text-center">
				Copyright © Mouna Salam.
			</p>
		</div>
	</footer>
    // </div>

  );
}

export default Footer;
