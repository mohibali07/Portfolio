// --- CONFIGURATION ---
// Update this line with your NEW Hostinger URL
// Update this line with your NEW Hostinger URL
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://darkgoldenrod-wombat-129752.hostingersite.com";
const WP_API_URL = `${BASE_URL}/wp-json/wp/v2`;

export const fetchPageBySlug = async (slug) => {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${slug}`);
    if (!res.ok) throw new Error("Failed");
    const data = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    return null;
  }
};

export const fetchPortfolio = async (limit = 20) => {
  try {
    const res = await fetch(`${WP_API_URL}/portfolio?per_page=${limit}&_embed`);
    const data = await res.json();

    if (!Array.isArray(data)) return [];

    return data.map((post) => {
      const fields = Array.isArray(post.acf) ? {} : post.acf;

      // --- IMAGE PRIORITY LOGIC ---
      // Helper to extract URL from ACF Image field
      const getAcfUrl = (item) => {
        const acf = item.acf;
        if (!acf) return null;

        // 1. Check 'custom_featured_image_source' (ACF to REST API plugin format)
        if (
          acf.custom_featured_image_source &&
          typeof acf.custom_featured_image_source.formatted_value === "string"
        ) {
          return acf.custom_featured_image_source.formatted_value;
        }

        // 2. Check standard 'custom_featured_image' (Object or URL)
        const field = acf.custom_featured_image;
        if (!field) return null;
        if (typeof field === "string") return field; // It's a URL
        if (typeof field === "object" && field.url) return field.url; // It's an Image Object

        return null;
      };

      const acfImage = getAcfUrl(post);

      let img =
        acfImage || // 1. ACF Field (Prioritized)
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || // 2. Standard Featured Image
        post.featured_media_src_url || // 3. Plugin Fallback
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; // 4. Final Fallback

      // Taxonomy
      let taxonomyTag = "general";
      if (post._embedded?.["wp:term"]) {
        const flat = post._embedded["wp:term"].flat();
        const found = flat.find((t) => t.taxonomy === "portfolio-category");
        if (found) taxonomyTag = found.name;
      }

      return {
        id: post.id,
        title: post.title.rendered,
        tag: taxonomyTag.toLowerCase(),
        cat: fields.client_name || "Featured",
        link: fields.project_url || "#",
        year: fields.project_year || "2024",
        img: img,
      };
    });
  } catch (error) {
    console.warn("API Error:", error);
    return [];
  }
};
