class WallForm extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {user_update: ''};
        this.updateChange = this.updateChange.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
    };
    
    updateChange(){
        this.setState({user_update: e.target.value});
    }

    updateSubmit(){
        e.preventDefault();
        var user_update = this.state.user_update.trim();
        if(!user_update)return;
        else{
            this.props.onUpdateSubmit({user_update:user_update});
            this.setState({user_update:''});
        }
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.updateInput).focus();
    }

    render(){
        return(
            <form onSubmit={this.updateSubmit}>
                <textarea onChange={this.updateChange} value={this.state.user_update} ref = "userInput"></textarea>
                <input type="submit" value='Post' id='wallPost'/>
            </form>
        )
    }
}

class CommentForm extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {user_comment: ''};
        this.commentChange = this.commentChange.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
    };

    commentChange(e){
        this.setState({user_comment:e.target.value})
    }

    commentSubmit(e){
        e.preventDefault();
        var user_comment = this.state.user_comment.trim();
        if(!user_comment)return;
        else{
            this.props.onCommentSubmit({user_comment:user_comment});
            this.setState({user_comment});
        }
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.commentInput).focus();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.commentSubmit}></form>
                <textarea className="commentInput" onChange={this.commentChange} value={this.state.user_comment} ref="commentInput"></textarea>
                <input type="submit" value="Comment" className="commentSubmit"/>
            </div>
        )
    }
}

class CommentGrid extends React.Component{
    
    textToLink(content){
        var finalContent = textToLink(content);
        return{__html:finalContent};
    }

    render(){
        var comments = this.props.dataComments.map(function(comment, index){
            return(
                <div className= "feedCommentGrid" key={comment.com_id}>
                    <img src={comment.profile_pic} alt="profile picture" className="commentImg"/>
                    <div className="commentText">
                        <b>{comment.name}</b>
                        <a href="#aaaa" data = {comment.com_id} className="commentDelete" onClick={this.props.deleteComment} value={index} >X</a>
                        <div>
                            <span dangerouslySetInnerHTML={this.textToLink(comment.comment)}></span>
                        </div>
                    </div>
                </div>
            )
        }.bind(this))
    return(
        <div id="commentsFeed">
            {comments}
        </div>
    )}
}

class WallUpdates extends React.Component{
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: ''
            
        };
    };

    textToLink(content){
        var finalContent = textToLink(content);
        return{__html:finalContent};
    }

    render(){
        var updates = this.props.data.map(function(update, index){
            return(
                <div className= "feedBody" key={update.created}>
                    <img src={update.profile_pic} alt="feed picture" className="feedImg"/>
                    <div className="feedText">
                        <b>{update.name}</b>
                        <a href="#" data = {update.update_id} className="feedDelete" onClick={this.props.deleteComment} value={index} >X</a>
                        <div>
                            <span dangerouslySetInnerHTML={this.textToLink(update.user_update)}></span>
                        </div>
                    </div>
                    <CommentBlock dataCommentsBlock = {update.comments} updateID={update.update_id}/>
                </div>
            )
        }.bind(this))
    return(
        <div id="commentsFeed">
            {updates}
        </div>
    )}
}


class CommentBlock extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataComments: this.props.dataCommentsBlock,
            showComment: false
        };
    };

    commentAjaxSubmit(data){
        var update_id = this.props.updateID;
        var reactThis = this;
        var data='updateID='+update_id+'&commentID='+com_id;
        ajaxPostReact('deleteComments.php', data.reactThis, function(data){
            reactThis.state.dataComments.splice(commentIndex, 1);
            reactThis.setState({dataComments:reactThis.state.dataComments});
        })
    }

    render(){
        return(
            <div>
                <div className="feedLinks">
                <a href="#aa" onClick={this.commentLink}>Comment</a>
                </div>
                <CommentGrid dataComments={this.state.dataComments} deleteComment="this.deleteComment" postUrl = "deleteComment.php"/>
                {this.renderCommentForm()}
            </div>
            
            
        )
    }
}

class WallFeed extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        };
    };

    updateAjaxSubmit(update){
        var reactThis = this;
        ajaxPostReact(this.props.url, data, reactThis, function(data){
            var updates = reactThis.state.data;
            var newUpdates = [data.update[0]].concat(updates);
            reactThis.setState({data:newUpdates});
        })
    }

    updatesFromServer(){
        var data = '';
        var reactThis = this;
        ajaxPostReact(this.props.url, data, reactThis, function(data){
            reactThis.setState({data:data.updates});
        });
    }

    componentDidMount(){
        this.updatesFromServer();
    }

    render(){
        return(
            <div>
                <WallForm onUpdateSubmit={this.updateAjaxSubmit}/>
                <WallUpdates data={this.state.data} commentLink={this.commentLink} deleteUpdate={this.deleteUpdate}/>
            </div>
        )
    }
}

class WallContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>Facebook comments application with ReactJS</h1>
                <WallFeed url="newsfeed.php" postUrl = "updateFeed.php" deleteUrl="delete.php"/>
            </div>
        )
    }
}

ReactDOM.render(
    <WallContainer/>, document.getElementById('container')
)