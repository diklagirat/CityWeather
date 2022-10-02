import { LightningElement } from 'lwc';

export default class CitySearch extends LightningElement {
    city;
    value = this.city;

    get cityOptions() {
        return [
            { label: 'New York', value: 'New York' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Delhi', value: 'Delhi' },
            { label: 'São Paulo', value: 'São Paulo' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'Paris', value: 'Paris' },
            { label: 'Tel Aviv', value: 'Tel Aviv' },
            { label: 'Miami', value: 'Miami' },
            { label: 'Washington', value: 'Washington' },
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Madrid', value: 'Madrid' },
            { label: 'Rome', value: 'Rome' },
        ];
    }
    handleChangeCityList(event) {
        this.value = event.detail.value;
        this.city = this.value;
    }

    handleChangeCity(event) {
        this.city = event.target.city;
    }
}