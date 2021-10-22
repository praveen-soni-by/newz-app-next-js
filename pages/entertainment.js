import React from 'react'
import Newz from '../components/Newz';
import NewsService from "../service/NewsService";

export default function Entertainment({ news }) {
    return <Newz news={news} />
}

export async function getServerSideProps(context) {
    const response = await NewsService.GET_ENTERTAINMENT_NEWZ()
    return {
        props: {
            news: response.data ? response.data.articles : [],
        },
    };
}