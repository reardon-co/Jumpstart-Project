import React from 'react';
import NavBar from '../src/components/NavBar';
import Landing from '../src/views/Landing';
import BlogPost from './views/BlogPost';
import CreateBlogPost from "./views/CreateBlogPost";




const App: React.FC = () => {
  return (
    <div>
      <BlogPost author={'Test'} claps={1234} content={'Hi'} id={1} title={'Test'}/>
      <CreateBlogPost />
    </div>
  );
}

export default App;
