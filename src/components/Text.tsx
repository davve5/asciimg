
interface TextProps {
	ascii: string[];
}

const Text: React.FC<TextProps> = ({ ascii }) => (
	<div className="w-fit flex flex-col text-xs leading-none ">
		{
			ascii.map((line, index) => (
				<span className=' w-fit' key={index}>{line}</span>
			))
		}
	</div>
)

export default Text;