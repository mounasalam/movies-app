import React from 'react';
import '../styles/highlights.css';



function Highlights() {
  return (

<section id="highlights" className="mt-3 section feature-list">      
	<h2 className="tagline">Our website lets you…</h2>
    <div className="">
	<div className="highlights row">
        <div className="col-sm-4">
    		<span className="panel promopanel has-icon big-icon -watch -hover-green" ><span className="icon"></span><p>Keep track of every film you’ve ever watched (or just start from the day you&nbsp;join)</p></span>
        </div>
        <div className="col-sm-4">
    		<span className="panel promopanel has-icon big-icon -like -hover-orange" ><span className="icon"></span><p>Show some love for your favorite films, lists and reviews with a&nbsp;“like”</p></span>
        </div>
        <div className="col-sm-4">
    		<span className="panel promopanel has-icon big-icon -review -hover-blue"><span className="icon"></span><p>Write and share reviews, and follow friends and other members to read&nbsp;theirs</p></span>
        </div>
        <div className="col-sm-4">
    		<span className="panel promopanel has-icon big-icon -rate -hover-green" ><span className="icon"></span><p>Rate each film on a five-star scale (with halves) to record and share your&nbsp;reaction</p></span>
        </div>
        <div className="col-sm-4">
    		<span className="panel promopanel has-icon big-icon -log -hover-orange" ><span className="icon"></span><p>Keep a diary of your film watching (and upgrade to <strong>Pro</strong>&nbsp;for comprehensive stats)</p></span>
        </div>
        <div className="col-sm-4">
		    <span className="panel promopanel has-icon big-icon -list -hover-blue"><span className="icon"></span><p>Compile and share lists of films on any topic and keep a watchlist of films to&nbsp;see</p></span>
        </div>
	</div>
    </div>
</section>


);
}

export default Highlights;