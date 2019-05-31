import React from 'react'
import axios from 'axios'


class ArtistShow extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/artists/${this.props.match.params.id}`)
      .then(res => this.setState({artist: res.data}))
      .catch(err => console.log(err))
  }
  render() {
    const { artist } = this.state
    if(!this.state.artist) return null
    return(
      <section className="section">
        <div>
          <h1 className="title is-2">{artist.name}</h1>
          <p>{artist.description? artist.description :'No description available for this artist' }</p>
          {artist.image && <figure>
            <img src={artist.image} alt={artist.name} />
          </figure>}
        </div>
      </section>
    )

  }
}

export default ArtistShow
