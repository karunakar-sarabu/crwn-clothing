import React from 'react';
import HomePage from './pages/homepage/homepage.component'
//import HomePage from './homepage.component'
//import HomePage from './pages/homepage/homepage.component'
import {createUserProfileDocument} from './firebase/firebase.utils'
import {Switch,Route} from 'react-router-dom';
import {WithRouter} from 'react-router-dom'

//import ShopPage from './pages/shop/shop.components.jsx'
import ShopPage from './pages/shop/shop.components.jsx'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.actions'
import {connect} from 'react-redux'
import {auth} from './firebase/firebase.utils'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/checkout.component'

// const HomePage=(props)=>{
//   console.log(props)
//   return(
//  <div>
//    <h1>HOME PAGE</h1>
//  </div>
//   )
// }
// const TopicsList=()=>{
//   return(
//     <div>
//       <h1>TOPICS LIST PAGE</h1>
//     </div>
//   )
// }
// const TopicDetail=()=>{
//   return(
//     <div>
//       <h1>TOPIC DETAIL PAGE</h1>
//     </div>
//   )
// }

class  App extends React.Component{
    // constructor() {
    //   super()
    
    //   this.state = {
    //      currentUser:null
    //   }
    // }
    unsubscribeFromAuth=null;

    componentDidMount(){
      const {setCurrentUser}=this.props;

      this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){

        
        const userRef=await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          })
          //console.log(snapshot.data)
        })
        //createUserProfileDocument(user);
        // setCurrentUser(userAuth);
        //console.log(user)
        }
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
  return(
    
  <div className='App'>
    {/* <HomePage/> */}
    <Header />
    <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        {/* <Route  path='/topics' component={TopicsList}/>
        <Route path='/topics/:topicId' component={TopicDetail}/> */}
        <Route exact={true} path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
  </div>
    )
      }
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps=(dispatch)=>({
   setCurrentUser:(user)=>(dispatch(setCurrentUser(user)))
 })
export default connect(null,mapDispatchToProps)(App)

//function App() {
//   class App extends React.Component{
//     constructor() {
//       super()
    
//       this.state = {
//          currentUser:null
//       }
//     }
//     unsubscribeFromAuth=null;

//     componentDidMount(){
//       this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
//         this.setState({currentUser:user});
//         console.log(user)
//       })
//     }
//     componentWillUnmount(){
//       this.unsubscribeFromAuth();
//     }
    
//     render(){
//     return (
//       <div >
//         <Header/>
//         <Switch>
//           <Route exact path='/' component={HomePage}/>
//           <Route path='/shop' component={ShopPage} />
//           <Route path='/signin' component={SignInAndSignUpPage} />
//       </Switch>
//       </div>
//     );
// }
//   }
// export default App;
