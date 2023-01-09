const Form = ({ inputs, handleInput, handleSubmit }) => {
  return (
    <div>
        Do @<input value={inputs[0]} id="user1" onChange={handleInput} />
        and @<input value={inputs[1]} id="user2" onChange={handleInput} />
        follow each other?
        <button onClick={handleSubmit}> Go! </button>
    </div>
  )
}

export default Form