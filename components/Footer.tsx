export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Developer Portfolio</div>
      </div>
    </footer>
  )
}