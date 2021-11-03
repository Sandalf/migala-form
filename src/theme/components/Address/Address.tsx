import React, {useContext, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {SelectInput} from "src/theme/components/Select/SelectInput";
import {Option} from "src/model/Survey/SurveyModel";
import {ZipCodesResponse, ZipCode} from "src/model/ZipCodes/ZipCodesResponse";
import {RegularText} from "src/theme/styles/generalstyles/Text";
import Geonames from "geonames.js";
import {FormContext} from "src/context/FormContext";

interface AddressProps {
    field: any
}
export const Address = ({ field }: AddressProps) => {

    const {formResponses, setFormResponses} = useContext(FormContext)

    const [inputValue, setInputValue] = useState("")
    const [ selection, setSelection ]:any = useState({})

    const timeOut:any = useRef(null)

    const [locations, setLocations]:any = useState([])

    useEffect(() => {
        if(!field) return

        let option: Option = formResponses[field]

        if(option){
            setSelection(option)
            setInputValue(option.value.replace(/\D/g, ""))
        }

    }, [])

    const handleOnChangeInput = (event:any) => {
        timeOut.current && clearTimeout(timeOut.current)
        timeOut.current = setTimeout(() => {
            callToZipCodeInformation(event.target.value)
        }, 500)

        setInputValue(event.target.value)
    }


    const getNeighborhoodByZipCode = async (postalcode: any)  => {
        const username = process.env.REACT_APP_GEONAMES_USER;
        const geonames = Geonames({
            username: username,
            lan: "es",
            encoding: "JSON"
        });

        const res: any = await geonames.postalCodeLookup({ postalcode, country: "MX" });
        return { 
            postalCodes: res.postalcodes.map((el: any) => {
                return {
                    cp: el.postalcode,
                    colonia: el.placeName,
                    municipio: el.adminName2,
                    estado: el.adminName1
                }
            
            })
        }
    }    

    const callToZipCodeInformation = (value: string) => {
        getNeighborhoodByZipCode(value)
            .then((res: ZipCodesResponse) => {
                const options: Array<Option> = [];
                res.postalCodes.forEach((zipCode: ZipCode, index: number) => {
                    options.push({
                        id: `${zipCode.cp}${index}`,
                        value: `${zipCode.cp} - ${zipCode.colonia} - ${zipCode.municipio} - ${zipCode.estado}`
                    })
                })
                setLocations(options)
            }).catch(err => {
                console.log(err)
                setLocations([])
            })
    }

    const handleSelection = (option?: Option) => {
        let newObject:any = {}
        newObject[field] = option

        setFormResponses((prevState:any) => ({...prevState, ...newObject}))
        setSelection(option)
    }

    return (
        <AddressContainer className="animated fadeIn">
            <SelectInput
                withInputContainer={true}
                options={locations}
                onSelectionChange={handleSelection}
                inputProps={{
                    type: "tel",
                    value: inputValue,
                    onChange: handleOnChangeInput
                }}
            />


            <OptionSelected>
                Opción seleccionada<br /><br/>
                { selection.value }
            </OptionSelected>
        </AddressContainer>
    )
}

const AddressContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const OptionSelected = styled(RegularText)`
    padding: 10px 0;
`;