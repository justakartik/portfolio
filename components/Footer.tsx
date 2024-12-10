export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JustaKarik.com. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  