import './App.css'
import styles from "./App.module.css";


interface HeaderProps {
    profilePic: string;
    name: string;
    hoursAgo: number;
}

const Header = ({profilePic, name, hoursAgo}: HeaderProps) => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.options}>
                    <i className="fa fa-chevron-down"></i>
                </div>
                <img
                    className={styles.co_logo}
                    // src="https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png"
                    src={profilePic}
                />
                <div className={styles.co_name}>
                    <a href="#">{name}</a>
                </div>
                <div className={styles.time}>
                    <a href="#">Just {hoursAgo} lives ago</a> · <i className="fa fa-globe"></i>
                </div>
            </div>
        </>
    )
};

interface ContentProps {
    content: string;
    image: string;
    imageTitle: string;
    imageDescription: string;
    imageLink: string;

}

const Content = ({content, image, imageTitle, imageDescription, imageLink}: ContentProps) => {
    return (
        <>
            <div className={styles.content}>
                <p>
                    {content} 😸
                </p>
            </div>
            <div className={styles.reference}>
                <img className={styles.reference_thumb}
                     src={image}/>
                <div className={styles.reference_content}>
                    <div className={styles.reference_title}>
                        {imageTitle}
                    </div>
                    <div className={styles.reference_subtitle}>
                        {imageDescription}
                    </div>
                    <div className={styles.reference_font}>{imageLink}</div>
                </div>
            </div>
        </>
    );
};

const SocialFooter = () => {
    return (
        <>
            <div className={styles.social}>
                <div className={styles.social_content}>
                </div>
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

interface CardProps {
    profilePic: string;
    name: string;
    hoursAgo: number;
    content: string;
    image: string;
    imageTitle: string;
    imageDescription: string;
    imageLink: string;
}

const Card = ({profilePic, name, hoursAgo, content, image, imageTitle, imageDescription, imageLink}:CardProps) => {
    return (
        <>
            <div className={styles.f_card}>
                <Header
                    hoursAgo={hoursAgo}
                    name={name}
                    profilePic={profilePic}/>
                <Content
                    content={content}
                    image={image}
                    imageDescription={imageDescription}
                    imageLink={imageLink}
                    imageTitle={imageTitle}/>
                <SocialFooter/>
            </div>
        </>
    );
};


function App() {
    return (
   <>
       <Card
            hoursAgo={9}
            name={"Nicolas Cage"}
            profilePic={"https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png"}
            content={"Do you know why cats are excellent programmers? Because they always purr-fect their code!"}
            image={"https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png"}
            imageDescription={"Learn the art of napping, feline style! Just follow these simple tips."}
            imageLink={"catnaptips.com"}
            imageTitle={"The Ultimate Guide to Napping Like a Cat | CatNapTips"}
       />

       <Card
            hoursAgo={9}
            name={"Nicolas Cage"}
            profilePic={"https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-cat.png"}
            content={"Do you know why cats are excellent programmers? Because they always purr-fect their code!"}
            image={"https://raw.githubusercontent.com/similonap/json/refs/heads/master/images/social-hammock.png"}
            imageDescription={"Learn the art of napping, feline style! Just follow these simple tips."}
            imageLink={"catnaptips.com"}
            imageTitle={"The Ultimate Guide to Napping Like a Cat | CatNapTips"}
       />
   </>
    );
}

export default App
