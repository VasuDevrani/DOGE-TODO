import React from 'react'
import Feed from './Feed'

export default function Output(props) {
  return (
    <div className='output'>
        {
            props.list.length?(
            <Feed list={props.list} deleteItem={props.deleteItem} clearList={props.clearList}/>):(
              <p style={{color: 'white', fontSize: '20px', marginTop: '50px', textAlign: 'center', padding: '10px'}}>Hey! You are all done for today...More todo</p>
            )
        }
    </div>
  )
}
