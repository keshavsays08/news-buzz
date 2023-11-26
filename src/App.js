// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import React, { Component } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';

export default class App extends Component {
  pageSize =16;
  render() {
    return (
      <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsContainer key="general" pageSize={this.pageSize} country="in" category="general" />}/>

          <Route exact path="/business" element={<NewsContainer key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
          <Route exact path="/entertainment" element={<NewsContainer key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
          <Route exact path="/general" element={<NewsContainer key="General" pageSize={this.pageSize} country="in" category="General" />} />
          <Route exact path="/health" element={<NewsContainer key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
          <Route exact path="/science" element={<NewsContainer key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
          <Route exact path="/sports" element={<NewsContainer key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
          <Route exact path="/technology" element={<NewsContainer key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />

        </Routes>
        <Footer/>
      </Router>
      </>
    )
  }
}
