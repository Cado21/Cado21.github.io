import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const START_PAGE = 1;
const END_PAGE = 3;
function App() {
  const [page, setPage] = useState(START_PAGE);
  const pageConfig = [
    {
      image: require('./assets/stitch.gif'), 
      btn: {
        left: '5%',
        top: '15%',
        width: '50%',
        height: '70%',
        padding: '20px'
      },
      onClick: () => nextPage()
    },
    {
      image: require('./assets/cat.gif'), 
      btn: {
        left: '5%',
        top: '15%',
        width: '50%',
        height: '70%',
        padding: '20px'
      },
      onClick: () => nextPage()
    }, 
    {
      image:  `https://i.pinimg.com/736x/fc/84/38/fc8438792e6a5da6daa75838b7099662--iu-sexy-saranghae.jpg`
    }
  ]
  const nextPage = () => {
    setPage(currPage => {
      return currPage === END_PAGE ? currPage : currPage + 1;
    });
  }
  const prevPage = () => {
    setPage(currPage => {
      return currPage === START_PAGE ? currPage : currPage - 1;
    });
  }

  const currentPageConfig = pageConfig[page - 1];

  return (
    <div className="App">
      <div className='container'>
        <img className='img' src={currentPageConfig.image} />
        {currentPageConfig.btn && <div className='abs-btn' style={currentPageConfig.btn} onClick={currentPageConfig.onClick}></div>}
        <div className='btn-container'>
          <div className={`btn ${page === START_PAGE ? 'disabled' : ''}`} onClick={() => prevPage()}>Prev</div>
          <div className={`btn ${page === END_PAGE ? 'disabled' : ''}`} onClick={() => nextPage()}>Next</div>
        </div>
      </div>
    </div>
  );
}

export default App;
