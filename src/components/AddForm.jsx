import React from 'react'

function AddForm() {
  return (
    <div>
        <form action="post">
            <input type="text" name='title' />
            <textarea name="description" id="" cols="5"></textarea>
        </form>
    </div>
  )
}

export default AddForm