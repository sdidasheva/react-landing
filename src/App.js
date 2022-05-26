import './App.scss';
import Header from './components/header';
import ScrollToTop from './components/scroll';
import Collection from './pages/collection';
import Content from './pages/content';
import FAQ from './pages/faq';
import Footer from './pages/footer';
import Main from './pages/main';
import RoadMap from './pages/roadmap';
import Team from './pages/team';

function App() {
  return (
    <div className='App'>
      <ScrollToTop/>
      <Header/>
      <Main/>
      <Collection/>
      <Content/>
      <RoadMap/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
