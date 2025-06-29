"use client";
import React, { useEffect, useState } from "react";
type props = {
    hobby: string | undefined;
    time: number | undefined;
    budget: number | undefined;
}

//component showing hobby plan
const HobbyPlan = (props: props) => {
    return (
        <h1>Your Hobby Plan for {props.hobby}</h1>
    )
}

export default HobbyPlan;