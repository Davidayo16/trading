// src/components/Pagination.js
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  
  return (
    <div className="flex items-center justify-center mt-6 gap-1">
      <button 
        className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-sm disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      
      {pages.map(page => (
        <button 
          key={page}
          className={`px-3 py-1 rounded text-sm ${
            currentPage === page 
              ? 'bg-rage-purple text-white' 
              : 'bg-gray-800 text-gray-300'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      
      <button 
        className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-sm disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}