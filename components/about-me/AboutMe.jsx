import styles from './AboutMe.module.scss';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.paragraph}>
        <h3 className="secondary uppercase">Pierre Hedan</h3>
        <p className="white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis dolores sint voluptatibus fuga officiis beatae consequatur sequi incidunt iure tenetur?
          Qui excepturi dolorum voluptatibus explicabo dolor eveniet voluptate delectus eius?
        </p>
      </div>
      <img src="./assets/images/pierrehedan.png" alt="Photo of Pierre Hedan" />
    </div>
  </div>
);

export default AboutMe;
