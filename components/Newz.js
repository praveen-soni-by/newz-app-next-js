import React from "react";
import Card from "./Card";
import NewsService from "../service/NewsService";


export default function Newz({ news }) {
  // const [pageNumber, setPageNumber] = React.useState(1);
  // const [loading, setLoading] = React.useState(false);
  // const [data, setData] = React.useState(news);

  // const observer = React.useRef();
  // const lastElementRef = React.useCallback((node) => {
  //   if (observer.current) observer.current.disconnect();
  //   if (!loading) {
  //     observer.current = new IntersectionObserver(entries => {
  //       if (entries[0].isIntersecting) {
  //         setPageNumber(pageNumber + 1);
  //       }
  //     })
  //   }
  //   if (node) {
  //     observer.current.observe(node)
  //   }
  // });


  // React.useEffect(() => {
  //   setLoading(true);
  //   async function getData() {
  //     const response = await NewsService.GET_HEADLINES(pageNumber);
  //     setData(response.data ? [...news, ...response.data.articles] : news, () => {
  //       setLoading(false);
  //     });

  //   }
  //   getData();
  // }, [pageNumber])



  return (
    <div className="justify-center content-center">
      <div className="flex flex-wrap overflow-hidden px-10 px-10  sm:-mx-2 md:-mx-1 lg:-mx-3 xl:-mx-2
       xx300:px-4 xx300:mt-8 xx300:px-4  
      ">
        {news && news.map((newz, index) => <Card newz={newz} key={index} />)}
        
  
      </div>
    </div>
  );
}


// if (news.length === index + 1) {
//   //     return (
//   //       <div ref={lastElementRef} key={index}>
//   //         <Card newz={newz} />
//   //       </div>
//   //     )
//   //   }
//   //   else {
//   //     return <Card newz={newz} key={index} />;
//   //   }
//   // })
//   // }