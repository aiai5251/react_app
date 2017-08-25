'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './com.css';
import $ from 'jquery';

var names = ['Alice', 'Emily', 'Kate'];
var arr = [
    <h1 key="1">Hello React!</h1>,
    <h2 key="2">React is awesome</h2>
];

var Hellomessage = React.createClass({
    render:function() {
        return <h1>hello {this.props.name}</h1>;
    }
});

var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function(child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});

// var data = {'nnn': 'dasda'};
// var Mytitle = React.createClass({
//     propTypes: {
//         title: React.PropTypes.string.isRequired,
//     },
//     render: function() {
//         return <h1>{this.props.title.nnn}</h1>;
//     }
// });

var MyComponent = React.createClass({
    handleClick: function() {
        alert(1);
        this.refs.myTextInput.focus();
    },
    render: function() {
        return (
            <div>
                <input type = "text" ref = "myTexxtInput" />
                <input type = "button" value = "focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
});
// 组件必须为大写的
var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'have not liked';
        return (
            <p onClick = {this.handleClick}>
                you {text} this. Click to toggle.
            </p>
        );
    }
});

var Hello = React.createClass({
    getInitialState: function() {
        return {
            opactity: 0.5
        };
    },
    handleClick: function(event) {
        this.setState({opacity: 0.2});
    },
    componentDidMount: function() {
        this.timer = setTimeout(
            () => {
                this.setState({opactity: 0.2})
            },
            1000
        );
    },
    render: function(){
        return (
            <div onClick = {this.handleClick}>
                Hello OK {this.props.name}
                <p>
                    a{this.state.opacity}
                </p>
            </div>
        );
    }
});

var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },
    componentDidMount: function() {
        console.log("asdasd");
        $.get(this.props.source, function(result) {
            console.log(result);
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            };
        }.bind(this));
    },
    render: function() {
        return (
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});

var RepoList = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },
    componentDidMount: function() {
        this.props.promise.then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error})
        );
    },
    render: function() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            var repos = this.state.data.items;
            var repoList = repos.map(function(repo) {
                return (
                    <li key = {repo.id}>
                        <a href = {repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
                    </li>
                );
            });
            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
});

ReactDOM.render(
    <div>
        <h1>Hello, world !</h1>,
        {
            names.map(function (name, index) {
                return <div key={index}>Hello, {name}</div>
            })
        }
        <div>{arr}</div>
        <Hellomessage name = "json" />

        <NotesList>
            <span>go</span>
            <span>to</span>
        </NotesList>
        {/* <Mytitle title = {data} /> */}
        <MyComponent />
        <LikeButton />
        <Hello name = "world" />
        <UserGist source="https://api.github.com/users/octocat/gists" />
        <RepoList
            promise = {$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
        />
    </div>,
    document.getElementById('root')
);
  