import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import GamingVideos from "./components/GamingVideos";
import MusicVideos from "./components/MusicVideos";
import Automotive from "./components/Automotive"
import NewsVideos from "./components/NewsVideos";
import ComedyVideos from "./components/Comedy";
import SportsVideos from "./components/SportsVideos"
import VideoContainer from "./components/VideoContainer";
import SearchPage from "./components/SearchPage";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />,
        children:[{
          path:"gaming",
          element:<GamingVideos />
        },
        {
          path:"/",
          element:<VideoContainer />
        },
        
        {
          path:"music",
          element:<MusicVideos />
        },
        {
          path:"autovehicle",
          element:<Automotive />
        },
        {
          path:"news",
          element:<NewsVideos />
        },
        {
          path:"comedy",
          element:<ComedyVideos />
        },
        {
          path:"sports",
          element:<SportsVideos />
        },
        {
          path:"search/:searchId",
          element:<SearchPage />
        }
     ]
      }, 
    ] 
  },
  {
    path:"watch",
    element:<WatchPage />
  },
])

function App() {
  return (
    <Provider store={store}>
    <div >
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
