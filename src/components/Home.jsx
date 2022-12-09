import React from "react";
import NewsArticle from "./NewsArticle";
import "../Home.css";

const Home = ({ toForm,toDashboard }) => {
	return (
		<div className="home">
			<div className=" grey">
				<h1 className="mainHeading">Weather News & Extra Forecasts</h1>
				<p className="everDay">Every day you will "know" the weather...</p>
				<p>Join our premium weather service in QLD, NSW, ACT & VIC!</p>
				<button
					className="blueSubscribe"
					onClick={() => {
						toDashboard();
					}}
				>
					Subscribe to our Weather Service
				</button>
				<button
					className="yellowSubscribe"
					onClick={() => {
						toForm();
					}}
				>
					Get our 1-minute newsletter
				</button>
			</div>
			<div>
				<p id="weather_news" className="black">
					Home &gt; Weather News & Extra Forecasts
				</p>
			</div>
			<div>
				<h4 className="black">Latest News</h4>
				<div className=" flex">
					<NewsArticle
						title="Is climate change  making the weather worse ?"
						url="https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2019/07/0719_Hurricane_Florence_1600.jpg?w=1600&ssl=1"
					/>
					<NewsArticle title="Weather Service Confirms Weak Tornado" url="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg" />
					<NewsArticle title="The High Imapact Weather Project" url="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iEfY9Ul7Hbd0/v0/-1x-1.jpg" />
				</div>
			</div>
			<footer></footer>
		</div>
	);
};
export default Home;
