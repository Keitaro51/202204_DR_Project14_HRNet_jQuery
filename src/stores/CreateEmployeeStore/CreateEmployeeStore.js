import { observable, action } from "mobx";

class CreateEmployeeStore {
    @observable
    firstName = null;

    @observable
    lastName = null;

    @observable
    street = null;

    @observable
    city = null;

    @observable
    state = null;

    @observable
    zipCode = null;

    @observable
    email = null;

    @observable
    phoneNumber = null;

    @action.bound
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    @action.bound
    setLastName(lastName) {
        this.lastName = lastName;
    }

    @action.bound
    setStreet(street) {
        this.street = street;
    }

    @action.bound
    setCity(city) {
        this.city = city;
    }

    @action.bound
    setState(state) {
        this.state = state;
    }

    @action.bound
    setZipCode(zipCode) {
        this.zipCode = zipCode;
    }

    @action.bound
    setEmail(email) {
        this.email = email;
    }

    @action.bound
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @action.bound
    saveEmployee() {
        const {
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
            email,
            phone,
        } = this;
        const employee = {
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
            email,
            phone,
        }

        let employees = JSON.parse(localStorage.getItem('getItems')) || [];
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees))
    }
}

export default CreateEmployeeStore;
