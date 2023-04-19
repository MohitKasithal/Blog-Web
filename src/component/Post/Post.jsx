import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const PostContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

const PostImg = styled("img")({
  width: "100%",
  marginBottom: "1rem",
  borderRadius: "10px",
});

const PostTitle = styled("span")(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "1.6rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const PostDesc = styled("p")(({ theme }) => ({
  fontFamily: `"Varela Round", Arial, Helvetica, sans-serif`,
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "1.3rem",
  color: "#444444",
  marginTop: "15px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "6",
  WebkitBoxOrient: "vertical",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

const PostCats = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
}));

const PostCat = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  marginRight: "1rem",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.secondary,
  },
}));

function Post({ img }) {
  return (
    <PostContainer item xs={12} md={6} lg={4}>
      <PostImg src={img} alt="" />
      <div>
        <PostCats>
          <PostCat to="/posts?cat=Music">Music</PostCat>
          <PostCat to="/posts?cat=Life">Life</PostCat>
        </PostCats>
        <PostTitle>
          <Link to="/Post/abc" className="link">
            The Universal Language of Music: Its Power to Connect, Heal, and
            Inspire
          </Link>
        </PostTitle>
        <PostDesc>
          Music is a powerful force that has been a part of human culture since
          the beginning of time. It has the ability to evoke emotions, bring
          people together, and even heal. From classical compositions to modern
          pop hits, music has the power to move us in ways that words alone
          cannot. One of the great things about music is its universality. No
          matter where you come from or what language you speak, everyone can
          appreciate and enjoy music. It is a form of communication that
          transcends language barriers and brings people from all walks of life
          together. Music can also have a profound effect on our mental and
          emotional well-being. Listening to music can reduce stress, lower
          blood pressure, and even alleviate depression and anxiety. Studies
          have shown that people who regularly listen to music are happier, more
          relaxed, and better able to cope with the challenges of everyday life.
          In addition to its therapeutic benefits, music is also a means of
          self-expression. Whether you're a musician, a singer, or simply
          someone who enjoys singing along to their favorite songs, music
          provides a platform for creative expression and emotional release.
          Music can also bring people together in a unique way. Concerts,
          festivals, and other live music events provide opportunities for
          people to come together and connect over a shared love of music.
        </PostDesc>
      </div>
    </PostContainer>
  );
}
export default Post;
