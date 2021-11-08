import React from 'react'

import { Button } from 'melih123'
import 'melih123/dist/index.css'

const App = () => {
  return (
    <>
      <Button text='deneme123' onClick={() => alert('deneme')} />
      <br />
      <br />
      <Button
        text='primary'
        type='primary dashed'
        onClick={() => alert('deneme1')}
      />
      <br />
      <br />
      <Button
        text='dasheddashed'
        type='dashed'
        onClick={() => alert('deneme1')}
      />
      <br />
      <br />
      <Button text='text' type='text' onClick={() => alert('deneme1')} />
      <br />
      <br />
      <Button text='link' type='link' onClick={() => alert('deneme1')} />
    </>
  )
}

export default App
