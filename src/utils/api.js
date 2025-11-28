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
    const res = await fetch(`${WP_API_URL}/portfolio?per_page=${limit}`);
    const data = await res.json();

    if (!Array.isArray(data)) return [];

    return data.map((post) => {
      const fields = Array.isArray(post.acf) ? {} : post.acf;

      // --- IMAGE PRIORITY LOGIC ---
      // 1. New Host usually supports standard featured media better
      let img =
        fields.custom_featured_image || // The manual link field (Safest)
        post.featured_media_src_url || // Plugin (Better REST API)
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || // Standard
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; // Fallback

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
