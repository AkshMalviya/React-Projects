import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
	const [length, setLength] = useState(8)
	const [isNumber, setIsNumber] = useState(false)
	const [isSpecialChar, setIsSpecialChar] = useState(false)
	const [password, setPassword] = useState("")
	const passwordRef = useRef(null)

	const passwordGenerator = useCallback(() => {
		let pass = ''
		let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		if (isNumber) char += '1234567890'
		if (isSpecialChar) char += "!@#$%^&*()_+-=><?/"

		for (let i = 0; i < length; i++) {
			let index = Math.floor(Math.random() * char.length + 1)
			pass += char.charAt(index)
		}
		setPassword(pass)
	}, [isNumber, isSpecialChar, length, setPassword])

	const copyToClip = () => {
		passwordRef.current.className.add({ backgroundColor: "green" })
		window.navigator.clipboard.writeText(password)
	}

	useEffect(() => {
		passwordGenerator()
	}, [isNumber, isSpecialChar, length, setPassword])
	return (
		<>
			<div className='bg-slate-900 w-screen max-w-md px-4 mx-auto my-8 text-center'>
				<h1 className='text-2xl text-white'>Password Generator</h1>
				<div className='flex overflow-hidden mb-4 bg-gray-700 rounded-xl'>
					<input type="text"
						value={password}
						readOnly
						className='w-full outline-none py-1 px-3' placeholder='Password'
						ref={passwordRef}
					/>
					<button onClick={copyToClip} className='outline-none bg-blue-600 text-white shrink-0 px-3 py-0.5'>Copy</button>
				</div>
				<div className='text-sm gap-x-2 flex text-orange-500'>
					<div className="gap-x-1 items-center flex">
						<input
							type="range"
							min={6}
							max={20}
							value={length}
							onChange={(e) => { setLength(e.target.value) }}
						/>
						<label className=''>Length: {length}</label>
					</div>
					<div className="gap-x-1 items-center flex">
						<input
							id='numbers'
							type="checkbox"
							defaultChecked={isNumber}
							onChange={() => { setIsNumber((prev) => !prev) }}
						/>
						<label htmlFor="numbers">
							Numbers
						</label>
					</div>
					<div className="gap-x-1 items-center flex">
						<input
							id='specialChar'
							type="checkbox"
							defaultChecked={isSpecialChar}
							onChange={() => { setIsSpecialChar((prev) => !prev) }}
						/>
						<label htmlFor="specialChar">
							Special Character
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
