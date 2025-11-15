// import './App.css'

interface HeaderProps {
  profilePic: string;
  name: string;
  livesAgo: number;
}

interface ContentProps {
  content: string;
  image: string;
  imageTitle: string;
  imageDescription: string;
  imageLink: string;
}

interface CardProps {
  profilePic: string;
  name: string;
  livesAgo: number;
  content: string;
  image: string;
  imageTitle: string;
  imageDescription: string;
  imageLink: string;
}

const Header = ({profilePic, name, livesAgo}: HeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.options}>
          <i className="fa fa-chevron-down"></i>
        </div>
        <img className={styles.co_logo} src={profilePic} />
        <div className={styles.co_name}>
          <a href="#">{name}</a>
        </div>
        <div className={styles.time}>
          <a href="#">Just {livesAgo} lives ago</a> ·{" "}
          <i className="fa fa-globe"></i>
        </div>
      </div>
    </>
  );
};

const Content = ({
  content,
  image,
  imageTitle,
  imageDescription,
  imageLink,
}: ContentProps) => {
  return (
    <>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <div className={styles.reference}>
        <img className={styles.reference_thumb} src={image} />
        <div className={styles.reference_content}>
          <div className={styles.reference_title}>{imageTitle}</div>
          <div className={styles.reference_subtitle}>{imageDescription}</div>
          <div className={styles.reference_font}>{imageLink}</div>
        </div>
      </div>
    </>
  );
};

const SocialContent = () => {
  return (
    <>
      <div className={styles.social}>
        <div className={styles.social_content}></div>
        <div className={styles.social_buttons}>
          <span>
            <i className="fa fa-thumbs-up"></i>Paws Up!
          </span>
          <span>
            <i className="fa fa-comment"></i>Meow-back
          </span>
          <span>
            <i className="fa fa-share"></i>Share the Cat-titude
          </span>
        </div>
      </div>
    </>
  );
};

const Card = ({
  profilePic,
  name,
  livesAgo,
  content,
  image,
  imageTitle,
  imageDescription,
  imageLink,
}: CardProps) => {
  return (
    <>
      <div className={styles.f_card}>
        <Header profilePic={profilePic} name={name} livesAgo={livesAgo} />
        <Content
          content={content}
          image={image}
          imageTitle={imageTitle}
          imageDescription={imageDescription}
          imageLink={imageLink}
        />
        <SocialContent />
      </div>
    </>
  );
};

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Card
        profilePic={
          "https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png"
        }
        name={"Purrfectly Pawsome"}
        livesAgo={9}
        content={
          "Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"
        }
        image={
          "https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png"
        }
        imageTitle={"The Ultimate Guide to Napping Like a Cat | CatNapTips"}
        imageDescription={
          "Learn the art of napping, feline style! Just follow these simple tips."
        }
        imageLink={"catnaptips.com"}
      />
    </>
  );
}

export default App;
