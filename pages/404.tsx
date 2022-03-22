import { PageConfig } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MainLayout } from "../components/Layout";
import { getAllBanners } from "../utils/getBanners";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

const NotFound = ({ banners }: any): JSX.Element => {
    return (
        <>
            <NextSeo
                title="404 not found"
            />
            <MainLayout banners={banners}>
                <h1>404 not found</h1>
                <p>The page you are requesting is sadly not present. Are you lost? consider going back to the <Link href="/"><a>homepage</a></Link>.</p>
            </MainLayout>
        </>
    );
};

export default NotFound;

export const getStaticProps = async () => {
    const banners = getAllBanners();

    return {
        props: {
            banners
        }
    };
};
