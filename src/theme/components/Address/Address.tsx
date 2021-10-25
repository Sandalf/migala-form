import React, {useRef, useState} from "react";
import styled from "styled-components";
import {SelectInput} from "src/theme/components/Select/SelectInput";
import {ApiService} from "src/theme/services/ApiService";
import {environment} from "src/environments/environment";
import {Option} from "src/model/Survey/SurveyModel";
import {ZipCodesResponse} from "src/model/ZipCodes/ZipCodesResponse";
import {RegularText} from "src/theme/styles/generalstyles/Text";

export const Address = () => {

    const [ selection, setSelection ]:any = useState({})

    const _apiService = useRef(new ApiService()).current
    const timeOut:any = useRef(null)

    const [locations, setLocations]:any = useState([])

    const handleOnChangeInput = (event:any) => {
        timeOut.current && clearTimeout(timeOut.current)
        timeOut.current = setTimeout(() => {
            callToZipCodeInformation(event.target.value)
        }, 500)
    }

    const callToZipCodeInformation = (value: string) => {
        _apiService.get(`${environment.zipCodeServer}colonias/cp/`, {valor: value}, null, false).then((res: any) => {
            let resString = res.trim()
            let response: Array<ZipCodesResponse> = JSON.parse(resString)

            let options: Array<Option> = [];

            response.forEach( (responseItem:any, index: number) => {
                options.push({
                    id: `${responseItem.CP}${index}`,
                    value: `${responseItem.CP} - ${responseItem.Colonia} - ${responseItem.Municipio} - ${responseItem.Entidad}`
                })
            })
            setLocations(options)
        }).catch( err => {
            console.log(err)
            setLocations([])
        })
    }

    const handleSelection = (option?: Option) => {
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