export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}
