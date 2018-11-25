1.安装路由
  npm install --save react-router@3.x

2.引入路由
  import { Router,Route,hashHistory,IndexRoute } from "react-router"
  // 加载组件
  <Router history={ hashHistory }>
    <Route path="/" component={ Index }></Route>
    <Route path="/learn" component={ Learn }></Route>
    <Route path="/look" component={ Look }></Route>
  </Router>

3.路由跳转
  import { Link } from "react-router"
  <Link to="/learn">学习</Link>
  Link渲染：渲染成a标签

4.路由跳转参数传递
  添加key：
    <Route path="/learn/:username" component={ Learn }></Route>
  添加值：
    <Link to="/learn/iwen">学习</Link> // iwen是值
  读取参数：
    { this.props.params.username }
  动态参数传递
    <Link to={`/learn/${this.state.username}`}>学习</Link>

5.历史记录
  hashHistory:#
  browserHistory: /  当上线之后，用户主动刷新，会呈现空白，需要后端进行重定向
