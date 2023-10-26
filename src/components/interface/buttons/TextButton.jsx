export default function TextButton({ children, ...props }) {
  return (
    <button
      {...props}
      // styles
      className="mb-2 mr-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:text-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </button>
  )
}
