import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  
	return (
		<section className={styles.hero}>
			<Image
				src={'/images/site/piramida.jpg'}
				alt='profile picture'
				width={300}
        height={300}
			/>

			<h1>Hi, I'm Vlado</h1>
			<p>this is a blog about reactjs</p>
		</section>
	);
};

export default Hero;
