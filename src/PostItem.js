import React, { Component } from "react";
import './PostItem.css'
import like from "./images/点赞.png";
import unlike from './images/踩.png'
/*
function PostItem(props) {
    const handleClick = () => {
    props.onVote(props.post.id);
    };
    const handleClickun = () => {
        props.unlike(props.post.id);
        };
    const { post } = props;
    return (
    <li className='item'>
        <div className='title'>
        {post.title}
        </div>
        <div>
        创建人：<span>{post.author}</span>
        </div>
        <div>
        创建时间：<span>{post.date}</span>
        </div>
        <div className='like'>
        <span><img src={like} onClick={handleClick} />
        </span>
        <span>{post.vote}</span>
        </div>
        <div className='unlike'>
        <span><img src={unlike} onClick={handleClickun} />
        </span>
        <span>{post.unlike}</span>
        </div>
    </li>
        );
}
*/
class PostItem extends Component {
    constructor(props) {
    super(props);
    this.state = {
        editing: false, // 帖子是否处于编辑态
        post: props.post
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleClickun = this.handleClickun.bind(this);
    }
    componentWillReceiveProps(nextProps) {
    // 父组件更新post后，更新PostItem的state
        if (this.props.post !== nextProps.post) {
            this.setState({
            post: nextProps.post
            });
        }
    }
    // 处理点赞事件
    handleVote() {
        this.props.onVote(this.props.post.id);
    }
    //处理踩事件
    handleClickun(){
        this.props.unlike(this.props.post.id);
    }
    // 保存/编辑按钮点击后的逻辑
    handleEditPost() {
        const editing = this.state.editing;
        // 当前处于编辑态，调用父组件传递的onSave方法保存帖子
        if (editing) {
        this.props.onSave({
        ...this.state.post,
        date: this.getFormatDate()
        });
        }
        this.setState({
        editing: !editing
        });
    }
    // 处理标题textarea值的变化
    handleTitleChange(event) {
        const newPost = { ...this.state.post, title:
        event.target.value };
        this.setState({
        post: newPost
        });
    }
    //返回当前时间
    getFormatDate() {
    }
    render() {
    const { post } = this.state;
    return (
    <li className="item">
    <div className="title">
    {this.state.editing
    ? <form>
    <textarea
    value={post.title}
    onChange={this.handleTitleChange}
    />
    </form>
    : post.title}
    </div>
    <div>
    创建人：<span>{post.author}</span>
    </div>
    <div>
    创建时间：<span>{post.date}</span>
    </div>
    <div className="like">
    <span>
    <img alt="vote" src={like} onClick=
    {this.handleVote} />
    </span>
    <span>
    {post.vote}
    </span>
    </div>
    <div className='unlike'>
        <span><img src={unlike} onClick={this.handleClickun} />
        </span>
        <span>{post.unlike}</span>
        </div>
    <div>
    <button onClick={this.handleEditPost}>
    {this.state.editing ? "保存" : "编辑"}
    </button>
    </div>
    </li>
    );
    }
    }
export default PostItem;