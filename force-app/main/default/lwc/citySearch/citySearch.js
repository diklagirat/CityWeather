import { LightningElement } from 'lwc';

export default class CitySearch extends LightningElement {
    city;

    handleChangeCity(event) {
        this.city = event.target.city;
    }
}