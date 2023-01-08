const Form = ({ inputs, handleInput, handleSubmit }) => {
  return (
    <div>
        <input value={inputs[0]} id="user1" onChange={handleInput} />
        <input value={inputs[1]} id="user2" onChange={handleInput} />
        <button onClick={handleSubmit}> GO! </button>
    </div>
  )
}

export default Form