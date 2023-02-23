import { getByTitle } from "@testing-library/react"
import Article from "./Article"


function ArticleList(props){
    console.log(props.posts)
    let proping = props.posts
   let retornoEachArticle =  proping.map((pc) =>{
        //let Article = []
       // Article.push(pc)
      return  <Article key= {pc.title} title = {pc.title} date ={pc.date} preview ={pc.preview}/>
        
    })
    
    return( 
     <main  >
       {retornoEachArticle}
    </main>)
    
}

export default ArticleList