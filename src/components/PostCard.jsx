import React from "react"
// import { Link } from "gatsby";
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import PropTypes from "prop-types"

const PostCardContainer = styled("div")`
  border: 1px solid ${colors.grey200};
  padding: 3em 2.5em 2.25em 2.5em;
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  a {
      text-decoration: none;
      color: currentColor;  
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .PostCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`

const PostTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
`

const PostDescription = styled("div")`
  margin-top: 2em;
  margin-bottom: 4em;

  p:last-of-type {
    margin: 0;
  }
`

const PostCardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const PostCard = ({ title, description, link }) => (
  <PostCardContainer className="BlogPostCard">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <PostTitle>{title[0].text}</PostTitle>
      <PostDescription>{RichText.render(description)}</PostDescription>
      <PostCardAction className="PostCardAction">
        Visit <span>&#8594;</span>
      </PostCardAction>
    </a>
  </PostCardContainer>
)

export default PostCard

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
