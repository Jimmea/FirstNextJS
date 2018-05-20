import Header from './Header'
import Head from 'next/head'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
          <title>Chào mừng bạn đến với trang chủ</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
          <script src="//code.jquery.com/jquery.js"></script>
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
      </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout