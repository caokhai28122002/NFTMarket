import React from 'react'

type Props = {
    text: string
    className?: string
}

const TextGradient = ({ text, className }: Props) => {
    return (
        <p className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${className}`}>
            {text}
        </p>
    )
}

export default TextGradient