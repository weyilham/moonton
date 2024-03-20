import BrowseMovie from "@/Components/BrowseMovie";
import FeaturMovie from "@/Components/FeaturMovie";
import Authenticated from "@/Layouts/Autenticated/index.jsx";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
export default function dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((item) => (
                        <FeaturMovie
                            key={item}
                            title="The Batman in Love"
                            category="Action . Comedy"
                            rating={5}
                            slug="the-batman-in-love"
                            thumbnail={`/images/featured-${item}.png`}
                        />
                    ))}
                </Flickity>
            </div>

            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <BrowseMovie
                            key={item}
                            title="The Batman in Love"
                            category="Action . Comedy"
                            slug="the-batman-in-love"
                            thumbnail={`/images/browse-${item}.png`}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
