import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import ADD_LYRIC from "../queries/addLyric";

const LyricCreate = ({ id }) => {
  const [content, setContent] = useState('');
  const [addLyric] = useMutation(ADD_LYRIC);

  const onSubmit = (e) =>{
    e.preventDefault();
    addLyric({
      variables: {
        content,
        songId: id,
      }
    }).then(() => setContent(''));
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>Add a Lyric</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  )
}

export default LyricCreate;
