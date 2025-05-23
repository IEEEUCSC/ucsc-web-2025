import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: "" , //enter
    dataset: "production",
    apiVersion: "", //enter
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)