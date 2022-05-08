import { DuplicateIcon } from '@heroicons/react/outline'
import useCopyToClipboard from 'hooks/useCopyToClipboard';

interface ClipboardCopyProps {
	copyText: string;
	className?: string;
}

const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ copyText, className }) => {
	const [isCopied, copy] = useCopyToClipboard();
	
	return (
		<div className={className}>
			<button className='space-x-2 flex items-center py-2 px-4 text-xs font-bold' onClick={() => copy(copyText)}>
				<DuplicateIcon className='w-6 h-6' />
				<span className=' font-bold'>{isCopied ? 'Copied!' : 'Copy'}</span>
			</button>
		</div>
	)
}

export default ClipboardCopy;