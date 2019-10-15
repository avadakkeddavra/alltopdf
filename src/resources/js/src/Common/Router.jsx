import * as React from "react";
import Users from "../../pages/Main/Users/Users";
import Create from "../../pages/Main/Users/Create";
import Fields from "../../pages/Main/Fields/Fields";
import CreateField from "../../pages/Main/Fields/Create";
import EditField from "../../pages/Main/Fields/Edit";
import Culture from "../../pages/Main/Culture/Culture";
import CreateCulture from "../../pages/Main/Culture/Create";
import Drivers from "../../pages/Main/Drivers/Drivers";
import CreateDriver from "../../pages/Main/Drivers/Create";
import Car from "../../pages/Main/Cars/Cars";
import CreateCar from "../../pages/Main/Cars/Create";
import Elevators from "../../pages/Main/Elevators/Elevators";
import CreateElevator from "../../pages/Main/Elevators/Create";
import Tok from "../../pages/Main/Tok/Tok";
import CreateTok from "../../pages/Main/Tok/Create";
import EditCulture from "../../pages/Main/Culture/Edit";
import EditCar from "../../pages/Main/Cars/Edit";
import EditDriver from "../../pages/Main/Drivers/Edit";
import EditElevator from "../../pages/Main/Elevators/Edit";
import EditTok from "../../pages/Main/Tok/Edit";
import EditUser from "../../pages/Main/Users/Edit";
import Rides from "../../pages/Main/Rides/Rides";
import NotFound from "./404";
import {Switch, Route, Redirect} from 'react-router-dom'
import useUserRole from "../../hooks/useUserRole";
import EditRide from "../../pages/Main/Rides/EditRide";
import AdminRoute from "./Auth/AdminRoute";
import Carrier from "../../pages/Main/Carrier";
import CreateCarrier from "../../pages/Main/Carrier/Create";
import EditCarrier from "../../pages/Main/Carrier/Edit";
import Settings from "../../pages/Main/Settings";
import DispatcherRoute from "./Auth/DispatcherRoute";



const Router = () => {
  const role = useUserRole();
  return (
     <Switch>
        <Route path="/" exact>
          <Redirect to="/rides" />
        </Route>
       <Route path="/rides" exact component={Rides}/>
       {
         !role.isWatcher() && (
             <Switch>
               <Route path="/users" exact component={Users}/>
               <Route path="/field" exact component={Fields}/>
               <Route path="/culture" exact component={Culture}/>
               <Route path="/driver" exact component={Drivers}/>
               <Route path="/car" exact component={Car}/>
               <Route path="/carrier" exact component={Carrier}/>
               <Route path="/elevator" exact component={Elevators}/>
               <Route path="/weight" exact component={Tok}/>
               <Route path="/settings" exact component={Settings}/>
               <AdminRoute path="/users/add" exact component={Create} />
               <AdminRoute path="/users/edit/:id" exact component={EditUser} />
               <AdminRoute path="/field/add" exact component={CreateField}/>
               <AdminRoute path="/field/edit/:id" exact component={EditField}/>
               <AdminRoute path="/culture/add" exact component={CreateCulture} />
               <AdminRoute path="/culture/edit/:id" exact component={EditCulture} />
               <AdminRoute path="/driver/add" exact component={CreateDriver} />
               <AdminRoute path="/driver/edit/:id" exact component={EditDriver} />
               <AdminRoute path="/car/add" exact component={CreateCar} />
               <AdminRoute path="/car/edit/:id" exact component={EditCar} />
               <AdminRoute path="/carrier/add" exact component={CreateCarrier} />
               <AdminRoute path="/carrier/edit/:id" exact component={EditCarrier} />
               <AdminRoute path="/elevator/add" exact component={CreateElevator} />
               <AdminRoute path="/elevator/edit/:id" exact component={EditElevator} />
               <AdminRoute path="/weight/add" exact component={CreateTok} />
               <AdminRoute path="/weight/edit/:id" exact component={EditTok} />
               <DispatcherRoute path="/rides/:id" exact component={EditRide}/>
             </Switch>
         )
        }
        <Route path="*" component={NotFound}/>
    </Switch>
  )
}
export default Router;
