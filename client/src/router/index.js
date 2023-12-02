import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import GuidePage from '../views/Guide-Page'

import Home from '../views/Home'
import TreasureHouse from '../views/TreasureHouse'
import Publish from '../views/Publish'
import Message from '../views/Message'
import My from '../views/My'




export default createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<GuidePage />
            },
            {
                path:'/home',
                element:<Home />,
            },
            {
                path:'/treasureHouse',
                element:<TreasureHouse />,
            },
            {
                path:'/publish',
                element:<Publish />,
            },
            {
                path:'/message',
                element:<Message />,
            },
            {
                path:'/my',
                element:<My />,
            }
        ]
    }
])