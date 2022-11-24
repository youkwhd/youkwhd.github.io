import Link from "next/link"
import Banner from "@/src/components/Banner"
import type { Banner as BannerType } from "@/src/types"

type Props = { banners: BannerType[] }
export default ({ banners }: Props): JSX.Element => {
    return (
        <footer>
            <hr/>
            <p>go back to the <Link href="/">homepage</Link> | swoosh to <Link href="/posts">blog posts</Link> | updates via <Link href="/rss.xml">rss</Link></p>
            {/*
            <div className="banner-wrapper">
                {banners.map((banner: BannerType) => <Banner src={banner.src} href={banner.url} key={banner.index} />)}
            </div>
            */}
        </footer>
    )
}
