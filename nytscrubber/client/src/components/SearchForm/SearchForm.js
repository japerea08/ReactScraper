import React, { Component } from 'react';
import InputRow from "../InputRow/InputRow.js";
import './SearchForm.css';
import SearchButton from "./SearchButton"
import {ResultRow} from "../ResultsDiv/ResultRow.js";
import API from "../../utils/API";
import axios from "axios";

class SearchForm extends Component{
	state = {
		articles: [],
		savedArticles: [],
		topic: "",
		startYear: "",
		endYear:""
	};

	handleInputChange = event =>{
		const {name, value} = event.target;
		this.setState({[name]: value});
	};

	handleFormSubmit = event =>{
		event.preventDefault();
		//check to see if user has at least entered a topin
		if(this.state.topic){
			//make the ajax call
			this.searchArticles(this.state.topic);
		}
	}

	searchArticles = (info) =>{
		API.searchArticles(info).then(res=>{
			console.log(res);
		}).catch(err=>{
			console.log(err);
		});
	}

	render(){
		return(
			<div>
				<div className="container">
					<h2>Search</h2>
					<form>
						Topic
						<InputRow
						value = {this.state.topic}
						onChange={this.handleInputChange}
						name="topic"
						/>
						Start Year
						<InputRow
						value = {this.state.startYear}
						onChange={this.handleInputChange}
						name="startYear"
						/>
						End Year
						<InputRow
						value = {this.state.endYear}
						onChange={this.handleInputChange}
						name="endYear"
						/>
					</form>
					<SearchButton onClick={this.handleFormSubmit}/>
				</div>
				<div className="container">
					<h2>Results</h2>
					{this.state.articles.length ? (
		                (this.state.articles.map(article => (
		                  <ResultRow title={article.title}>
		                  </ResultRow>
		                )))
		            ) : (
		              <h3>No Results to Display</h3>
		            )}
				</div>
				<div className="container">
					<h2>Saved Articles</h2>
					{this.state.savedArticles.length ? (
		                (this.state.savedArticles.map(article => (
		                  <ResultRow title={article.title}>
		                  </ResultRow>
		                )))
		            ) : (
		              <h3>No Results to Display</h3>
		            )}
				</div>
			</div>			
		);
	}
}

export default SearchForm;

