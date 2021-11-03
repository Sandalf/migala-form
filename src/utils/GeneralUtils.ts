import moment from 'moment'


export const generateUniqSerial = (): string  => {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {
        const r = Math.floor(Math.random() * 16);
        return r.toString(16);
    });
}

export const getYearsOld = (birthday: string) => {
    let birthdayMoment = moment(birthday, 'YYYY-MM-DD')
    let currentDate = moment()

    return +currentDate.get("year") - +birthdayMoment.get("year")
}