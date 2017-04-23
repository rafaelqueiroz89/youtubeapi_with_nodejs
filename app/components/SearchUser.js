var React = require('react');

var GitHubUser = require('../services/GitHubUser')

var SearchUser = React.createClass({
	handleSubmit: function(e) {

		// previne o clique native do Submit
		e.preventDefault();
		
		//
		GitHubUser.getByUsername(this.refs.username.value).then(function(response) {
			//recebe as propriedades do objeto
			this.props.updateUser(response.data)
		}.bind(this));

		GitHubUser.getReposByUsername(this.refs.username.value).then(function(response) {
			//recebe mais propriedades do objeto
			this.props.updateUser(response.data)
		}.bind(this));
	},
	render: function() {
		return (
			//html em forma de JavaScript do React
			<div className="jumbotron">
		        <h1>GitHub Info</h1>
		        <div className="row">
		          /// envia requisição via handleSubmit
		          <form onSubmit={this.handleSubmit}>
		            <div className="form-group">
		              <label>Username</label>
		              <input
		                type="text"
		                ref="username"
		                className="form-control"
		                placeholder="Ex: matheusml"
		                />
		            </div>
		            <button
		              type="submit"
		              className="btn btn-primary">Buscar
		            </button>
		          </form>
		        </div>
		    </div>
		);
	}

});

module.exports = SearchUser;