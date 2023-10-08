"use client";

import {useRouter} from "next/navigation";
import {Button, Form, Input, message, Space, Spin} from "antd";
import React, {Fragment, useState} from "react";

type FieldTypes = {
    clientEmail?: string;
    name?: string;
    amount?: number;
    investment?: number;
};

export default function NewCustomerForm() {
    const [isLoading, setIsLoading]
        = useState<boolean>(false);

    const router = useRouter();

    const onFinish = (values: any) => {
        setIsLoading(true);
        const payload = {
            userId: "jkfBCYstfgQ4FIcig2Y3sQ7dvZ62",
            name: "Dionysis Kastellanis",
            email: "dionysis.k22@gmail.com",
            companyEmail: "invoice@company.com",
            invoiceDetails: {
                total: parseInt(values.amount),
            },
            invest: parseInt(values.investment),
            freelancerType: "software developer",
        };

        fetch("http://localhost:8080/add-freelancer-invoice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer YwbzJnSXA5WXpDL2h32aWRlcl94NTA5X2N",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (!response.ok) {
                    setIsLoading(false);
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                console.log("Response data:", data);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error("There was a problem with the fetch operation:", error);
            });

        // DISPLAY TOAST MESSAGE
        message.open({
            content: "Invoice Created Successfully",
        }).then();

        // WAIT, THEN REDIRECT
        setTimeout(() => {
            setIsLoading(false);
            router.push('/');
        }, 4000);
    };

    return (
        <Fragment>
            {!isLoading ? (
                <Form layout="vertical" className="mt-10 w-2/3" onFinish={onFinish}>
                    <div>
                        <p className={"text-light-2 font-bold"}>Name</p>
                        <Form.Item<FieldTypes> name="name" className={"pt-2"}>
                            <Input/>
                        </Form.Item>
                    </div>

                    <div>
                        <p className={"text-light-2 font-bold"}>Client Email</p>
                        <Form.Item<FieldTypes> name="clientEmail" className={"pt-2"}>
                            <Input/>
                        </Form.Item>
                    </div>

                    <div className={"w-2/5"}>
                        <p className={"text-light-2 font-bold"}>Amount</p>
                        <Form.Item<FieldTypes> name="amount" className={"pt-2"}>
                            <Input type={"number"}/>
                        </Form.Item>
                    </div>

                    <div className={"w-2/5"}>
                        <p className={"text-light-2 font-bold"}>Investment</p>
                        <Form.Item<FieldTypes> name="investment" className={"pt-2"}>
                            <Input type={"number"}/>
                        </Form.Item>
                    </div>

                    <Button type="primary" htmlType="submit" className={"bg-primary-500"}>
                        Submit
                    </Button>
                </Form>
            ) : (
                <Fragment>
                    <div className={'visual-complete'}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Spin tip="Loading" size="large">
                                <div className="content" />
                            </Spin>
                        </Space>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
