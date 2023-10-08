"use client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { fetchCollection, fetchInvoices } from "@/lib/actions/user.actions";
import InvoiceCard from "@/app/components/invoice-card/invoiceCard";

export default function Home() {
  const [cookies, setCookie] = useCookies();
  const [user, setUser] = useState<any>(null);
  const [invoices, setInvoices] = useState<any>([]);

  useEffect(() => {
    if (!user && cookies.uid) {
      // FETCH CURRENT USER
      fetchCollection(cookies.uid, "Users").then((user) => {
        // console.log("user in page", cookies.uid);
        setUser(user);
      });
      // FETCH INVOICES
      fetchInvoices(cookies.uid, "Invoices").then((res) => {
        // console.info('Filtered => ', filtered);
        const sorted = res
          .map((invoice) => ({ ...invoice, date: invoice.date.toDate() }))
          .sort(function (a, b) {
            return b.date - a.date;
          });
        setInvoices(sorted);
      });
    }
  }, [cookies]);

  console.log(invoices);

  return (
    <>
      <h1 className="head-text text-left">Recent Invoices</h1>

      <section className={"flex flex-wrap gap-4"}>
        {invoices?.map((invoice: any, index: number) => (
          <InvoiceCard
            key={`${index}`}
            invoiceTotal={invoice?.invoiceTotal}
            gesy={invoice?.taxCalculator?.gesy}
            gross={invoice?.taxCalculator?.gross}
            tax={invoice?.taxCalculator?.tax}
            socialInsurance={invoice?.taxCalculator?.socialInsurance}
            net={invoice?.taxCalculator?.net}
            serviceFee={invoice?.serviceFee}
            invest={invoice?.invest}
            email={invoice?.email}
            date={invoice?.date}
          />
        ))}
      </section>
    </>
  );
}
