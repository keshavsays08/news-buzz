// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import React, { useState } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0)

  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "6a3bf9b125ea419397920904c36acd64"
  const pageSize = 16;

  return (
    <>
      <Router>
        <div style={{ position: 'relative' }}>
          <LoadingBar
            height={4}
            color='#f97316'
            progress={progress}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${progress}%`, // Set width based on progress
              transition: 'width 0.2s ease-in-out' // Add a transition for smooth progress change
            }}
            onLoaderFinished={() => setProgress(0)}
          />
        </div>
        <Navbar />

        <Routes>

          <Route exact path="/" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />

          <Route exact path="/business" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="Business" pageSize={pageSize} country="in" category="Business" />} />
          <Route exact path="/entertainment" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
          <Route exact path="/general" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General" />} />
          <Route exact path="/health" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health" />} />
          <Route exact path="/science" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />} />
          <Route exact path="/sports" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
          <Route exact path="/technology" element={<NewsContainer apiKey={apiKey} setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology" />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )}

export default App;