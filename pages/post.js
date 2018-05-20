import Layout from './components/MyLayout.js'
import axios from 'axios';

const Post =  (props) => {
    return (
        <Layout>
            <h1>{props.data.name}</h1>
            <p>{props.data.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={props.data.image.medium}/>
        </Layout>
    )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await axios(`https://api.tvmaze.com/shows/${id}`)
  const data = res.data
  
  return { data }
}
export default Post