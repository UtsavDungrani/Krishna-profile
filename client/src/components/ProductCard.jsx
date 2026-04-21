export default function ProductCard({ image, title, description, onViewDetails, onImageClick, detailsLink = '/contact' }) {
  return (
    <div className="card group">
      {/* Image container */}
      <div className="w-full h-40 mb-4 overflow-hidden rounded-md bg-gray-100">
        <img
          src={image}
          alt={title}
          onClick={onImageClick}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            onImageClick ? 'cursor-zoom-in' : ''
          }`}
        />
      </div>

      {/* Content */}
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

      {/* View details action */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        {onViewDetails ? (
          <button
            type="button"
            onClick={onViewDetails}
            className="text-primary font-medium text-sm hover:underline"
          >
            View Details
          </button>
        ) : (
          <a href={detailsLink} className="text-primary font-medium text-sm hover:underline">
            View Details
          </a>
        )}
      </div>
    </div>
  )
}
