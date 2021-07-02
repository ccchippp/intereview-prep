import React, { Component } from 'react'

export default class FetchRandomUser extends Component {

    state = {
        loading: true,
        person: null,
    }
    async componentDidMount() {
        const url = 'https://api.randomuser.me/'
        const res = await fetch(url)
        const data = await res.json()
        this.setState({person: data.results[0]})
        console.log(data.results)
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? 
                (<div>loading...</div>
                ) : (
                <div>this.state.person</div>)}

            </div>
        )
    }
}
