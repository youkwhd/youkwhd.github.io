import { PageConfig } from "next"
import { NextSeo } from "next-seo"

import { MainLayout as Layout } from "@/src/components/Layout"

export const config: PageConfig = { unstable_runtimeJS: false }

export default (): JSX.Element => {
    return (
        <Layout title={{ name: "Photos" }}>
            <NextSeo title="photos of me" />

            <br />

            <div>
                <img src="/images/me/img_1941.jpg" alt="" loading="lazy" width={300} height={400} />
                <br />
                <small>University Toilet: During Covid19</small>
            </div>
            <br />

            <div>
                <img src="/images/me/img_8745.jpg" alt="" loading="lazy" width={300} height={260} />
                <br />
                <small>Before University</small>
            </div>
            <br />

            <div>
                <img src="/images/me/img_6044.jpg" alt="" loading="lazy" width={300} height={326} />
                <br />
                <small>Old, I don't remember when</small>
            </div>
            <br />

            <div>
                <img src="/images/me/img_3522.jpg" alt="" loading="lazy" width={300} height={270} />
                <br />
                <small>Me, and my eyes</small>
            </div>
            <br />

            <h2>Why do I use an iPhone?</h2>
            <p>This is what I currently have. My first phone was an android, once it's life has been cut off, me mom gave me her phone which is an iPhone.</p>

        </Layout>
    )
}
