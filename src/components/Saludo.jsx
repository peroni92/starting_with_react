import React from 'react'

export default function Saludo(props) {

    console.log(props)

  return (
    <div>Saludo soy {props.name} y tengo {props.edad} </div>
  )
}
