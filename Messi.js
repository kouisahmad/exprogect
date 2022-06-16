import React from 'react'

const hhhhHoo = () => alert('messi is best')
const Messi = (props) => {
  const { img, author, title } = props.book
  return (
    <article className='Messi'>
      <img src={img}></img>
      <h1>{author}</h1>
      <h2>{title}</h2>
      <button type='button' onClick={hhhhHoo}>
        here please
      </button>
    </article>
  )
}

export default Messi
