import React, {useState} from 'react'

const CreateMeow = () => {
    const [textArea, setTextArea] = useState("");

    return (
        <form>
            <textarea onChange={(e) => setTextArea(e.target.value)}></textarea>
            
        </form>
    )
}

export default CreateMeow
