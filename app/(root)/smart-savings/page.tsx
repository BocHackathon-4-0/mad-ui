"use client";

import React, { Fragment, useEffect, useState } from "react";
import { AdminAuth } from "@/app/context/AuthContext";
import { useCookies } from "react-cookie";
import { fetchCollection } from "@/lib/actions/user.actions";
import { Bar } from "react-chartjs-2";
// @ts-ignore
import { groupBy } from "lodash";

export default function Savings() {
  const { admin } = AdminAuth();
  const [cookies, setCookie] = useCookies();

  const [user, setUser] = useState<any>(null);
  // console.info("admin issue invoice => ", admin);
  useEffect(() => {
    if (!user && cookies.uid) {
      fetchCollection(cookies.uid, "Users").then((user) => setUser(user));
    }
  }, [cookies]);
  // console.log("Savings", user);
  const investments = user?.investments || [];
  // console.log("savings", investments);

  function getData() {
    if (investments.length === 0) return { x: [], y: [] };
    // let type: string[] = [];
    // let amount: number[] = [];
    let groupedResults = groupBy(investments, (result: any) => result.stock);
    // console.log(groupedResults);
    const keys = [];
    const sums = [];
    for (const key in groupedResults) {
      if (groupedResults.hasOwnProperty(key)) {
        keys.push(key);
        const amountArray = groupedResults[key].map((item: any) => item.amount);
        const sum = amountArray.reduce((acc: any, curr: any) => acc + curr, 0);
        sums.push(sum);
      }
    }

    // const investments = savings.filter((obj) => obj.type === "investment");
    // const savingsContr = savings.filter((obj) => obj.type === "savings");

    // const totalInv = investments.reduce(
    //   (total, item) => total + item.amount,
    //   0
    // );
    // const totalSav = savingsContr.reduce(
    //   (total, item) => total + item.amount,
    //   0
    // );
    return { x: keys, y: sums };
  }

  const data = {
    labels: getData().x,
    datasets: [
      {
        label: "Smart savings",
        data: getData().y,
        backgroundColor: ["rgb(114, 47, 55)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    ticks: {
      precision: 0,
    },
  };

  const investTotal = investments.reduce((total, obj) => total + obj.amount, 0);

  return (
    <Fragment>
      <h1 className="head-text" style={{ marginBottom: 100 }}>
        Smart savings
      </h1>
      <Bar data={data} options={options} style={{ maxHeight: "45vh" }} />
      <div className="mt-10">Total money invested: €{investTotal}</div>
    </Fragment>
  );
}
