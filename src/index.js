import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import PostList from './PostList'
// import LoginForm from './LoginForm'
// import ReactStackForm from './ReactStackForm';
// import ReactCheck from './Reactcheck'

ReactDOM.render(
  <React.StrictMode>
    <PostList/>
    {/* <LoginForm/>
    <ReactStackForm/>
    <ReactCheck/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
