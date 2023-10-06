import {Spin} from "antd";
import React from "react";

export default function LoadingSkeleton() {
    return(
        <main className={'text-center'}>
            <h2 className={'text-primary'}></h2>
            <p>Hopefully not for too long :)</p>
            <Spin />
        </main>
    );
}
