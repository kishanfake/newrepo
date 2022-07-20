import React from 'react'
import CButton from '../components/CButton/cButton'
import CInput from '../components/CInput/CInput'

export default function Form() {
    return (
        <>
            <div>
                <CInput
                    type="text"
                    name="input-Box"
                    onChange={""}
                    placeHolder="enter here"
                    datavalue="kishgaab"
                />
                 <CInput
                    type="text"
                    name="input-Box"
                    onChange={""}
                    placeHolder="enter here"
                    datavalue="kishgaab"
                />
                <CButton name="submit" />
            </div>

        </>

    )
}
