// components/PortfolioItem.js
export default function PortfolioItem({ image, title, description }) {
    return (
      <div>
        <img src={image} alt={title} className="rounded-md" height={"50px"} />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    )
  }