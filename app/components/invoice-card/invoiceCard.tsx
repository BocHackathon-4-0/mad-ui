import Image from "next/image";
interface InvoiceProps {
    socialInsurance: string;
    invoiceTotal: number;
    serviceFee: string;
    invest: string;
    email: string;
    gross: string;
    gesy: string;
    tax: string;
    net: string;
}

function InvoiceCard(props: InvoiceProps) {
    return (
        <article className={'invoice-card cursor-pointer'}>
            <div className={'flex flex-wrap items-center gap-3'}>
                <div className='relative h-12 w-12'>
                    <Image
                        src={"/assets/generic_logo.jpg"}
                        alt='company_logo'
                        fill
                        className='rounded-full object-cover'
                    />
                </div>
                {/* MAY ADD AN AVATAR - THUS DIV ABOVE */}
                <div>
                    <h4 className='text-base-semibold text-light-1'>Email: {props?.email}</h4>
                    <p className='text-small-medium text-gray-1'>- Company Name -</p>
                </div>
            </div>

            <p className='mt-4 text-small-medium text-gray-1'>Total: {props?.invoiceTotal}</p>
            <br />
            <p className='mt-2 text-small-medium text-gray-1'>Service Fee: {props?.serviceFee}</p>
            <p className='mt-2 text-small-medium text-gray-1'>Investment: {props?.invest}</p>
            <br />
            <p className='mt-2 text-small-medium text-gray-1'>Gross: {props?.gross}</p>
            <p className='mt-2 text-subtle-medium text-gray-1'>Gesy: {props?.gesy}</p>
            <p className='mt-2 text-subtle-medium text-gray-1'>Tax: {props?.tax}</p>
            <p className='mt-2 text-subtle-medium text-gray-1'>Social Insurance: {props?.socialInsurance}</p>
            <br />
            <p className='mt-3 text-subtle-medium text-light-1'>NET: {props?.net}</p>

            {/*<div className='mt-5 flex flex-wrap items-center justify-between gap-3'>*/}
            {/*    <Link href={`#`}>*/}
            {/*        <Button className={'bg-primary-500 text-light-1 border-0 invoice-btn'}>*/}
            {/*            View*/}
            {/*        </Button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </article>
    );
}

export default InvoiceCard;
