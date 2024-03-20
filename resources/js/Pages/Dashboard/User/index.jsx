import BrowseMovie from "@/Components/BrowseMovie";
import FeaturMovie from "@/Components/FeaturMovie";
import Authenticated from "@/Layouts/Autenticated/index.jsx";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
export default function dashboard({ auth, isFeature, movies }) {
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
        <Authenticated auth={auth}>
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
                    {isFeature.map((item) => (
                        <FeaturMovie
                            key={item.id}
                            title={item.name}
                            category={item.comedy}
                            rating={item.rating}
                            slug={item.slug}
                            thumbnail={item.thubmnail}
                        />
                    ))}
                </Flickity>
            </div>

            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movies.map((item) => (
                        <BrowseMovie
                            key={item.id}
                            title={item.name}
                            category={item.comedy}
                            slug={item.slug}
                            thumbnail={item.thubmnail}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
