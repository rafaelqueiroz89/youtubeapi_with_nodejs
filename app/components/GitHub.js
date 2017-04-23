//importando a lib React
var React = require('react');
var SearchUser = require('./SearchUser');
//criando componente associada a variável
var GitHub = React.createClass({
	getInitialState: function() {
		return {
			user: null,
			repos: [],
		}
	},
	updateUser: function(user){
		// atualiza o estado do getInicialState
		this.setState({user: user});
	},
	updateRepos: function(repos){
		// atualiza o estado do getInicialState
		this.setState({repos: repos});
	},
	render: function() {
		return (
			<div className="container">
				<SearchUser 
					//busca a função de propriedades do SearchUser.js
					updateUser={this.updateUser}
					updateRepos={this.updateRepos}
				/>
	    	</div>
		);
	}

})

//exportando o componente criado
module.exports = GitHub;