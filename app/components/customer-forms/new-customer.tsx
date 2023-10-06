'use client';

import {useRouter} from "next/navigation";
import {Button, Form, Input} from 'antd';
import React from 'react';

export default function NewCustomerForm() {
    const router = useRouter();
    return(
        <Form layout="vertical" className='mt-10 w-2/3'>
            <div>
                <p className={'text-light-2 font-bold'}>First Name</p>
                <Form.Item name="firstName" className={'pt-2'}>
                    <Input/>
                </Form.Item>
            </div>

            <div>
                <p className={'text-light-2 font-bold'}>Last Name</p>
                <Form.Item name="lastName" className={'pt-2'}>
                    <Input/>
                </Form.Item>
            </div>

            <div>
                <p className={'text-light-2 font-bold'}>Mobile</p>
                <Form.Item name="mobile" className={'pt-2'}>
                    <Input/>
                </Form.Item>
            </div>

            <Button type="primary" htmlType="submit" className={'bg-primary-500'}>
                Submit
            </Button>

        </Form>
    );
}
