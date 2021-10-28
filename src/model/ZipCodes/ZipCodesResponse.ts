export interface ZipCode {
    cp: String
    colonia: String
    municipio: String
    estado: String
}

export interface ZipCodesResponse {
    postalCodes: Array<ZipCode>
}