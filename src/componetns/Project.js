import React from 'react'
import '../componetns/Project.css'
import ScrollToTop from "react-scroll-to-top";

function About() {
	<ScrollToTop />
  return (
    <div className="section">
		<div classname="container">
			<div className="content-section">
				<div classNam="title">
					<h1 color='black' className="alert alert-primary">My project</h1>
				</div>
				<div className="alert alert-success">
					<h3 >Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p> My name is Noura, majoring in computer science. I have done projects in languages. I hope to visit my profile in guthub.</p>
					<div className="button">
						<a href="https://github.com/Nurah-Osma">Read More</a>
					</div>
				</div>
				<div className="alert alert-danger">
				Contact and inquiries on my personal email Nurta2571@gmail.com
				</div>
			</div>
			<div class="image-section">
			
			</div>
		</div>
	</div>

  )
}

export default About