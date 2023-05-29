import React from 'react';
import LIKE_LYRIC from "../queries/likeLyrics";
import {useMutation} from "@apollo/client";

const LyricList = ({ lyrics }) => {
  const [ likeLyric ] = useMutation(LIKE_LYRIC);
  const onClick = (id, likes) => {
    likeLyric({
      variables: {id},
      // makes it worse
      // optimisticResponse: {
      //   __typename: 'Mutation',
      //   likeLyric: {
      //     id: id,
      //     __typename: 'LyricType',
      //     likes: likes + 1,
      //   }
      // }
    }).then(r => console.log(r))
  }
  return(
    <ul className="collection">
      {lyrics.map(({ id, content, likes }) => {
        return(
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              {likes}

              <i
                className="material-icons"
                onClick={()=>onClick(id)}
              >
                thumb_up
              </i>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default LyricList;