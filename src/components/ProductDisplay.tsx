
import FloatingProduct from "@/components/FloatingProduct";

interface Product {
  title: string;
  description: string;
  websiteUrl: string;
  color: string;
}

const products: Product[] = [
  {
    title: "Delvent",
    description: "Event management system for empowering organisers to build secure, engaging, and data-driven experiences for attendees.",
    websiteUrl: "https://delvent.io",
    color: "#3B82F6" // blue-500
  },
  {
    title: "Segment",
    description: "Decentralised, identity-first storage protocol enabling secure, scalable, and verifiable data storage. It is designed for the next generation of privacy-first applications, collaborative platforms, and immutable record systems.",
    websiteUrl: "https://delvent.io",
    color: "#8B5CF6" // violet-500
  },
  {
    title: "ChainSignal",
    description: "Cross-chain messaging protocol that lets you send secure messages to any wallet address without needing the recipient to opt in. If you can send tokens, you can send a message.",
    websiteUrl: "https://delvent.io",
    color: "#EC4899" // pink-500
  }
];

const ProductDisplay = (): JSX.Element => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex justify-center">
            <FloatingProduct
              title={product.title}
              description={product.description}
              websiteUrl={product.websiteUrl}
              delay={index % 3}
              color={product.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
