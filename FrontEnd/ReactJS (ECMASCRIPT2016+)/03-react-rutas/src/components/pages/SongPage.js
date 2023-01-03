import { useParams } from "react-router";
import SongDetails from "../SongDetails";

const SongPage = ({mySongs}) => {
    let {id} = useParams(),
    currentSong = mySongs[id],
     {search, lyric, bio} = currentSong;
    // console.log(id, mySongs, mySongs[id]);
    return (
        <SongDetails search={search} lyric={lyric} bio={bio} />
    )
}

export default SongPage;
