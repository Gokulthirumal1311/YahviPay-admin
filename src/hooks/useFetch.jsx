import React, { useEffect, useState } from "react";
const Url = import.meta.env.VITE_YAHVIPAY_ADMIN_BACKEND;
const apiKey = import.meta.env.VITE_BACKEND_API_KEY;

const Headers = {
  "Content-Type": "application/json",
};

export const useGetFetch = async (endPoint) => {
  const payLoad = {
    method: "GET",
    headers: {
      ...Headers,
      apiKey: apiKey,
    }
  };
  try {
    const response = await fetch(`${Url}${endPoint}`, payLoad);
    if (!response.ok) {
      throw new Error("Failed to fetch dashboard data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Api error", error);
    throw error;
  }
};

export const usePostFetch = async (endPoint, PayLoad) => {
  const payLoad = {
    method: "POST",
    headers: Headers,
    body: JSON.stringify({
      apiKey: apiKey,
      ...PayLoad,
    }),
  };
  try {
    const response = await fetch(`${Url}${endPoint}`, payLoad);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Api error", error);
    throw error;
  }
};