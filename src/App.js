import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cssModule from './App.module.css';
import Layout from './HOC/Layout';
import PostBillboard from './Containers/PostBillboard/PostBillboard';
import NewPost from './Containers/NewPost/NewPost';
import FadingDiv from './Components/UI/FadingDiv/FadingDiv';

function App() {
  return (
    <div  >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact render={() =>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundColor: '#daded9cf'
              }}></div>}></Route>
            <Route path="/posts" component={PostBillboard} />
            {/* <Route path="/newpost" component={NewPost} /> */}
            {/* <Route path="/animate" component={FadingDiv}/> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;