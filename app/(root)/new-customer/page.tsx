import React, {Fragment} from 'react';
import NewCustomerForm from "@/app/components/customer-forms/new-customer";

export default function NewCustomer() {
    return(
        <Fragment>
            <h1 className='head-text'>New Customer</h1>
            <NewCustomerForm />
        </Fragment>
    );
}
