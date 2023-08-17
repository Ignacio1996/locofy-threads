import CarouselImage from "./carousel-image";
import styles from "./carousel.module.css";
const Carousel = ({ showCarrossel }) => {
  return (
    showCarrossel && (
      <div className={styles.carrossel}>
        <CarouselImage rectangle9="/threadsImages/rectangle-91@2x.png" />
        <CarouselImage rectangle9="/threadsImages/rectangle-8@2x.png" />
      </div>
    )
  );
};

export default Carousel;
