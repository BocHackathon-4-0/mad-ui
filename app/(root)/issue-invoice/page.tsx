'use client'
import React, {Fragment} from 'react';
import NewCustomerForm from "@/app/components/customer-forms/new-customer";
import { AdminAuth } from '@/app/context/AuthContext';

export default function NewCustomer() {
    const {admin} = AdminAuth();
    console.info('admin issue invoice => ', admin);
    return(
        <Fragment>
            <h1 className='head-text'>New Customer</h1>
            <NewCustomerForm />
        </Fragment>
    );
}
