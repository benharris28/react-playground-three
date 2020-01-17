import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'

class GreatGrandChild extends Component {
  render() {
    const copy = languageSpecificCopy['en-US'] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}

export default GreatGrandChild;