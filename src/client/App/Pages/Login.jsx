import React, { Component } from 'react'
require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
const queryString = require('query-string')
const dbSettings = require('../../apiKey.json')
import './Login.css'
import Navbar from './LoginComponents/Navbar'
import Main from './LoginComponents/Main'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: [],
      guilds: [{}],
      invalid_code: false,
      guildOpened: {},
      suggestionOpened: {},
      searchBarActive: false,
      helpUsed: false,
      querySuggestions: [{}],
      query: "",
      alert: {},
    }
    this.openGuild = this.openGuild.bind(this)
    this.activateSearchBar = this.activateSearchBar.bind(this)
    this.deactivateSearchBar = this.deactivateSearchBar.bind(this)
    this.getQueryInfo = this.getQueryInfo.bind(this)
    this.openSuggestion = this.openSuggestion.bind(this)
    this.closeSuggestion = this.closeSuggestion.bind(this)
    this.putSuggestion = this.putSuggestion.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
  }
  
  async componentDidMount() {
    const sessionState = JSON.parse(sessionStorage.getItem("state"))
    if (sessionState === null) {
      const parsed = queryString.parse(this.props.location.search)
      console.log(parsed.code)
      await fetch(`api/code/${parsed.code}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error === "invalid_request") {
          this.setState({
            invalid_code: true
          })
        }
        const token = data.access_token
        const header = {Authorization: `Bearer ${token}`}
        fetch("https://discordapp.com/api/users/@me", {headers: header})
        .then((resp) => resp.json())
        .then((data) => {
          this.setState({
              user: data
            }, () => {
              console.log(this.state.user)
              fetch(`api/users/${this.state.user.id}`)
              .then((resp) => resp.json())
              .then((data) => {
                setTimeout(() => {
                  this.setState ({
                    guilds: data,
                    loading: false,
                    searchBarActive: false,
                    helpUsed: false,
                  }, () => {
                    console.log(this.state.guilds)
                    sessionStorage.setItem("state", JSON.stringify(this.state))
                  })
                }, 2000)
              })
              .catch(function(error) {
                console.log(error)
              })
          })
        })
        .catch(function (error) {
          console.log(error)
        })
      })
      .catch(function(error) {
        console.log(error)
      })  
    } else {
      this.setState(sessionState)
    }
  }

  openGuild(guild) {
    this.setState({ guildOpened: guild, suggestionOpened: {}, query: "", alert: {} })
  }

  async activateSearchBar() {
    if(this.state.helpUsed === false) {
      this.setState({ searchBarActive: true })
      await new Promise((resolve, reject) => setTimeout(resolve, 2500))
      this.deactivateSearchBar()  
    }
  }

  deactivateSearchBar() {
    this.setState({ searchBarActive: false, helpUsed: true })
  }

  openSuggestion(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${dbSettings.TMDB_api_key}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ suggestionOpened: data})
    })
  }

  closeSuggestion() {
    this.setState({ suggestionOpened: [], alert: {} })
  }

  getQueryInfo() {
    this.setState({ query: event.target.value })
    if (event.target.value.length > 0) {
      fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&query=${event.target.value}&api_key=2f9030e4912af0f2b862c44f7a8181e6`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ querySuggestions: data})  
      })  
    }
  }

   putSuggestion() {
    let suggestionBody = {
      title: this.state.suggestionOpened.title,
      ratings: this.state.suggestionOpened.vote_average,
      year: this.state.suggestionOpened.release_date,
      plot: this.state.suggestionOpened.overview,
      poster: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.state.suggestionOpened.poster_path}`,
      link: `https://www.themoviedb.org/movie/${this.state.suggestionOpened.id}`
    }

    let duplicate = this.state.guildOpened.request_list.find(function (request) {
      return request.title === suggestionBody.title
    })

    if (duplicate !== undefined) {
      let alertObject = {
        type: "duplicate",
        title: suggestionBody.title,
        year: suggestionBody.year,
        guild_name: this.state.guildOpened.guild_name
      }
      this.setState({ alert: alertObject})
    }

    if (duplicate == undefined) {
      fetch(`api/guilds/${this.state.guildOpened.guild_id}`,{
        method: 'PUT',
        body: JSON.stringify(suggestionBody),
        headers:{'Content-Type': 'application/json'}
      }
      ).then((resp) => resp.json())
      .then((data) => {
        let guildOpened = {...this.state.guildOpened}
        guildOpened.request_list.push(suggestionBody)
        this.setState({guildOpened})

        let alertObject = {
          type: "success",
          title: suggestionBody.title,
          year: suggestionBody.year,
          guild_name: data.guild_name
        }
        this.setState({ alert: alertObject})

        sessionStorage.setItem("state", JSON.stringify(this.state))
        
      })
      .catch(error => console.error('Error: ', error))
    }
  }

  closeAlert() {
    this.setState({ alert: {} })
  }

  render() {
    if (this.state.loading === true) return (
      <div className="LoadingBackground">
        <img src="./src/Client/App/Assets/movieknight.png" alt="" className="LoadingImage"/><br/><br/><br/>
        <span className="LoadingText">Movie Knight is loading...</span>
      </div>
    )
    
    if (this.state.loading === false) return(
      <div className={this.props.location.pathname === '/login' ? 'loginBackground' : null}>
        <Navbar user={this.state.user} guilds={this.state.guilds} openGuild={this.openGuild} guildOpened={this.state.guildOpened}/>
        <Main guildOpened={this.state.guildOpened} activateSearchBar={this.activateSearchBar} searchBarActive={this.state.searchBarActive} getQueryInfo={this.getQueryInfo} query={this.state.query} querySuggestions={this.state.querySuggestions} suggestionOpened={this.state.suggestionOpened} openSuggestion={this.openSuggestion} closeSuggestion={this.closeSuggestion} alert={this.state.alert} closeAlert={this.closeAlert} putSuggestion={this.putSuggestion}/>
      </div>
    )  
  }
}