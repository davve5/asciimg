import { useEffect, useState } from 'react'
import { map } from 'utils'


type ReturnType = string[]

const useAsciiImage = (density:string, imgSrc: string): ReturnType => {
	const [asciiImage, setAsciiImage] = useState<string[]>([]);

	useEffect(() => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d')!;

		const img = new Image()
		img.src = imgSrc;

		const handleImage = () => {
			canvas.width = img.width;
			canvas.height = img.height;

			const { width, height } = canvas;
			
			console.log(width, height, img.width, img.height)

			context.drawImage(img, 0, 0, width, height);

			const imageData = context.getImageData(0, 0, width, height).data;

			const ascii: string[] = [];
			for (let y = 0; y < height; y++) {
				const line: string[] = [];
				for (let x = 0; x < width; x++) {
					const pixelIndex = (x + y * width) * 4;

					const r = imageData[pixelIndex + 0];
					const g = imageData[pixelIndex + 1];
					const b = imageData[pixelIndex + 2];

					const avg = (r + g + b) / 3;

					const charIndex = Math.floor(map(avg, 0, 255, density.length, 0));

					const char = density.charAt(charIndex);

					line.push(char === ' ' ? '\u00a0' : char);
				}
				ascii.push(line.join(''));
			}
			setAsciiImage(ascii);
		}

		img.addEventListener('load', handleImage);
	
		return () => {
			img.removeEventListener('load', handleImage);
		}

	}, [imgSrc]);

	return asciiImage
}

export default useAsciiImage