import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Dashboard from '../views/Dashboard';

//  const PrivateRoute = ({component: Component, currentUser, ...res}) => (
//     <Route 
//         {...res}
//         render={() => {
//             if(localStorage.getItem('userToken')){
//                 return(
//                     <div>
//                     <Dashboard />
//                     </div>
//                 );
//             };
//             return (
//             <Redirect to='/' />
//             )
//             }}
//      />
// )
const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
      {...rest}
      render={ props => (
        localStorage.getItem('userToken')
        ? (
           <Component {...props} />
        )
        : ( 
            <Redirect to={{ pathname: '/login' }} />
        )
      )}
    />
    );
    
  export default PrivateRoute;
