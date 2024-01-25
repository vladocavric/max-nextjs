'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './image-picker.module.scss';

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState(null);
	const imageInputRef = useRef();
	function handleClick() {
		imageInputRef.current.click();
	}

	function handleImageChange(e) {
		// const file = imageInputRef.current.files[0];
		const file = e.target.files[0];

		if (!file) {
            setPickedImage(null);
        }

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	}

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && (
						<Image src={pickedImage} alt='Preview' fill />
					)}
				</div>
				<input
					type='file'
					id={name}
					name={name}
					accept='.jpg,.png,.jpeg'
					className={styles.input}
					ref={imageInputRef}
					onChange={handleImageChange}
                    required
				/>
				<button className={styles.button} onClick={handleClick}>
					Choose Image
				</button>
			</div>
		</div>
	);
}
