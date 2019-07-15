import React , {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/PostActions'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: [],
            body: []
        }
        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        
        this.props.createPost(post)
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form className="form" onSubmit={this.handleClick}>
                    <label>Title :</label>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    <label>Body :</label>
                    <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)