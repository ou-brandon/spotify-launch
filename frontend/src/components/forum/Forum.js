import { TextField, Card, Button } from '@mui/material'
import { useRef} from "react"


const Forum = (props) => {
    // console.log(props.user)

    const postRef = useRef();
    const submitPost = (e) => {
        e.preventDefault();
        console.log(postRef.current.value)
    }

    return (
    <>
        <h1>Forum</h1>

        <Card>
        <form onSubmit={submitPost}>
            <TextField label="Write your post here..." multiline rows={4} inputRef={postRef}></TextField>
            <Button type="submit">Submit</Button>
        </form>
        </Card>
    </>
    )

}

export default Forum;