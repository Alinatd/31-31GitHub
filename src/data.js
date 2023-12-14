import { About } from "./Components/About";
import { Contacts } from "./Components/Contacts";
import { Home } from "./Components/Home";

export const data =[
{
    route:'/',
    exact:true,
    name:"Home",
    element:()=><Home/>
},
{
    route:'/about',
    exact:true,
    name:"About us",
    element:()=><About/>
},
{
    route:'/contacts',
    exact:true,
    name:"Contact",
    element:()=><Contacts/>
}

]