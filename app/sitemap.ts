import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://cjh0120.github.io/resume/",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 1,
		},
	]
}
