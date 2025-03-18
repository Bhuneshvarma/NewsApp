import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './assets/News'; // Import your News component
import './App.css';
import Navbar from './assets/Navbar'; // Import your Navbar component
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
 const pageSize = 15;
  // eslint-disable-next-line no-undef
  
  const apikey= import.meta.env.VITE_REACT_APP_API_KEY
  const [progress,setProgress] = useState(0)
  
 
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </>
    );
  
}

export default App;