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
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API;
  apiKey = "885848d8bdce410b848dad31e437699a"
  pageSize = 16;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
    setTimeout(() => {
      this.setState({ progress: 0 });
    }, 1000);
  }
  render() {
    return (
      <>
        <Router>
          <div style={{ position: 'relative' }}>
            <LoadingBar
              height={4}
              color='#f97316'
              progress={this.state.progress}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${this.state.progress}%`, // Set width based on progress
                transition: 'width 0.2s ease-in-out' // Add a transition for smooth progress change
              }}
            />
          </div>
          <Navbar />

          <Routes>

            <Route exact path="/" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />

            <Route exact path="/business" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
            <Route exact path="/entertainment" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
            <Route exact path="/general" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path="/health" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
            <Route exact path="/science" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
            <Route exact path="/sports" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            <Route exact path="/technology" element={<NewsContainer apiKey={this.apiKey} setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}
