import { Link } from "react-router-dom";
import "./Post.css";

function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/Post/abc" className="link">
            The Universal Language of Music: Its Power to Connect, Heal, and
            Inspire
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Music is a powerful force that has been a part of human culture since
        the beginning of time. It has the ability to evoke emotions, bring
        people together, and even heal. From classical compositions to modern
        pop hits, music has the power to move us in ways that words alone
        cannot. One of the great things about music is its universality. No
        matter where you come from or what language you speak, everyone can
        appreciate and enjoy music. It is a form of communication that
        transcends language barriers and brings people from all walks of life
        together. Music can also have a profound effect on our mental and
        emotional well-being. Listening to music can reduce stress, lower blood
        pressure, and even alleviate depression and anxiety. Studies have shown
        that people who regularly listen to music are happier, more relaxed, and
        better able to cope with the challenges of everyday life. In addition to
        its therapeutic benefits, music is also a means of self-expression.
        Whether you're a musician, a singer, or simply someone who enjoys
        singing along to their favorite songs, music provides a platform for
        creative expression and emotional release. Music can also bring people
        together in a unique way. Concerts, festivals, and other live music
        events provide opportunities for people to come together and connect
        over a shared love of music. These events can create a sense of
        community and belonging, and give people a chance to experience the
        magic of live music in a way that can't be replicated through headphones
        or speakers. In short, music is a powerful force that has the ability to
        bring people together, heal, and inspire. Whether you're listening to
        your favorite songs on your commute to work, attending a live concert
        with friends, or simply singing in the shower, music has the ability to
        enrich our lives in countless ways. So next time you're feeling down or
        in need of inspiration, turn up the volume and let the music take you
        away.
      </p>
    </div>
  );
}

export default Post;
