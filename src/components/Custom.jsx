import React,{useState} from 'react'

const Custom = () => {
    const [text,setText]=useState("")
    const [soyad,setSoyad]=useState("")
    const [error,setError]=useState(false)
    const [soyadError,setSoyadError]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.length < 3){
            setErrorMessage("İsim en az 3 hane olmalı")
            setError(true)
            setTimeout(()=>{
                setError(false)
                setErrorMessage("")
            },3000)
            return
        }
        if(text === ""){
            setErrorMessage("İsim boş bırakılamaz")
            setError(true)
            setTimeout(()=>{
                setError(false)
                setErrorMessage("")
            },3000)
            return
        }
        if(soyad === ""){
            setErrorMessage("Soyisim boş bırakılamaz")
            setSoyadError(true)
            setTimeout(()=>{
                setSoyadError(false)
                setErrorMessage("")
            },3000)
            return
        }
        if(soyad.length < 3 ){
            setErrorMessage("Soyisim en az 3 hane olmalı")
            setSoyadError(true)
            setTimeout(()=>{
                setSoyadError(false)
                setErrorMessage("")
            },3000)
            return
        }
        alert(text)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeHolder="isminizi girin" value={text} onChange={(e)=>setText(e.target.value)}/>

                {
                    error && (
                        <p>{errorMessage}</p>
                    )
                }
                <input type="text" value={soyad} onChange={(e)=>setSoyad(e.target.value)}/>
                {
                    soyadError && (
                        <p>{errorMessage}</p>
                    )
                }
                <button type="submit">Kaydet</button>
            </form>
        </div>
    )
}

export default Custom
