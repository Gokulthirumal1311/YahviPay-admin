import React from 'react'
import { useGetFetch, usePostFetch } from '../hooks/useFetch'
export const getHomeSupport=async(payLoad)=>{
    const data= await usePostFetch("/marketing/getHomeSupport", payLoad);
    return data;
}

export const getAllLeads=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getAllLeads",payLoad);
    return data;
}

export const searchBusiness=async(payLoad)=>{
    const data=await usePostFetch("/marketing/searchBusiness",payLoad);
    return data;
}

export const getAgentById=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getAgentById",payLoad);
    return data;
}

export const getRegisteredDeviceCountFromDate=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getRegisteredDeviceCountFromDate",payLoad);
    return data;
}

export const getLocations=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getLocations",payLoad);
    return data;
}

export const getKycPendingList=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getKycPendingList",payLoad);
    return data;
}

export const getLoanAgentCountsByDate=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getLoanAgentCountsByDate",payLoad);
    return data;
}


export const findDevices=async(payLoad)=>{
    const data=await usePostFetch("/business/findDevices",payLoad);
    return data;
}

export const getDevices=async(payLoad)=>{
    const data=await usePostFetch("/business/getDevices",payLoad);
    return data;
}

export const getAllServices=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getAllServices",payLoad);
    return data;
}

export const getServicesById=async(payLoad)=>{
    const data=await usePostFetch("/marketing/getServiceById",payLoad);
    return data;
}

export const getAllUserAccounts=async(payLoad)=>{
    const data=await usePostFetch("/business/getAllUserAccounts",payLoad);
    return data;
}

export const getLoanCode=async(payLoad)=>{
    const data=await usePostFetch("/business/getLoanCode",payLoad);
    return data;
}

export const getBusinessVPA=async(payLoad)=>{
    const data=await usePostFetch("/business/getBusinessVPA",payLoad);
    return data;
}

export const getMarketingAgents=async(payLoad)=>{
    const data=await usePostFetch("/business/getMarketingAgents",payLoad);
    return data;
}

export const getStatus=async(payLoad)=>{
    const data=await usePostFetch("/business/getStatus",payLoad);
    return data;
}

export const getVerifyFlags=async(payLoad)=>{
    const data=await usePostFetch("/business/getVerifyFlags",payLoad);
    return data;
}

export const getTransactionDetails=async(payLoad)=>{
    const data=await usePostFetch("/business/getTransactionDetails",payLoad);
    return data;
}


export const getDownloads=async(payLoad)=>{
    const data=await usePostFetch("/business/getDownloads",payLoad);
    return data;
}

export const getSettlementCount=async(payLoad)=>{
    const data=await usePostFetch("/business/getSettlementCount",payLoad);
    return data;
}

export const getSettlementsByStatus=async(payLoad)=>{
    const data=await usePostFetch("/business/getSettlementsByStatus",payLoad);
    return data;
}

export const getSettlementsByAction=async(payLoad)=>{
    const data=await usePostFetch("/business/getSettlementsByAction",payLoad);
    return data;
}

export const getSettlements=async(payLoad)=>{
    const data=await usePostFetch("business/getSettlements",payLoad);
    return data;
}

export const getSettlementDetails=async(payLoad)=>{
    const data=await usePostFetch("business/getSettlementDetails",payLoad);
    return data;
}

export const getAllOpenOrders=async(payLoad)=>{
    const data=await usePostFetch("business/getAllOpenOrders",payLoad);
    return data;
}

export const getProducts=async(payLoad)=>{
    const data=await usePostFetch("business/getProducts",payLoad);
    return data;
}

export const getOrders=async(payLoad)=>{
    const data=await usePostFetch("business/getOrders",payLoad);
    return data;
}

export const getOrdersByStatus=async(payLoad)=>{
    const data=await usePostFetch("business/getOrdersByStatus",payLoad);
    return data;
}

export const getTicketsByStatus=async(payLoad)=>{
    const data=await usePostFetch("business/getTicketsByStatus",payLoad);
    return data;
}

export const createTicket=async(payLoad)=>{
    const data=await usePostFetch("business/createTicket",payLoad);
    return data;
}


export const getAllAgents=async(query)=>{
    const data=await useGetFetch("marketing/getAllagents",query);
    return data;
}

export const getAccountDetails=async(query)=>{
    const data=await useGetFetch("business/getAccountDetails",query);
    return data;
}





































