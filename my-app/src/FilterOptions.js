import React, {Component, Fragment} from 'react'

class FilterOptions extends Component{
  constructor(props){
    super(props)
    this.state = {
      starred: false,
      music:false, 
      video: false,
      games: false,
      places: false,
      links: false,
      slideIn: false
    }
  }

  handleClick(e){
    const key = e.target.getAttribute('data-id')
    this.setState({
      [key]: !this.state[key]
    })
    setTimeout(
      () => {
        this.setState({
          slideIn: true
        })
        setTimeout(() => { this.props.handleClick()}, 500)
      }, 0
    )
  }

  render(){
    return(
      <Fragment>
        <div className="filterButtons" style={this.state.slideIn ? {animation: 'slidein .5s ease-in'} : null}>
          <div className={`filterButton ${ this.state.starred ? 'selected' : null}`} data-name="starred" onClick={e => this.handleClick(e)}>
            <i className="fa fa-star"></i>
          </div>
          <div className={`filterButton ${this.state.music ? 'selected' : null}`} data-name="music" onClick={e => this.handleClick(e)}>
            <i className="fa fa-music"></i>
          </div>
          <div className={`filterButton ${this.state.video ? 'selected' : null}`} data-name="video" onClick={e => this.handleClick(e)}>
            <i className="fa fa-video"></i>
          </div>
          <div className={`filterButton ${this.state.games ? 'selected' : null}`} data-name="games" onClick={e => this.handleClick(e)}>
            <i className="fa fa-gamepad"></i>
          </div>
          <div className={`filterButton ${this.state.places ? 'selected' : null}`} data-name="places" onClick={e => this.handleClick(e)}>
            <i className="fa fa-map-marker-alt"></i>
          </div>
          <div className={`filterButton ${this.state.links ? 'selected' : null}`} data-name="links" onClick={e => this.handleClick(e)}>
            <i className="fa fa-link"></i>
          </div>
        </div>
        <div className="gradientScreen"></div>
      </Fragment>
    )
  }
}

export default FilterOptions