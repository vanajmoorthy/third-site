import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Layout from "components/Layout"

const PostCategory = styled("div")`
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: ${colors.grey600};

  h5 {
    margin-top: 0;
    margin-bottom: 1em;
  }
`

const PostTitle = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-top: 0;
  }
`

const PostBody = styled("div")`
  max-width: 550px;
  margin: 0 auto;

  p {
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    margin-bottom: 0em;
    margin-top: 1.5em;
  }

  code {
    background-color: #d3d3d3;
    padding: 3px;
  }

  a {
    text-decoration: underline;
    transition: all 100ms ease-in-out;
    font-weight: 600;

    &:nth-of-type(1) { color: ${colors.blue500}; }
    &:nth-of-type(2) { color: ${colors.orange500}; }
    &:nth-of-type(3) { color: ${colors.purple500}; }
    &:nth-of-type(4) { color: ${colors.green500}; }
    &:nth-of-type(5) { color: ${colors.teal500}; }
    &:nth-of-type(6) { color: ${colors.blue500}; }
    &:nth-of-type(7) { color: ${colors.orange500}; }
    &:nth-of-type(8) { color: ${colors.purple500}; }
    &:nth-of-type(9) { color: ${colors.green500}; }
    &:nth-of-type(10) { color: ${colors.teal500}; }

    

    &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) { color: ${colors.blue600};    background-color: ${colors.blue200};}
        &:nth-of-type(2) { color: ${colors.orange600};  background-color: ${colors.orange200};}
        &:nth-of-type(3) { color: ${colors.purple600};  background-color: ${colors.purple200};}
        &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
        &:nth-of-type(5) { color: ${colors.teal600};    background-color: ${colors.teal200};}
        &:nth-of-type(6) { color: ${colors.blue600};    background-color: ${colors.blue200};}
        &:nth-of-type(7) { color: ${colors.orange600};  background-color: ${colors.orange200};}
        &:nth-of-type(8) { color: ${colors.purple600};  background-color: ${colors.purple200};}
        &:nth-of-type(9) { color: ${colors.green600};   background-color: ${colors.green200};}
        &:nth-of-type(10) { color: ${colors.teal600};    background-color: ${colors.teal200};}

    }

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const Post = ({ post, meta }) => {
  return (
    <>
      <Helmet
        title={"Vanaj Moorthy"}
        titleTemplate={"Vanaj Moorthy"}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `Vanaj Moorthy's Personal Site`,
          },
          {
            property: `og:description`,
            content: meta.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: meta.author,
          },
          {
            name: `twitter:title`,
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
        ].concat(meta)}
      />
      <Layout>
        <PostTitle>
          <h1>Vanaj Moorthy</h1>
        </PostTitle>
        <PostCategory>
          {"What does he know? Does he know things? Let's find out."}
        </PostCategory>
        <PostBody>
          <p>
            Hi, my name is Vanaj. I was born on the 11th of April, 2002 in{" "}
            <a
              href="https://en.wikipedia.org/wiki/New_Delhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              New Delhi, India
            </a>
            . At the age of four, I began my schooling at{" "}
            <a
              href="http://tsrs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Shri Ram School
            </a>
            , Vasant Vihar. After seven years of a loosely-structured primary
            "education", I made my way to the senior branch of the school. Since
            then, I've mostly spent my time pursuing a wide range of interests,
            avoiding expulsion, convincing people I sell whale meat on the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Deep_web"
              target="_blank"
              rel="noopener noreferrer"
            >
              deep web,
            </a>{" "}
            and starting grade-wide{" "}
            <a
              href="https://en.wikipedia.org/wiki/Social_revolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              societal revolutions
            </a>{" "}
            centred around{" "}
            <a
              href="https://definitions.uslegal.com/p/petty-larceny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              petty larceny
            </a>
            .{" "}My subect combination includes Mathematics, Computer Science,
            Psychology, English, and Elective English.
          </p>
          <ul>
            <li>
              <h2>
                CompSki{" "}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  💻
                </span>
              </h2>
              <p>
                My journey with programming truly began when I was in the eighth
                grade. My friend Shiv had learnt some basic markup and was
                trying to show me how you could create a website with HTML. I
                dabbled with HTML and CSS for a short while but my passion for
                programming and computer science didn't arise until the
                sixteenth year of my life. I choose Computer Science and wrote
                my first line of Java code{" "}
                <code>System.out.println("Hello, World");</code> in early April.
                My journey with programming only escalated from there, my CS
                teacher, Rashmita Ma'am, was incredibly helpful and informative
                and my friend{" "}
                <a
                  href="https://kabiroberai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Kabir Oberai</u>
                </a>{" "}
                (WWDC Scholar 2017) spent most of his free time teaching me. The
                language I'm most proficient in today is probably{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>JavaScript</u>
                </a>{" "}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  🤮
                </span>
                . I have extensively worked in web-development using multiple
                JavaScript libraries and I have an in-depth knowledge of{" "}
                <a
                  href="https://www.java.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Java</u>
                </a>{" "}
                as well. I'm fairly proficient in{" "}
                <a
                  href="https://www.instagram.com/p/BuJ0finBFO-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>C</u>
                </a>{" "}
                and I've taught a{" "}
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Python</u>
                </a>{" "}
                workshop with{" "}
                <a
                  href="https://thegirlcode.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>The Girl Code</u>,
                </a>{" "}
                an organisation I work for. I've also experimented with app
                development using{" "}
                <a
                  href="https://flutter.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Flutter</u>
                </a>{" "}
                and{" "}
                <a
                  href="https://dart.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Dart</u>
                </a>
                .
              </p>
            </li>

            <li>
              <h2>
                Design{" "}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  🎨
                </span>
              </h2>
              <p>
                I was eleven when I was introduced to the wonder world of{" "}
                <a
                  href="https://www.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Adobe</u>.
                </a>{" "}
                My sixth grade computers teacher introduced our whole class to{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Adobe_Flash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Adobe Flash Professional CS6</u>.
                </a>{" "}
                Now while the bright minds of 6-C weren't particularly
                interesting in animating the Hindu god Ganesha, I learnt with
                fervour and even managed to animate a police officer getting
                murdered by the end of the year. I've always been abysmal at
                hand-drawn art, so the fact that I could do something that other
                people admired and considered art on a computer blew my mind.
                Now since{" "}
                <a
                  href="https://www.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Adobe</u>
                </a>{" "}
                is the {" "}<em>most
                corrupt and capitalist </em> {" "}
                company ever, I didn't get to explore my newfound love for animation
                till much later in my life.
                <br />
                <br />I was in the ninth grade when my brother went to
                university to study architecture. This is when my journey with
                design truly began. His course required him to use a lot of{" "}
                <a
                  href="https://www.adobe.com/creativecloud.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Adobe Creative Cloud</u>
                </a>
                {" "}software, so he decided to buy a subscription using his new
                student discount. This meant that I now had access to a whole
                world of software that I hadn't touched before. By this point{" "}
                <a
                  class="sublinks"
                  href="https://en.wikipedia.org/wiki/Adobe_Flash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Adobe Flash Professional CS6</u>
                </a>{" "}
                had become deprecated and the new equivalent was{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Adobe_Animate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Adobe Animate CC</u>.
                </a>{" "}
                I managed to create two basic frame-by-frame animations and
                showed them off to my friends. But by this point, I had become
                good friends with someone who, to this day, has an
                unquantifiable influence on my life.{" "}
                <a
                  class="sublinks"
                  href="https://srijonsinha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Srijon Sinha</u>
                </a>
                {" "}(A.K.A Josh). He introduced me to the wonderful world of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Adobe_After_Effects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>After Effects CC</u>.
                </a>{" "}
                My first After Effects animation was a bunch of frame-by-frame
                doodles on top of a video of me playing the guitar. This, while
                not being the kind of animation After Effects is suited for, got
                me sufficiently acquainted with the sotware and my journey only
                skyrocketed from there. Today, I've made multiple personal
                motion graphics projects, worked on commissioned animations,
                videos, album covers, and illustrations for other people, and
                created pitch videos and app designs for multiple hackathon
                winning apps. You can find the vast majority of my work{" "}
                <a href="https://drive.google.com/open?id=1T5atrBH2JLKpv2L_KbsqZDGrpOcg82Dg">
                  <u>here</u>.
                </a>
              </p>
            </li>

            <li>
              <h2>
                Music{" "}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  🎸
                </span>
              </h2>
              <p>
                {" "}
                I was in the fifth grade when I started playing the drums. My
                three best friends at the time all played instruments. I'd be
                lying if I didn't say I felt left out. So I went and enrolled at{" "}
                <a
                  href="https://www.justdial.com/Delhi/Asha-Music-Academy-Vasant-Kunj/011PXX11-XX11-110326131506-Q1X8_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Asha Music Academy</u>.
                </a>{" "}
                It was there that my love for music really began. Some time
                later, my mother told me that she wanted me to start playing the
                guitar, "Drums aren't a{" "}<em>real</em>{" "}
                instrument", seemed to be a popular notion. So I enrolled in
                guitar classes. I soon learnt that I wasn't cut out of string
                instruments, and my hatred for the guitar only intensified. I
                thought a change of music schools might help, so I switched my
                guitar classes to a different music academy near my house. It
                was here that my hatred for the guitar <em>really</em> peaked. I
                left six months later, swearing to never touch that cursed
                instrument ever again. A few years went by, I continued playing
                the drums and my guitar sat collecting dust in the far corner of
                my room. It wasn't till the fourteenth year of my life when I
                picked up my guitar again. I started re-learning the instrument,
                with intense dedication and passion and today, I can safely say
                that I'm a proficient guitarist. As time went by, I learnt the
                bass, the keyboard, the ukulele, and a whole lot of music
                theory. My favourite instrument to play today would probably be
                the guitar, even though I mostly perform as a bassist.
              </p>
            </li>

            <li>
              <h2>
                Public Speaking{" "}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  🎤
                </span>
              </h2>
              <p>
                {" "}
                I began my journey with public speaking in the ninth grade, when
                I participated in Jaco Model United Nations, in Calcutta, India.
                I left with the award of <em>Verbal Mention</em>, and was
                intensely inspired to continue on this trajectory. Since then,
                I've participated in numerous local and national MUNs, a
                plethora of debates, a few international MUNs, and have won
                multiple awards for public speaking.
              </p>
            </li>

            <li>
              <h2>
                Writing{" "}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  ✍️
                </span>
              </h2>
              <p>
                I've been a voracious reader for as long as I can remember. I've
                consumed literature with gusto and naturally, this progressed to
                me trying my hand at creative writing. I wrote my first proper
                short story during English class, in grade five. It was called
                "The Attack of the Telephone Monster", and I immensely enjoyed
                writing it. Since then, I've continued writing short stories,
                informative articles, and even ran a blog (deprecated) for four
                years. I've exercised my propensity for writing in the{" "}
                <a href="https://www.tsrsimprint.com/" target="blank">
                  <u>Editorial Board</u>
                </a>{" "}
                of my school, of which I've been a member for seven years. I now
                hold the office of Senior Literary Editor and spend most of my
                time editing articles, formatting newsletters, and providing
                feedback on the writing of my juniors.
              </p>
            </li>
          </ul>
        </PostBody>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const postContent = data.prismic.allPosts.edges[0].node
  const meta = data.site.siteMetadata
  return <Post post={postContent} meta={meta} />
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  query PostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            post_title
            post_hero_annotation
            post_category
            post_body
            post_preview_description
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
