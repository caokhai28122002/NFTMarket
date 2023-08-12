import React from 'react'

type Props = {
    text: string
    className?: string
}

const TextImgBackground = ({ text, className }: Props) => {
    return (
        <p className={`bg-[url(/images/1.jpg)] bg-cover bg-center bg-clip-text text-transparent ${className}`}>{text}</p>
    )
}

export default TextImgBackground