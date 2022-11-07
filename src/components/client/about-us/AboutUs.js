import { Container } from "@mui/material";
import styles from "./AboutUs.module.css";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { ClientLayoutContext } from "../../../contexts/providers/client/ClientLayoutProvider";

const AboutUs = (props) => {
  const { changeLang, t, lang } =
    useContext(ClientLayoutContext);

  return (
    <>
        <Helmet>
          <title>{t('about_us')}</title>
          <meta name="description" content="About TienDa Store" />
        </Helmet>

      <div className={styles["content"]}>
        <Container>
          <h1>ABOUT US</h1>
          <h2>Welcome to our shop online</h2>
          <p>
            We aim to offer our customers a variety of the latest Watches. We’ve
            come a long way, so we know exactly which direction to take when
            supplying you with high quality yet budget friendly products. We
            offer all of this while providing excellent customer service and
            friendly support.
          </p>
          <p>
            We always keep an eye on the latest trends in Sneaker and put our
            customers’ wishes first. That is why we have satisfied customers all
            over the world, and are thrilled to be a part of the Sneaker
            industry.
          </p>
          <p>
            The interests of our customers are always the top priority for us,
            so we hope you will enjoy our products as much as we enjoy making
            them available to you.
          </p>
          <h3>What is an About Us Page?</h3>
          <p>
            An About Us Page is a page on your website that tells your readers
            all about you. It includes a detailed description covering all
            aspects of your business and you as entrepreneurs. This includes the
            products or services you are offering, how you came into being as a
            business, your mission and vision, your aim, and maybe something
            about your future goals too. Your “About Us” page is your perfect
            opportunity to tell a compelling story about yourself and your
            business.
          </p>
          <h3>About Us Page: What Should an About Us Page Include?</h3>
          <p>
            It is important not to overlook the marketing potential that lies
            within the content of your website’s About Us page. The About Us
            page plays a large part in the impression you leave on a visitor to
            your website. It is your chance to make the best out of this
            opportunity and present yourself and your brand in the best possible
            way. This is where people come to learn more about your brand and
            the people behind it. There’s also a high chance that your About Us
            page will be your most frequently viewed page. You need to make sure
            that the information you add on the About Us page accurately
            represents who you are as a brand. That’s why we’ve included a list
            that you can go through to make sure you haven’t missed anything
            crucial.
          </p>
          <ol>
            <li>
              <h4>Vision and Mission</h4>
              <p>
                Start your About Us page by telling your customers about
                yourself. What is unique about you, what are your key features
                and what is your mission? Try to stand out by conveying your
                values and culture as a brand, or what brought your company
                together. Use this area to fully answer the question of who you
                are as a brand, and what you represent. This does not means that
                it has to be overly lengthy, but you can nonetheless use this
                space to communicate yourself in the way you are comfortable
                with, with your audience.
              </p>
            </li>
            <li>
              <h4>Your History</h4>
              <p>
                Take the visitors on your website to a trip down memory lane,
                and give them an insight to the history behind your store. Here,
                you can show them where, how, and when you started, and
                everything your business has accomplished on the way. This is
                you chance to share your relevant milestones and achievements
                relating to your business in an engaging way. You can even
                choose to present your history to your viewers in the form of a
                timeline, which allows you to display a large amount of
                information in a visually engaging manner. Your customers or
                potential customers might be interested in seeing how you grew
                over the years.
              </p>
            </li>
            <li>
              <h4>Team Member Profiles</h4>
              <p>
                Add an emotional element to your About Us page by adding details
                of the people that are driving the passion at your business.
                People find it easier to connect with human beings, so allow the
                personality of your crew to shine through the About Us page.
              </p>
            </li>
            <li>
              <h4>Multimedia & Infographics</h4>
              <p>
                A well-built infographic might help visitors remember about you
                or your business better than any amount of words. So if you
                think it works better for your brand or business, skip the
                lengthy description, or add a well-designed graphic that can
                help your visitors understand your concept. Or maybe you would
                like to add a cool video about how your business was created, or
                about your story and let it speak for itself.
              </p>
            </li>
          </ol>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
