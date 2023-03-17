import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed({profile}) {
  const HomeFeed = () => {
    return (
      <>
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
      </>
    );
  }
  const ProfileFeed = (props) => {
    const posts = Posts.filter(post => post.userId === props.id);  
    return (
      <>
        {
          posts.map((p) => (
            <Post key={p.id} post={p} />
          ))
        }
      </>
    );
  }

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {profile ? <ProfileFeed id={profile}/> : <HomeFeed />}
      </div>
    </div>
  );
}
