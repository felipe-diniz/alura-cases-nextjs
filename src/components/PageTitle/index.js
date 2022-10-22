import Head from "next/head"

const PageTitle = ({texto}) => {
  return(
    <Head>
      <title>{texto}</title>
    </Head>
  )
}

export default PageTitle