import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header props = {blogData.name}/>
      <About about = {blogData.about}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <ArticleList posts ={blogData.posts}/>
    </div>
  );
}

export default App;
