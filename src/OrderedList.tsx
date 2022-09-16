import React, { useState } from 'react'

// export default class OrderedList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (

//     );
//   }
// }

function OrderedList() {
  const [item, setItems] = useState('')
  const [list, setLists] = useState([item])
  const [order, setOrder] = useState('⬇️')

  const handleChange = (event:any) => {
    let value = event.target.value
    console.log(value, 'value')
    setItems(value)
  }

  console.log(item, 'item')

  const onEnterPress = (event:any) => {
    if (event.key === 'Enter') {
      let newArr = [...list, item]
      setLists(newArr)
    }
  }

  const handleOrder = (event:any) => {
    setOrder((prev) => (prev === '⬆️' ? '⬇️' : '⬆️'))
  }

  const showList = list.map((item, index) => <li key={index}>{item}</li>)

  let display = list.length === 0 ? '' : showList

  return (
    <>
      <input
        className='add-item'
        value={item}
        onKeyDown={onEnterPress}
        onChange={handleChange}
      />
      <button onClick={handleOrder}>{order}</button>
      <button className='clear-list' onClick={() => setLists([])}>
        ️🆑
      </button>
      <ul className='item-list'>{display}</ul>
    </>
  )
}

export default OrderedList
