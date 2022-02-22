import Head from 'next/head'
import headerStyle from "../styles/Header.module.css"

export default function Home() {
  return (
      <div>

      <Head> 
        <title>Your Title</title>
        <meta name="keywords" content= "crypto game sample"></meta>
      </Head>
      <div>
            <h1 className={headerStyle.title}>
                <span>Your Header</span>
            </h1>
            <h1 className={headerStyle.spantitle} > 
            <span > Your Application Name</span>
            </h1>

            <p className={headerStyle.description}> Your Description</p>

      </div>

      <div className={headerStyle.center}>
      <img style={{alignItems:'center'}} src="../images/clown-fish-64.png"></img>
      </div>
      </div>
  )
}
