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
      slideOpen: true
    }
  }

  handleClick(e){
    const key = e.target.getAttribute('data-id')
    this.setState({
      [key]: !this.state[key],
      slideOpen: false
    })
    setTimeout(
      () => {
        this.setState({
          slideIn: true
        })
        setTimeout(() => { this.props.handleClick()}, 500)
      }, 0
    )
  } "filterButtons slideOpen"

  slideIn(e){
    e.currentTarget.classList.remove('slideOpen')
    e.currentTarget.classList.add('slideClose')
  }

  render(){
    return(
      <Fragment>
        <div className={`filterButtons ${this.state.slideOpen ? 'slideOpen' : 'slideClose'}`} onClick={e => this.slideIn(e)}>
          <div className={`filterButton ${ this.state.starred ? 'selected' : null}`} data-name="starred" onClick={e => this.handleClick(e)}>
            <i className="fa fa-star"></i>
          </div>
          <div className={`filterButton ${this.state.music ? 'selected' : null}`} data-name="music" onClick={e => this.handleClick(e)}>
            <i className="fa fa-music"></i>
          </div>
          <div className={`filterButton ${this.state.video ? 'selected' : null}`} data-name="video" onClick={e => this.handleClick(e)}>
            <i className="fa fa-tv"></i>
          </div>
          <div className={`filterButton ${this.state.games ? 'selected' : null}`} data-name="games" onClick={e => this.handleClick(e)}>
            <i className="fa fa-gamepad"></i>
          </div>
          <div className={`filterButton ${this.state.places ? 'selected' : null}`} data-name="places" onClick={e => this.handleClick(e)}>
            <i className="fa fa-map-marker"></i>
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