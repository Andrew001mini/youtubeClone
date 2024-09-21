import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './Utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchVideo from './Components/WatchVideo';


const appRouter=createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [{
    path: "/",
    element: <MainContainer/>
  },{
    path: "/Watch",
    element: <WatchVideo/>
  }]
}])
function App() {
  return (
    <div >
      <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
      </Provider>
      
    </div>
  );
}

export default App;
