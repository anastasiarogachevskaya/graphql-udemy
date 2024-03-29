import {gql} from "@apollo/client";

const LIKE_LYRIC = gql`
mutation likeLyric($id: ID!) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;

export default LIKE_LYRIC;
