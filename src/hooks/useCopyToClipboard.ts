import { useEffect, useState } from 'react'

const COPY_TIMEOUT = 1500 as const;

type CopiedValue = boolean
type CopyFunc = (text: string) => Promise<boolean>

const useCopyToClipboard = (): [CopiedValue, CopyFunc] => {
  const [isCopied, setIsCopied] = useState<CopiedValue>(false)

  const copy: CopyFunc = async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setIsCopied(false)
      return false
    }
  }

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
      setIsCopied(false)
      }, COPY_TIMEOUT)

      return () => {
        clearTimeout(timeoutId)
      }
    }

  }, [isCopied])

  return [isCopied, copy]
}

export default useCopyToClipboard