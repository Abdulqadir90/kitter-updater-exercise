import React, {useState} from 'react'

const CreateMeow = () => {
    const [textArea, setTextArea] = useState("");
    const [hashtag, setHashtag] = useState("");


    function handleSubmit(e) {
        e.preventDefault()
        fetch(
            "https://cyf-cors-api.herokuapp.com/meow",
            {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({textArea, hashtag})
         })
         ````
    }

    return (
        <form>
            <textarea  value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
            <input type="text" value={hashtag} onChange={(e) => setHashtag(e.target.value)}></input>
            <button type="submitting"  onSubmit={handleSubmit}></button>
            
        </form>
    )
}

export default CreateMeow
