import {useEffect, useRef, useState} from "react"

export const useOutSide = (initialIsVisible) => {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef(null)

	const handleClickOutSide = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click',handleClickOutSide, true)
		
		return () => {
			document.removeEventListener('click', handleClickOutSide, true)
		}
	})

	return {ref, isShow, setIsShow}
}