import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Autenticated/index";
import React from "react";

function subscription() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard
                        name="Basic"
                        price={299000}
                        durationInMonths={3}
                        features={[
                            "1 Month",
                            "Unlimited Movies",
                            "Unlimited Shows",
                        ]}
                    />

                    {/* For {Premium} */}
                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={899000}
                        durationInMonths={6}
                        features={[
                            "1 Month",
                            "Unlimited Movies",
                            "Unlimited Shows",
                            "Premium Support",
                            "Unlimited Movies",
                            "Unlimited Shows",
                        ]}
                    />
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
}

export default subscription;
