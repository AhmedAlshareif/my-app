

//-------------------------
const PostsList = ({Posts,name})=>{
    return(
<div className="container">
    <h1>{name} </h1>
              
     <table className="table">  
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
  {Posts.map((post)=>(
    <tr key={post.id}>
        <th scope="row">{post.id}</th>
        <td>{post.title}</td>
        <td>{post.body}</td>
        </tr>
  ))}
  
  </tbody>
</table> 
        </div>

    );
}
export default PostsList;