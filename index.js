import react, { Children } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { books } from './Books'
import Messi from './Messi'
import Books from './Books'

function Ahmad() {
  return (
    <div className='ahmad'>
      {Books.map((book) => {
        return <Messi book={book}></Messi>
      })}
    </div>
  )
}

ReactDOM.render(<Ahmad />, document.getElementById('root'))
